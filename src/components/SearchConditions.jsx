import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchConditions.css';
import HealthCardTab from './HealthCardTab';

const SearchConditions = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [searchedTerm, setSearchedTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Auto-search with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim()) {
        autoSearch(searchTerm);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const autoSearch = async (term) => {
    const trimmed = term.trim()
    if (!trimmed) return;

    setSearchedTerm(trimmed);
    setSelectedTopic(null);
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const url =
        trimmed.toLowerCase() === 'all'
          ? 'https://searchcondition.onrender.com/searches/getAll'
          : `https://searchcondition.onrender.com/searches/search?q=${encodeURIComponent(trimmed)}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Condition not found or server error.');
      }

      const data = await response.json();
      const resultsArray = Array.isArray(data) ? data : [data];
      setResults(resultsArray);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containers">
      <h1 className="title">Health Condition Search</h1>
      <div className="search-form">
        <div className="form-row">
          <div className="input-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="searchs-icons"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search for health conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="searchs-inputs"
            />
          </div>
        </div>
      </div>

      <div className="search-info">
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!selectedTopic && searchedTerm && results.length > 0 && !loading && (
          <div className="health-grid">
            {results.map((topic, index) => (
              <div
                key={index}
                className="health-card"
                onClick={() => setSelectedTopic(topic.name)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-headerr">
                  <h3 className="card-title">{topic.name}</h3>
                  <p className="card-descriptions">{topic.overview}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!selectedTopic && searchedTerm && results.length === 0 && !loading && !error && (
          <p>No results found for "<strong>{searchedTerm}</strong>".</p>
        )}

        {!searchedTerm && !selectedTopic && (
          <>
            <div className="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-info-icon"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <h3 className="search-heading">Search for health conditions</h3>
            <p className="search-description">
              Start typing a condition like <strong>tuberculosis</strong>, <strong>cholera</strong>, or{' '}
              <strong>all</strong> to see everything.
            </p>
          </>
        )}

        {selectedTopic && <HealthCardTab query={selectedTopic} />}
      </div>
    </div>
  );
};

export default SearchConditions;

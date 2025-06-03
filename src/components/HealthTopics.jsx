import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import articles from './articles';
import healthTopics from './healthTopics';
import ArticleCard from './ArticleCard';
import { Search } from 'lucide-react';
import './HealthTopics.css';

const HealthTopics = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    let filtered = articles;
    
    if (activeCategory) {
      filtered = filtered.filter(article => article.category === activeCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(term) || 
        article.summary.toLowerCase().includes(term) || 
        article.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredArticles(filtered);
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="page-container">
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">
            Health Articles & Resources
          </h1>
          
          <div className="search-filter">
            <div className="search-box">
              <div className="searchhh-icon">
                <Search aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          
          <div className="categories-section">
            <h2 className="categories-title">Categories</h2>
            <div className="categories-list">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`category-btn ${activeCategory === null ? 'active' : ''}`}
              >
                All Topics
              </button>
              {healthTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleCategoryChange(topic.id)}
                  className={`category-btn ${activeCategory === topic.id ? 'active' : ''}`}
                >
                  {topic.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Articles grid */}
          {filteredArticles.length > 0 ? (
            <div className="articles-grid">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No articles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setActiveCategory(null);
                  setSearchTerm('');
                }}
                className="clear-filters-btn"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HealthTopics;

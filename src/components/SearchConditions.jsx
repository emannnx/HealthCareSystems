// import React, { useState } from 'react';
// import './SearchConditions.css';
// import HealthCardTab from './HealthCardTab';

// const healthTopics = [
//   {
//     title: 'Cardiovascular Health',
//     description: 'Learn about heart disease, high blood pressure, and ways to maintain cardiovascular health.',
//   },
//   {
//     title: 'Diabetes Management',
//     description: 'Information on managing diabetes, blood sugar monitoring, and healthy living strategies.',
//   },
//   {
//     title: 'Mental Health',
//     description: 'Resources for anxiety, depression, stress management, and overall mental wellbeing.',
//   },
//   {
//     title: 'Nutrition & Diet',
//     description: 'Expert advice on balanced diets, nutritional needs, and healthy eating habits.',
//   },
//   {
//     title: 'Fitness & Exercise',
//     description: 'Exercise recommendations, workout plans, and physical activity guidelines for all ages.',
//   },
//   {
//     title: 'Sleep & Recovery',
//     description: 'Importance of sleep, recovery strategies, and tips for better rest.',
//   },
// ];

// const SearchConditions = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchedTerm, setSearchedTerm] = useState('');
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       setSearchedTerm(searchTerm.trim());
//       setSelectedTopic(null);
//     }
//   };

//   const filteredTopics =
//     searchedTerm.toLowerCase() === 'all'
//       ? healthTopics
//       : healthTopics.filter((topic) =>
//           topic.title.toLowerCase().startsWith(searchedTerm.toLowerCase())
//         );

//   return (
//     <div className="containers">
//       <h1 className="title">Health Condition Search</h1>

//       <form onSubmit={handleSubmit} className="search-form">
//         <div className="form-row">
//           <div className="input-wrapper">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="searchs-icons"
//             >
//               <circle cx="11" cy="11" r="8"></circle>
//               <path d="m21 21-4.3-4.3"></path>
//             </svg>
//             <input
//               type="text"
//               placeholder="Search for health conditions..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="searchs-inputs"
//             />
//           </div>
//           <button type="submit" className="search-buttons">
//             Search
//           </button>
//         </div>
//       </form>

//       <div className="search-info">
//         {selectedTopic === 'Cardiovascular Health' && <HealthCardTab />}

//         {!selectedTopic && searchedTerm ? (
//           filteredTopics.length > 0 ? (
//             <div className="health-grid">
//               {filteredTopics.map((topic, index) => (
//                 <div
//                   key={index}
//                   className="health-card"
//                   onClick={() => {
//                     if (topic.title === 'Cardiovascular Health') {
//                       setSelectedTopic(topic.title);
//                     }
//                   }}
//                   style={{ cursor: topic.title === 'Cardiovascular Health' ? 'pointer' : 'default' }}
//                 >
//                   <div className="card-headerr">
//                     <h3 className="card-title">{topic.title}</h3>
//                     <p className="card-description">{topic.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>
//               No matching health topics found for "<strong>{searchedTerm}</strong>".
//             </p>
//           )
//         ) : null}

//         {!searchedTerm && !selectedTopic && (
//           <>
//             <div className="icon-circle">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="search-info-icon"
//               >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//               </svg>
//             </div>
//             <h3 className="search-heading">Search for health conditions</h3>
//             <p className="search-description">
//               Enter a condition name like "diabetes", "nutrition", or type "all" to see every topic.
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchConditions;


import React, { useState } from 'react';
import './SearchConditions.css';
import HealthCardTab from './HealthCardTab';

const SearchConditions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedTerm, setSearchedTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setSearchedTerm(searchTerm.trim());
    setSelectedTopic(null);
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await fetch(`http://localhost:8091/searches/get/${searchTerm.trim()}`);
      if (!response.ok) {
        throw new Error('Condition not found or server error.');
      }

      const data = await response.json();

      // Wrap in array if backend returns a single object
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
      <form onSubmit={handleSubmit} className="search-form">
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
          <button type="submit" className="search-buttons">
            Search
          </button>
        </div>
      </form>

      <div className="search-info">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!selectedTopic && searchedTerm && results.length > 0 && (
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
      <p className="card-description">{topic.overview}</p>
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
              Enter a condition name like "diabetes", "nutrition", or type "all" to see every topic.
            </p>
          </>
        )}
        {selectedTopic && <HealthCardTab query={selectedTopic} />}
      </div>
    </div>
  );
};

export default SearchConditions;

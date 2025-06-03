import React, { useState, useEffect } from "react";
import "./HealthCard.css";

const HealthCardTab = ({ query }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [disease, setDisease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchDisease = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8091/searches/get/${query.trim()}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDisease(data);
      } catch (err) {
        setError("Failed to load disease data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDisease();
  }, [query]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (loading) return <div className="health-cards">Loading disease data...</div>;
  if (error) return <div className="health-cards">{error}</div>;
  if (!disease) return <div className="health-cards">No disease data available.</div>;

  const tabContent = {
    overview: (
      <div className="content-section">
        <h3>Overview</h3>
        <p>{disease.overview}</p>
      </div>
    ),
  
    symptoms: (
      <div className="content-section">
        <h3>Symptoms</h3>
        {disease.symptoms && disease.symptoms.length > 0 ? (
          <ul>
            {disease.symptoms.map((symptom, idx) => (
              <li key={idx}>{symptom}</li>
            ))}
          </ul>
        ) : (
          <p>No symptoms listed.</p>
        )}
      </div>
    ),
  
    management: (
      <div className="content-section">
        <h3>Management</h3>
        {Array.isArray(disease.management) && disease.management.length > 0 ? (
          <ul>
            {disease.management.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No management info available.</p>
        )}
      </div>
    ),
  
    prevention: (
      <div className="content-section">
        <h3>Prevention</h3>
        {Array.isArray(disease.prevention) && disease.prevention.length > 0 ? (
          <ul>
            {disease.prevention.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No prevention info available.</p>
        )}
      </div>
    ),
  
    treatment: (
      <div className="content-section">
        <h3>Treatment</h3>
        {Array.isArray(disease.treatment) && disease.treatment.length > 0 ? (
          <ul>
            {disease.treatment.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No treatment info available.</p>
        )}
      </div>
    ),
  };
  

  return (
    <div className="health-cards">
      <div className="card-header">
        <h3 className="card-title">{disease.name}</h3>
        <p className="card-description">{disease.definition || ""}</p>
      </div>

      <div role="tablist" aria-orientation="horizontal" className="tabs-container">
        {["overview", "symptoms", "management", "prevention", "treatment"].map((tabKey) => (
          <button
            key={tabKey}
            type="button"
            role="tab"
            aria-selected={activeTab === tabKey}
            onClick={() => handleTabClick(tabKey)}
            className={`tab ${activeTab === tabKey ? "active" : ""}`}
          >
            <span className="tab-label">{tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}</span>
          </button>
        ))}
      </div>

      {tabContent[activeTab]}
    </div>
  );
};

export default HealthCardTab;

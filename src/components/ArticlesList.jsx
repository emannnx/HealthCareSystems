import React, { useState } from "react";
import articles from "./articles";
import "./ArticlesList.css";

const ArticlesList = () => {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const selectedArticle = articles.find((a) => a.id === selectedArticleId);

  return (
    <div className="articles-container">
      <h1>Health Articles</h1>
      <div className="articles-list">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            onClick={() => setSelectedArticleId(article.id)}
          >
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="article-image"
              />
            )}
            <div className="article-info">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-summary">{article.summary}</p>
              <div className="article-meta">
                <span>By {article.author}</span> |{" "}
                <span>{new Date(article.publishDate).toLocaleDateString()}</span> |{" "}
                <span>{article.readTime} min read</span> |{" "}
                <span className="article-category">{article.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div className="article-detail">
          <button
            className="close-btn"
            onClick={() => setSelectedArticleId(null)}
          >
            Close
          </button>
          <h2>{selectedArticle.title}</h2>
          <p><strong>By:</strong> {selectedArticle.author}</p>
          <p><strong>Published:</strong> {selectedArticle.publishDate}</p>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
          />
        </div>
      )}
    </div>
  );
};

export default ArticlesList;

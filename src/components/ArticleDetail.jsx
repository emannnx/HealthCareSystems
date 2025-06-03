import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './articles';
import './ArticlesList.css';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const article = articles.find(a => a.id === articleId);

  if (!article) return <div>Article not found.</div>;

  return (
    <div className="article-detail">
      <div className="banner-container">
        <img
          className="banner-image"
          src={
            article.imageUrl ||
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          }
          alt={`${article.title} - ${article.summary}`}
        />
        <div className="banner-overlay">
          <h1 className="article-title">{article.title}</h1>
          <p className="article-summary">{article.summary}</p>
        </div>
      </div>
      <div className="article-content">
        <p><strong>By:</strong> {article.author}</p>
        <p><strong>Published:</strong> {article.publishDate}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
};

export default ArticleDetail;

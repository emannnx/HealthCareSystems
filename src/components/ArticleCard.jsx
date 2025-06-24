import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import './ArticlesList.css';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles-list/${article.id}`} className="article-card">
      <div className="article-image-container">
        <img
          className="article-image"
          src={
            article.imageUrl ||
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
          }
          alt={article.title}
        />
      </div>
      <div className="article-content">
        <div className="article-main">
          <p className="article-category">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </p>
          <h3 className="article-title">{article.title}</h3>
          <p className="article-summary">{article.summary}</p>
        </div>
        <div className="article-footer">
          <div className="avatar-circle" aria-label={article.author}>
            {article.author
              .split(' ')
              .map(name => name[0])
              .join('')
              .toUpperCase()}
          </div>
          <div className="author-info">
            <p className="author-name">{article.author}</p>
            <div className="publish-info">
              <time dateTime={article.publishDate}>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <span className="separator">&middot;</span>
              <span className="read-time">
                <Clock className='clockk-icon' />
                {article.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;

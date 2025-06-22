// Converted JSX with plain CSS classes starting with "community-"
// Assuming all shadcn/ui, tailwind, and lucide-react are replaced with standard HTML and custom CSS where applicable

import React, { useState } from 'react';
import './Community.css';
import { Globe, Clock, TrendingUp, MapPin,
  Heart,
  MessageCircle,
  Share2 } from 'lucide-react'; // Assuming lucide-react is used for icons

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortBy, setSortBy] = useState('latest');

  const handleSubmitPost = () => {
    if (newPost.trim() && userLocation.trim()) {
      const post = {
        id: Date.now().toString(),
        username: 'You',
        location: userLocation,
        content: newPost,
        category: selectedCategory,
        timestamp: 'just now',
        likes: 0,
        comments: 0,
        image: selectedImage || undefined,
        isLiked: false
      };
      setPosts([post, ...posts]);
      setNewPost('');
      setUserLocation('');
      setSelectedImage(null);
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked
          }
        : post
    ));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCategoryClass = (category) => {
    switch (category) {
      case 'health': return 'community-badge-health';
      case 'environment': return 'community-badge-environment';
      case 'emergency': return 'community-badge-emergency';
      default: return 'community-badge-general';
    }
  };

  const sortedPosts = sortBy === 'trending'
    ? [...posts].sort((a, b) => b.likes - a.likes)
    : posts;

  return (
    <div className="community-wrapper">
      <div className="community-header">
  <h1 className="community-title">
    <Globe className="community-icon" />
    Global Community
  </h1>
  <p className="community-subtext">
    Share real-time updates about what's happening around you. Stay connected with health alerts, environmental news, and community events from across the globe.
  </p>
</div>


<div className="community-card">
  <div className="community-card-header">
    <h2 className="community-card-title">
    <Globe />
      Share What's Happening
    </h2>
    <p className="community-card-description">
      Tell the world about events, alerts, or updates in your area
    </p>
  </div>

  <div className="community-card-content">
    <input
      placeholder="Your location (e.g., City, Country)"
      value={userLocation}
      onChange={(e) => setUserLocation(e.target.value)}
      className="community-input"
    />

    <textarea
      placeholder="What's happening around you? Share health alerts, environmental updates, or community news..."
      value={newPost}
      onChange={(e) => setNewPost(e.target.value)}
      rows={4}
      className="community-textarea"
    />

    {selectedImage && (
      <div className="community-image-preview">
        <img src={selectedImage} alt="Upload preview" />
        <button onClick={() => setSelectedImage(null)} className="community-remove-btn">Remove</button>
      </div>
    )}

    <div className="community-category-container">
      {['health', 'environment', 'emergency', 'general'].map((category) => (
        <span
          key={category}
          className={`community-category-badge ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </span>
      ))}
    </div>

    <div className="community-action-buttons">
      <div className="community-upload-wrapper">
        <label htmlFor="image-upload" className="community-upload-label">
          <span>Add Photo</span>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="community-hidden-input"
        />
      </div>
      <button onClick={handleSubmitPost} className="community-submit-button">
        Share Update
      </button>
    </div>
  </div>
</div>


<div className="community-tab-container mb-6">
  <div className="community-tabs">
    <div className="community-tabs-list">
      <button
        className={`community-tab-trigger ${sortBy === 'latest' ? 'active' : ''}`}
        onClick={() => setSortBy('latest')}
      >
        <Clock className="h-4 w-4" />
        Latest
      </button>
      <button
        className={`community-tab-trigger ${sortBy === 'trending' ? 'active' : ''}`}
        onClick={() => setSortBy('trending')}
      >
        <TrendingUp className="h-4 w-4" />
        Trending
      </button>
    </div>
  </div>
</div>


<div className="community-postlist">
      {sortedPosts.map((post) => (
        <div key={post.id} className="community-post-card">
          {/* Header */}
          <div className="community-post-header">
            <div className="community-post-userinfo">
              <div className="community-avatar">
                <div className="community-avatar-fallback">
                  {post.username[0]}
                </div>
              </div>
              <div className="community-post-meta">
                <p className="community-username">{post.username}</p>
                <div className="community-post-locationtime">
                  <span className="community-icon-text">
                    <MapPin size={14} /> {post.location}
                  </span>
                  <span className="community-icon-text">
                    <Clock size={14} /> {post.timestamp}
                  </span>
                </div>
              </div>
            </div>
            <span className={`community-category-badge ${post.category}`}>
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="community-post-content">
            <p>{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="community-post-image"
              />
            )}

            {/* Interaction */}
            <div className="community-post-actions">
              <button
                className={`community-action-btn ${
                  post.isLiked ? "liked" : ""
                }`}
                onClick={() => handleLike(post.id)}
              >
                <Heart size={16} fill={post.isLiked ? "currentColor" : "none"} />
                {post.likes}
              </button>
              <button className="community-action-btn">
                <MessageCircle size={16} />
                {post.comments}
              </button>
              <button className="community-action-btn">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

      <div className="community-loadmore-container text-center mt-8">
  <button className="community-loadmore-btn">
    Load More Posts
  </button>
</div>

    </div>
  );
};

export default Community;

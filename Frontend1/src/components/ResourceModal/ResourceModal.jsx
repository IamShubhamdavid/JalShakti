import React from 'react';
import './ResourceModal.css';

const ResourceModal = ({ resource, onClose }) => {
  if (!resource) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{resource.title}</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="resource-meta">
            <p><strong>Author:</strong> {resource.author}</p>
            <p><strong>Published:</strong> {resource.date}</p>
            <p><strong>Pages/Duration:</strong> {resource.pages || resource.duration}</p>
          </div>
          
          <div className="resource-description">
            <h3>Description</h3>
            <p>{resource.description}</p>
          </div>
          
          <div className="resource-details">
            <h3>Details</h3>
            {resource.details && <p>{resource.details}</p>}
            
            {resource.keyFindings && (
              <div className="key-findings">
                <h4>Key Findings</h4>
                <ul>
                  {resource.keyFindings.map((finding, index) => (
                    <li key={index}>{finding}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {resource.recommendations && (
              <div className="recommendations">
                <h4>Recommendations</h4>
                <ul>
                  {resource.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {resource.topics && (
              <div className="topics">
                <h4>Topics Covered</h4>
                <div className="topic-tags">
                  {resource.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">{topic}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="resource-actions">
            <button className="btn btn-primary">
              <i className="fas fa-download"></i> Download Full Document
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-share-alt"></i> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceModal;
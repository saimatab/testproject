import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProjectDetails } from '../services/githubService';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        const data = await fetchProjectDetails(parseInt(projectId));
        if (!data) {
          setError('Project not found');
        } else {
          setProject(data);
        }
      } catch (err) {
        setError('Failed to load project details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading">Loading project details...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="detail-container">
        <div className="error">{error || 'Project not found'}</div>
        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(project.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">
        ← Back to Portfolio
      </Link>

      <div className="project-detail">
        <div className="detail-header">
          <h1>{project.name}</h1>
          {project.language && (
            <span className="language-badge">{project.language}</span>
          )}
        </div>

        <p className="detail-description">{project.description}</p>

        <div className="detail-info">
          <div className="info-item">
            <span className="info-label">Stars</span>
            <span className="info-value">⭐ {project.stars}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Forks</span>
            <span className="info-value">🍴 {project.forks}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Language</span>
            <span className="info-value">{project.language || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Last Updated</span>
            <span className="info-value">{formattedDate}</span>
          </div>
        </div>

        {project.topics.length > 0 && (
          <div className="detail-topics">
            <h3>Topics</h3>
            <div className="topics-list">
              {project.topics.map(topic => (
                <span key={topic} className="topic-tag">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="detail-actions">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button primary"
          >
            View on GitHub →
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button secondary"
            >
              Visit Website →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

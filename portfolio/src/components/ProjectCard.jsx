import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{project.name}</h3>
        {project.language && (
          <span className="language-badge">{project.language}</span>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-stats">
        <div className="stat">
          <span className="stat-icon">⭐</span>
          <span>{project.stars}</span>
        </div>
        <div className="stat">
          <span className="stat-icon">🍴</span>
          <span>{project.forks}</span>
        </div>
      </div>

      {project.topics.length > 0 && (
        <div className="project-topics">
          {project.topics.map(topic => (
            <span key={topic} className="topic-tag">
              {topic}
            </span>
          ))}
        </div>
      )}

      <Link to={`/project/${project.id}`} className="project-link">
        View Details →
      </Link>
    </div>
  );
}

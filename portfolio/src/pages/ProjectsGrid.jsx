import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchUserProjects } from '../services/githubService';
import './ProjectsGrid.css';

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchUserProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects-container">
        <div className="loading">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Showcasing my latest work from GitHub</p>
      </div>

      {projects.length === 0 ? (
        <div className="no-projects">
          <p>No projects found. Check back soon!</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

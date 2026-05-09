import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Saimat
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Portfolio
          </Link>
          <a
            href="https://github.com/saimatab"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saimatabassum/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            title="Connect on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}

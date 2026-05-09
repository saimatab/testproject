import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Saimat. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/saimatab"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saimatabassum/"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

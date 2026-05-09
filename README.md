# TestProject - Portfolio Website

A modern, responsive portfolio website built with **React 19** and **Vite**, showcasing projects with real-time GitHub integration.

![Portfolio Website](https://img.shields.io/badge/React-19.2.6-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-purple?logo=vite)
![Node](https://img.shields.io/badge/Node-18+-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🚀 **Lightning Fast** - Built with Vite for instant page loads
- 🐙 **GitHub Integration** - Automatically fetch and display your repositories
- 📱 **Fully Responsive** - Beautiful on mobile, tablet, and desktop
- 🎨 **Modern Design** - Clean, professional UI with CSS3 animations
- 🔗 **Social Links** - GitHub and LinkedIn profile links
- 📊 **Real-time Data** - Live GitHub stats (stars, forks, language)
- ⚡ **GitHub MCP Server** - Enhanced GitHub interactions via Claude Code
- 🔄 **Code Review Automation** - Automatic code quality checks
- 🤖 **Issue Fixer Agent** - Automated issue detection and PR creation
- 📚 **Well Documented** - Comprehensive guides and documentation

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.2.6 |
| **Vite** | Build Tool | 8.0.11 |
| **React Router** | Client-side Routing | 7.15.0 |
| **CSS3** | Styling & Animations | Native |
| **GitHub API** | Project Data | REST API v3 |
| **GitHub Actions** | Automation | Built-in |

## 📖 Table of Contents

- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Features Guide](#-features-guide)
- [Development](#-development)
- [Deployment](#-deployment)
- [GitHub Automation](#-github-automation)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## 💻 Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **Git**
- **GitHub Personal Access Token** (PAT) - [Create one](https://github.com/settings/tokens)

### Step 1: Clone Repository

```bash
git clone https://github.com/saimatab/testproject.git
cd testproject
```

### Step 2: Install Dependencies

```bash
cd portfolio
npm install
```

### Step 3: Configure Environment Variables

Create `portfolio/.env` file:

```bash
# GitHub Configuration
VITE_GITHUB_USERNAME=your-github-username
VITE_GITHUB_API_BASE=https://api.github.com
GITHUB_PAT=your-personal-access-token
```

**How to get your PAT:**
1. Go to [GitHub Settings → Tokens](https://github.com/settings/tokens)
2. Click "Generate new token"
3. Select scopes: `repo`, `public_repo`, `read:user`
4. Copy the token and paste in `.env`

### Step 4: Start Development Server

```bash
npm run dev
```

The website will open at: **http://localhost:5173**

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_GITHUB_USERNAME` | Your GitHub username | `saimatab` |
| `VITE_GITHUB_API_BASE` | GitHub API endpoint | `https://api.github.com` |
| `GITHUB_PAT` | Personal Access Token | `github_pat_...` |

### Vite Configuration

Edit `portfolio/vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Customize build options
})
```

## 📁 Project Structure

```
testproject/
├── .github/
│   ├── workflows/
│   │   └── issue-fixer.yml          # Automated issue fixing
│   ├── README.md                    # GitHub automation docs
│   ├── ISSUE_FIXER.md              # Issue Fixer Agent guide
│   └── AUTO_PR_CREATION.md         # Automatic PR creation
│
├── .claude/
│   ├── settings.json               # Claude Code settings
│   ├── agents/
│   │   └── code-review.md          # Code review agent
│   └── README.md                   # Claude Code setup
│
├── decisions/
│   ├── 000-project-overview.md     # Project decisions
│   ├── 001-tech-stack.md           # Tech stack decisions
│   └── 002-data-fetching-strategy.md
│
├── portfolio/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.jsx      # Header navigation
│   │   │   ├── Footer.jsx          # Footer component
│   │   │   └── ProjectCard.jsx     # Project card display
│   │   │
│   │   ├── pages/
│   │   │   ├── ProjectsGrid.jsx    # Projects grid view
│   │   │   └── ProjectDetail.jsx   # Project detail page
│   │   │
│   │   ├── services/
│   │   │   └── githubService.js    # GitHub API service
│   │   │
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   │
│   ├── public/                     # Static assets
│   ├── package.json                # Dependencies
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # ESLint rules
│   └── index.html                  # HTML template
│
├── .mcp.json                       # MCP Server configuration
├── .gitignore                      # Git ignore rules
├── README.md                       # This file
├── CONTRIBUTING.md                # Contribution guidelines
└── tasks.md                        # Project tasks
```

## 🚀 Usage

### Start Development Server

```bash
cd portfolio
npm run dev
```

### Build for Production

```bash
npm run build
```

Output files go to `portfolio/dist/`

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### View Your Portfolio

1. **Development**: http://localhost:5173
2. **Features**:
   - View your GitHub projects
   - Click project cards for details
   - Social links in footer

## 📚 Features Guide

### GitHub Projects Display

The portfolio automatically fetches and displays your GitHub repositories.

**What's Displayed:**
- Project name and description
- GitHub URL
- Primary language
- Star count
- Fork count
- Last updated date

**How It Works:**
```
GitHub API → Service → Component → Display
```

**File**: `portfolio/src/services/githubService.js`

```javascript
export const fetchUserProjects = async () => {
  // Fetches repositories for VITE_GITHUB_USERNAME
  // Returns: Array of projects with metadata
}
```

### Navigation Component

Located in `portfolio/src/components/Navigation.jsx`

**Includes:**
- Portfolio branding
- Navigation links
- Social media links (GitHub, LinkedIn, Twitter)

**Social Links:**
- 🐙 GitHub: https://github.com/saimatab
- 🔗 LinkedIn: https://www.linkedin.com/in/saimatabassum/
- 🐦 Twitter: https://twitter.com/saimatab

### Footer Component

Located in `portfolio/src/components/Footer.jsx`

**Shows:**
- Copyright notice with current year
- Social media links
- Professional links

### Responsive Design

Fully responsive across all devices:

| Device | Breakpoint | Features |
|--------|-----------|----------|
| **Mobile** | < 768px | Single column, touch-friendly |
| **Tablet** | 768px - 1024px | 2 columns, optimized spacing |
| **Desktop** | > 1024px | 3+ columns, enhanced layout |

## 👨‍💻 Development

### Project Setup

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm run dev

# Type checking & linting
npm run lint

# Build for production
npm run build
```

### Component Structure

Example component:

```jsx
// src/components/MyComponent.jsx
import './MyComponent.css';

export default function MyComponent({ title, data }) {
  return (
    <div className="component">
      <h2>{title}</h2>
      <p>{data}</p>
    </div>
  );
}
```

### Adding Components

1. Create file in `src/components/`
2. Write component logic
3. Add styles in `.css` file
4. Import in parent component
5. Add to routing if needed

### API Integration

The GitHub API service handles all GitHub interactions:

```javascript
// Usage example
import { fetchUserProjects } from './services/githubService';

const projects = await fetchUserProjects();
// Returns: Array of project objects
```

### Error Handling

The application includes error handling for:
- API failures
- Network errors
- Missing data
- Invalid responses

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd portfolio
vercel
```

### Deploy to GitHub Pages

```bash
# Build project
npm run build

# Push dist to GitHub Pages
# In repository settings:
# - Source: /dist folder
# - Branch: main
```

### Deploy to Netlify

```bash
# Build
npm run build

# Connect to Netlify
# Source: dist folder
# Build command: npm run build
# Publish: dist
```

### Environment Variables in Production

Set these in your hosting platform:

**Vercel:**
Settings → Environment Variables

**Netlify:**
Site settings → Build & Deploy → Environment

**GitHub Pages:**
Use secrets for sensitive tokens

## 🤖 GitHub Automation

### Issue Fixer Agent

Automatically detects and fixes issues:

**Schedule**: Every 6 hours

**Features:**
- Scans open issues
- Creates branches
- Generates documentation
- Creates pull requests
- Updates issue tracking

**Documentation**: [`.github/ISSUE_FIXER.md`](.github/ISSUE_FIXER.md)

### Code Review Automation

Automated code quality checks:

**Triggers**: On file changes

**Checks:**
- Security vulnerabilities
- Performance issues
- Code quality
- Testing coverage
- Documentation
- Accessibility

**Configuration**: [`.claude/agents/code-review.md`](.claude/agents/code-review.md)

### GitHub Actions Workflows

**File**: `.github/workflows/issue-fixer.yml`

**Runs:**
- Every 6 hours
- Manually via workflow_dispatch
- Generates reports and PRs

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Start

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes
# ... edit files ...

# Commit
git commit -m "Add your feature"

# Push
git push origin feature/your-feature

# Create Pull Request
```

## 🐛 Troubleshooting

### Issue: GitHub API 404 Error

**Cause**: Wrong username or API endpoint

**Solution**:
```bash
# Verify .env file
cat portfolio/.env

# Check username
# Should match your GitHub username exactly
```

### Issue: Port 5173 Already in Use

**Solution**:
```bash
# Find and kill process
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Issue: "Cannot find module" Error

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: GitHub API Rate Limit

**Cause**: Too many requests (60/hour without PAT)

**Solution**:
```bash
# Add PAT to .env
GITHUB_PAT=your-token-here

# Provides 5000 requests/hour
```

### Issue: Build Fails

**Solution**:
```bash
# Clear build cache
rm -rf dist .vite

# Clean install
npm install

# Try building again
npm run build
```

### Issue: Styles Not Loading

**Solution**:
```bash
# Check CSS import in component
import './ComponentName.css';

# Verify file exists in same directory
ls -la src/components/
```

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GitHub API Docs](https://docs.github.com/rest)
- [React Router Docs](https://reactrouter.com)
- [ESLint Docs](https://eslint.org)

## 🔒 Security

### Protecting Secrets

**Never commit:**
- `.env` files with secrets
- API tokens
- Personal access tokens
- Credentials

**Safe practices:**
```bash
# Add to .gitignore
portfolio/.env
.mcp.json

# Use environment variables
process.env.GITHUB_PAT
```

### GitHub Token Security

- Use **Personal Access Tokens** (not passwords)
- Set appropriate scopes (minimal permissions)
- Rotate tokens regularly
- Use in environment variables only
- Never share or expose tokens

## 📈 Performance Tips

### Optimize Images

```bash
# Use optimized images in public/
# Format: WebP, SVG, or optimized PNG/JPG
```

### Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const ProjectDetail = lazy(() => import('./ProjectDetail'));

<Suspense fallback={<div>Loading...</div>}>
  <ProjectDetail />
</Suspense>
```

### Caching

The GitHub API service includes built-in caching (30 minutes):

```javascript
// Cache configuration in githubService.js
const CACHE_DURATION = 30 * 60 * 1000;
```

## 🗺️ Roadmap

- [ ] User authentication system
- [ ] Project filtering and search
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Analytics integration
- [ ] Admin dashboard
- [ ] Database backend
- [ ] Comment system

## 📝 License

MIT License - Feel free to use for your portfolio

See [LICENSE](LICENSE) for full details

## 🙋 Support

**Need help?**

1. Check [Troubleshooting](#-troubleshooting) section
2. Review [GitHub Issues](https://github.com/saimatab/testproject/issues)
3. Check [GitHub Discussions](https://github.com/saimatab/testproject/discussions)
4. Create a new issue with details

## 📧 Contact

- **GitHub**: [@saimatab](https://github.com/saimatab)
- **LinkedIn**: [Saimat Abassum](https://www.linkedin.com/in/saimatabassum/)
- **Twitter**: [@saimatab](https://twitter.com/saimatab)

---

**Built with ❤️ using React, Vite, and GitHub API**

**Last Updated**: 2026-05-09

⭐ If this project helps you, please consider giving it a star!

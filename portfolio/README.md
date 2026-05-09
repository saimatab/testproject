# Portfolio Website

A modern portfolio website showcasing GitHub projects, built with React and Vite.

## Features (Phase 1)

- ✨ Displays all GitHub projects from `@saimatab`
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Modern dark theme
- 🔍 Project details page
- 💾 Client-side caching (30 minutes)

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: CSS3
- **API**: GitHub REST API

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5174`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/           # Page components (Grid, Detail)
├── services/        # API service layer
└── styles/          # Global styles
```

## API Rate Limiting

- **Public GitHub API**: 60 requests/hour per IP
- **Client-side Caching**: 30 minutes
- **Phase 2**: Backend API for higher limits

## Phase 2: Backend Integration

Coming soon:
- Admin dashboard
- Backend API
- Database storage
- Contact form
- Authentication

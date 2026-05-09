# Portfolio Website - Project Overview

**Project Start Date**: 2026-05-09  
**Owner**: Saimat  
**GitHub Profile**: https://github.com/saimatab

## Vision
A modern, phase-based portfolio website that showcases GitHub projects locally, with clean architecture to support backend integration in future phases.

## Phases

### Phase 1: Local Portfolio (Current)
- Display GitHub projects from @saimatab in a grid
- Show project details (description, language, stars, repo link)
- Responsive design
- No backend required
- Runs locally in browser

### Phase 2: Backend Integration (Future)
- Admin dashboard for managing projects
- Custom project metadata storage
- Contact form with backend processing
- Database integration
- Potential blog section

### Phase 3+: Enhancements (TBD)
- Advanced filtering
- Project analytics
- User comments/feedback
- Deployment automation

## Key Architectural Principles
1. **Service Layer Abstraction**: All API calls go through services
2. **Phase-wise Growth**: Code organized for easy backend swap
3. **Modular Components**: React components are reusable
4. **Environment Configuration**: Settings for local/production

## Tech Stack (Phase 1)
- **Frontend**: React with Vite
- **Routing**: React Router v6
- **Styling**: CSS + optional Tailwind
- **API**: GitHub REST API (frontend)
- **Package Manager**: npm or yarn

## Success Criteria (Phase 1)
- ✅ All GitHub projects display in grid
- ✅ Project detail view works
- ✅ Mobile responsive
- ✅ Handles API rate limiting gracefully
- ✅ Clean, professional appearance
- ✅ Code ready for Phase 2 backend integration

## File Structure
```
portfolio-website/
├── decisions/          # Architecture decisions
├── tasks.md            # Task tracking
├── src/
│   ├── components/     # React components
│   ├── services/       # API services layer
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   └── App.jsx
├── public/
├── package.json
└── vite.config.js
```


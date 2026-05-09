# Decision: Tech Stack Selection

**Date**: 2026-05-09  
**Status**: DECIDED

## Decision
- **Frontend Framework**: React
- **Build Tool**: Vite (recommended for faster development)
- **Routing**: React Router v6
- **API Client**: Fetch API (built-in) or Axios
- **Styling**: CSS Modules + Tailwind CSS (or plain CSS)
- **Backend** (Phase 2): To be decided later

## Rationale
- React is industry standard with large ecosystem
- Vite offers fast development experience
- React Router is battle-tested for navigation
- GitHub REST API is simple to integrate
- Modular approach allows clean Phase 2 transition

## Considerations for Phase 2
- Service layer will abstract API calls for easy backend swap
- API client (Fetch/Axios) will be centralized in a service module
- Frontend state management (React Context or Redux) to be decided when backend is added

## Alternative Options Considered
- Next.js: Excellent but adds complexity not needed in Phase 1
- Vue: Great choice but team already chose React
- Vanilla JS: Would make Phase 2 integration harder


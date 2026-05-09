# Decision: GitHub Data Fetching Strategy (Phase 1)

**Date**: 2026-05-09  
**Status**: DECIDED

## Decision
- **Phase 1 Approach**: GitHub REST API called directly from frontend
- **Method**: Fetch API or Axios from React components
- **Authentication**: Public API (no auth needed for public repos)
- **Data Caching**: Client-side caching to minimize API calls (GitHub: 60 requests/hour unauthenticated)

## Why This Approach
- ✅ Simple to implement with no backend needed
- ✅ Real-time data - always shows current GitHub state
- ✅ No infrastructure to manage initially
- ✅ Good for learning/local development

## Limitations & Mitigations
| Issue | Mitigation |
|-------|-----------|
| Rate limiting (60/hr) | Cache data in localStorage; optional: use GitHub token for 5000/hr |
| CORS issues possible | Use public API endpoints; consider proxy if needed |
| Exposes API calls to client | Not sensitive data; mitigate in Phase 2 |

## Phase 2 Migration
When backend is added:
1. Backend fetches from GitHub API (server-side)
2. Frontend calls own backend API instead
3. Backend can implement caching/processing logic
4. Frontend service layer updated to call backend endpoints

## Service Layer Design (Phase 1)
```
services/
├── githubService.js  // All GitHub API calls
└── projectService.js // Wrapper for future backend swap
```

This abstraction ensures easy Phase 2 migration without changing components.


// Service for all GitHub API interactions
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'saimatab';
//hfhfh
// Cache key and duration
const CACHE_KEY = 'github_projects_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

const getFromCache = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(CACHE_KEY);
    return null;
  }
  return data;
};

const saveToCache = (data) => {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ data, timestamp: Date.now() })
  );
};

export const fetchUserProjects = async () => {
  // Check cache first
  const cached = getFromCache();
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const projects = await response.json();

    // Transform GitHub data to our format
    const transformedProjects = projects.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description available',
      url: repo.html_url,
      language: repo.language || 'Other',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
      updated_at: repo.updated_at,
      homepage: repo.homepage,
    }));

    // Cache the results
    saveToCache(transformedProjects);

    return transformedProjects;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    // Return empty array on error
    return [];
  }
};

export const fetchProjectDetails = async (projectId) => {
  const projects = await fetchUserProjects();
  return projects.find(p => p.id === projectId) || null;
};

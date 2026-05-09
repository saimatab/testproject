# Contributing to TestProject

First off, thank you for considering contributing to TestProject! It's people like you that make TestProject such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

**Our Pledge:**
- We are committed to providing a welcoming and inspiring community for all
- Be respectful of differing opinions, viewpoints, and experiences
- Give and gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

**What to include:**
- **Title**: Clear and descriptive title
- **Description**: Step-by-step reproduction steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happened
- **Screenshots**: If applicable
- **Environment**: 
  - Node version
  - npm/yarn version
  - Browser (if frontend issue)
  - OS

**Example issue:**
```markdown
## Bug: Projects not loading from GitHub

### Reproduction Steps
1. Set GITHUB_USERNAME=saimatab
2. Visit http://localhost:5173
3. Wait 5 seconds

### Expected
Projects load and display in grid

### Actual
Shows "Failed to load projects" error

### Error Message
```
GitHub API error: 401 Unauthorized
```

### Environment
- Node 18.15.0
- npm 9.6.4
- Chrome 120.0
```

### Suggesting Enhancements ✨

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

**What to include:**
- **Clear description**: What the enhancement is
- **Current behavior**: How it works now
- **Desired behavior**: How you'd like it to work
- **Why**: Why this would be useful
- **Examples**: Examples of similar features in other projects

**Example enhancement:**
```markdown
## Feature: Dark mode toggle

### Current Behavior
Portfolio only has light theme

### Desired Behavior
Add toggle for dark/light theme in navigation

### Why
Many users prefer dark mode for accessibility and comfort

### Example
GitHub has dark mode toggle in profile settings
```

## Development Workflow

### 1. Fork the Repository

```bash
# Click "Fork" on GitHub
git clone https://github.com/YOUR-USERNAME/testproject.git
cd testproject
```

### 2. Create a Feature Branch

```bash
# Create and switch to new branch
git checkout -b feature/descriptive-name

# Use these prefixes:
# feature/    - New feature
# fix/        - Bug fix
# docs/       - Documentation
# refactor/   - Code refactoring
# test/       - Testing improvements
```

### 3. Install Dependencies

```bash
cd portfolio
npm install
```

### 4. Make Your Changes

```bash
# Make edits to files
# Follow code style guidelines (see below)
# Test your changes
npm run dev
```

### 5. Commit Changes

```bash
# Stage changes
git add .

# Commit with clear message
git commit -m "Add descriptive commit message"

# Follow conventional commits:
# feat: New feature
# fix: Bug fix
# docs: Documentation
# style: Code style
# refactor: Code refactoring
# test: Tests
# chore: Build/deps
```

**Commit message examples:**
```bash
git commit -m "feat: Add dark mode toggle to navigation"
git commit -m "fix: GitHub API 404 error on missing projects"
git commit -m "docs: Update README with deployment guide"
git commit -m "refactor: Extract ProjectCard to separate component"
```

### 6. Push to Your Fork

```bash
git push origin feature/descriptive-name
```

### 7. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request" button
3. Fill in PR description:

```markdown
## Description
Brief description of changes

## Related Issue
Fixes #<issue-number>

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test these changes:
1. Step 1
2. Step 2
3. Step 3

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
```

## Code Style Guidelines

### JavaScript/React

**Naming Conventions:**
```javascript
// Components: PascalCase
function ProjectCard() {}

// Functions: camelCase
function fetchGitHubProjects() {}

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.github.com';

// Variables: camelCase
let isLoading = false;
```

**Formatting:**
```javascript
// 2-space indentation
if (condition) {
  return value;
}

// Clear variable names
const userRepositories = [];  // ✅ Good
const ur = [];              // ❌ Bad

// Comments for complex logic
// Calculate total stars across all projects
const totalStars = projects.reduce((sum, p) => sum + p.stars, 0);
```

**React Best Practices:**
```jsx
// Functional components
export default function MyComponent({ prop1, prop2 }) {
  // State and hooks at top
  const [count, setCount] = useState(0);

  // Effects below state
  useEffect(() => {
    // Side effects
  }, []);

  // Handlers in middle
  const handleClick = () => {
    setCount(count + 1);
  };

  // JSX return at bottom
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
```

### CSS

```css
/* Use meaningful class names */
.project-card { }        /* ✅ Good */
.pc { }                  /* ❌ Bad */

/* BEM methodology for complex components */
.project-card { }
.project-card__header { }
.project-card__body { }
.project-card--featured { }

/* Group related properties */
.button {
  /* Layout */
  display: flex;
  justify-content: center;

  /* Spacing */
  padding: 12px 24px;
  margin: 8px 0;

  /* Colors */
  background-color: #007bff;
  color: white;

  /* Typography */
  font-size: 16px;
  font-weight: 600;
}
```

## Testing

### Run Tests Locally

```bash
# Lint code
npm run lint

# Build project
npm run build

# Run dev server and test manually
npm run dev
```

### What to Test

- ✅ Feature works as intended
- ✅ No console errors
- ✅ Responsive design works
- ✅ GitHub API still functions
- ✅ No regressions in other features

### Manual Testing Checklist

- [ ] Feature works locally
- [ ] Code passes linter
- [ ] Build succeeds
- [ ] No console warnings/errors
- [ ] Responsive on mobile (DevTools)
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] All links work
- [ ] GitHub data loads

## Pull Request Process

### Before Submitting

1. **Test thoroughly**: Run `npm run lint` and `npm run build`
2. **Update documentation**: If docs need updating
3. **Add comments**: For complex logic
4. **Check style**: Follow guidelines above
5. **Small commits**: Keep changes focused

### Review Process

Once submitted, your PR will be:

1. **Reviewed**: For code quality, style, and functionality
2. **Tested**: Against existing features
3. **Discussed**: If changes needed
4. **Approved**: When ready
5. **Merged**: To main branch

### What Reviewers Look For

- ✅ Code quality and style
- ✅ Does it solve the issue?
- ✅ No breaking changes
- ✅ Proper error handling
- ✅ Documentation updates
- ✅ No performance issues
- ✅ Tests pass

### Making Changes After Review

```bash
# Make requested changes
# Commit to same branch
git add .
git commit -m "Address review feedback"

# Push - PR updates automatically
git push origin feature/descriptive-name
```

## Styleguides

### Git Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and PRs liberally

Examples:
```
feat: Add project filtering functionality

Allows users to filter projects by language and stars.
Fixes #15
```

### Documentation

- Use Markdown for docs
- Include code examples
- Keep examples up-to-date
- Use clear, simple language

## Additional Notes

### Code Review Comments

When you receive code review comments:

- **Be constructive**: Assume good intent
- **Engage**: Ask clarifying questions
- **Respect**: Different approaches may be valid
- **Learn**: Use feedback to improve

### Merging

Only repository maintainers can merge PRs. Once approved:

1. PR is merged to main
2. Feature branch is deleted
3. Issue is automatically closed (if linked)
4. Changes are deployed

## Recognition

Contributors will be recognized in:
- Project README
- GitHub contributor graph
- Release notes
- Community updates

## Questions?

- 📖 Check the [README](README.md)
- 🔍 Search existing issues
- 💬 Create a discussion
- 📧 Contact maintainers

## Resources

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [React Best Practices](https://react.dev)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

Thank you for contributing! 🎉

**Last Updated**: 2026-05-09

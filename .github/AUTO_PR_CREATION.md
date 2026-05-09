# Automatic PR Creation Guide

## Overview

The **Issue Fixer Agent** now automatically creates pull requests to fix identified issues. This document explains how it works and what to expect.

## How It Works

### 1. **Automatic Issue Detection** (Every 6 hours)
```
Workflow triggers → Scans open issues → Finds issues without PRs → Filters by priority
```

### 2. **Automatic PR Creation**
```
Identifies issue → Creates branch → Implements fix → Commits → Creates PR
```

### 3. **Issue Updates**
```
Adds comment to issue → Links to PR → Awaits review → Merge when ready
```

## Workflow Process

### Step-by-Step

**1. Issue Detection**
- Scans all open issues in repository
- Filters out issues already with linked PRs
- Selects 1 priority issue per run (documentation, bugs, enhancements)

**2. Branch Creation**
- Creates branch: `fix/issue-<number>`
- Checks out the new branch
- Sets up git configuration

**3. Fix Implementation**
Based on issue type:
- **Documentation**: Creates README.md, CONTRIBUTING.md, guides
- **Bug**: Analyzes and implements bug fixes (issue-specific)
- **Enhancement**: Implements requested features (issue-specific)

**4. Commit & Push**
- Stages all changes
- Creates commit with reference: `Fixes #<number>`
- Pushes branch to repository

**5. Pull Request Creation**
- Creates PR with automatic title and body
- Links to original issue
- Adds labels: `auto-generated`, `issue-fixer-agent`
- Posts comment on original issue

**6. Issue Update**
- Adds comment to original issue
- Links to created PR
- Notifies issue reporter

## Example: Issue #1 Auto-Fix

### Issue Details
```
Title: Add comprehensive documentation and project showcase
Number: #1
Labels: documentation, enhancement, portfolio
```

### Automatic Actions

**Branch Created**
```bash
fix/issue-1
```

**Files Generated**
- `README.md` - Complete project documentation
- `CONTRIBUTING.md` - Contribution guidelines

**Commit Message**
```
Fixes #1: Add comprehensive documentation and project showcase

- Automatically generated fix by Issue Fixer Agent
- Issue: https://github.com/saimatab/testproject/issues/1
```

**PR Created**
```
Title: Fixes #1: Add comprehensive documentation and project showcase
Body: Links to issue, explains changes, references issue #1
Labels: auto-generated, issue-fixer-agent
```

**Issue Comment**
```
🤖 **Issue Fixer Agent** has created a PR to address this issue.

PR: #<number>

Review the changes and merge when ready!
```

## What Gets Automated

### ✅ Automatically Handled

- [x] Issue detection
- [x] Branch creation
- [x] File generation (documentation)
- [x] Git commits
- [x] PR creation
- [x] Issue linking
- [x] Comments and notifications
- [x] Label management
- [x] Error handling

### ⚠️ Manual Review Required

- [ ] Code review
- [ ] Testing
- [ ] Approval
- [ ] Merging
- [ ] Deployment

## Issue Types & Auto-Fixes

### 1. Documentation Issues
**Automatically Creates:**
- `README.md` - Full project documentation
- `CONTRIBUTING.md` - Contribution guidelines
- Architecture overview
- Setup instructions
- API documentation

**Example**: Issue #1

### 2. Bug Issues
**Status**: Requires manual implementation
- Detects bug
- Creates branch
- Posts for manual fixing
- Creates draft PR with issue analysis

### 3. Enhancement Issues
**Status**: Requires manual implementation
- Detects feature request
- Creates branch
- Posts for manual implementation
- Creates draft PR

## Reviewing Auto-Generated PRs

### Review Checklist

- [ ] Read the original issue
- [ ] Review generated files
- [ ] Check for completeness
- [ ] Test locally: `npm install && npm run dev`
- [ ] Run linter: `npm run lint`
- [ ] Verify responsive design
- [ ] Check links and formatting

### Testing Auto-Generated Content

```bash
# Install and test
cd testproject/portfolio
npm install

# Check README rendering
cat ../README.md

# Check code quality
npm run lint

# View website
npm run dev
```

### Common Actions

**Approve & Merge**
```bash
# If changes look good
# Go to PR page → Approve → Merge Pull Request
```

**Request Changes**
```bash
# If changes need work
# Review → Request Changes → Comment with suggestions
```

**Update PR**
```bash
# Bot will commit additional fixes to same branch
# PR auto-updates
```

## Customization

### Change Auto-Fix Strategy

Edit `.github/workflows/issue-fixer.yml`:

**Issue Types to Handle**
```javascript
if (issue.labels.some(l => l.name === 'documentation')) {
  // Add your custom logic
}
```

**Generated Content**
```javascript
const readmeContent = `
  // Modify this template
`;
```

### Change PR Labels

```javascript
await github.rest.issues.addLabels({
  issue_number: pr.data.number,
  labels: ['auto-generated', 'your-label']
});
```

### Change Commit Message

```javascript
const commitMessage = `Fixes #${issue.number}: ...`;
```

## Workflow Settings

### Schedule
**Current**: Every 6 hours
**Edit**: `.github/workflows/issue-fixer.yml`

```yaml
schedule:
  - cron: '0 */6 * * *'
```

### Issue Limit
**Current**: 1 issue per run
**Location**: Line in fix-issues step

```javascript
.slice(0, 1);  // Change to higher number for more issues
```

### Priority Labels
**Current**: documentation, high-priority, bug, enhancement
**Edit**: Filter logic in workflow

## Monitoring PRs

### View Generated PRs

1. Go to: `https://github.com/saimatab/testproject/pulls`
2. Filter: `label:auto-generated`
3. Check recent PRs from Issue Fixer Agent

### Workflow Logs

1. Go to: `https://github.com/saimatab/testproject/actions`
2. Click: **Issue Fixer Agent**
3. View: Latest run
4. See: Detailed logs of what was created

### Issue Updates

1. Go to issue (e.g., `https://github.com/saimatab/testproject/issues/1`)
2. Scroll down: Comments section
3. Look for: Bot comment with PR link

## Troubleshooting

### PR Not Created

**Possible Causes:**
1. No open issues without PRs
2. Workflow didn't run (check schedule)
3. GitHub Actions disabled

**Solutions:**
```bash
# Manually trigger workflow
# Go to Actions tab → Issue Fixer Agent → Run workflow
```

### Bot Comment Missing

**Possible Causes:**
1. PR creation failed
2. Issue already has PR linked
3. Permission issue

**Solutions:**
- Check workflow logs for errors
- Verify GitHub Actions permissions

### Branch Already Exists

**Solution:**
```bash
# Delete existing branch
git push origin --delete fix/issue-<number>

# Re-run workflow
```

## PR Merge Process

### Before Merging

1. ✅ Review code/documentation
2. ✅ Run local tests
3. ✅ Check for issues
4. ✅ Approve PR

### Merging

```bash
# Option 1: GitHub UI
# Go to PR → Merge Pull Request → Confirm

# Option 2: Command Line
git checkout main
git pull origin main
git merge fix/issue-<number>
git push origin main
```

### After Merging

1. ✅ Issue auto-closes (via `Fixes #N` commit message)
2. ✅ Branch is deleted
3. ✅ Next workflow run finds new issues

## Example Timeline

### T+0h: Issue Created
```
User creates Issue #1: Add documentation
```

### T+6h: Workflow Runs
```
Workflow detects Issue #1
Creates branch: fix/issue-1
Generates README.md
Creates PR: Fixes #1 documentation
```

### T+6h+5min: Issue Updated
```
Issue gets comment from bot
Notifies issue reporter
Points to PR #N
```

### T+6h+30min: Developer Reviews
```
Reads generated PR
Tests locally
Approves and merges
Issue auto-closes
```

### T+12h: Next Run
```
Workflow runs again
Detects Issue #2 (no PR)
Creates PR for Issue #2
Cycle repeats
```

## Advanced Configuration

### Custom Fix Implementation

For specific issue types, add custom logic:

```javascript
async function implementCustomFix(issue) {
  if (issue.number === 5) {
    // Special handling for issue 5
    // Custom file generation
    // Custom logic
    return true;
  }
  return false;
}
```

### Issue Analysis

Pre-analyze issue before fixing:

```javascript
const analysis = {
  type: issue.labels.map(l => l.name),
  priority: issue.title.includes('URGENT'),
  complexity: issue.body.length
};
```

### Conditional PR Creation

Control PR creation:

```javascript
const shouldCreatePR = analysis.complexity < 500;

if (shouldCreatePR) {
  // Create PR
} else {
  // Create draft PR or skip
}
```

## FAQ

**Q: Can I disable auto-fixes for certain issues?**
A: Add label `no-auto-fix` to skip auto-fixing

**Q: What if the auto-fix is wrong?**
A: Review and update before merging, or close and create manual PR

**Q: Can I manually trigger a fix?**
A: Yes, use `workflow_dispatch` - go to Actions tab and run manually

**Q: How many issues per run?**
A: Currently 1 per run (prevents conflicts, editable in workflow)

**Q: What about complex fixes?**
A: Workflow handles documentation automatically, other fixes need manual work

## Security & Permissions

### Required Permissions
- `issues: read` - Read issues
- `pull-requests: write` - Create PRs
- `contents: write` - Push code

### Token Used
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions

### Safety Features
- Runs on schedule (predictable)
- Limited issues per run (1)
- Always creates PR (never force merges)
- Bot identity clear (github-actions[bot])

## Next Steps

1. **Monitor First Run**
   - Trigger manually or wait for schedule
   - Check generated PR
   - Review quality

2. **Adjust Configuration**
   - Modify labels, schedule, limits as needed
   - Test with different issue types

3. **Expand Auto-Fixes**
   - Add custom logic for specific issues
   - Implement bug-specific fixes
   - Create enhancement implementations

---

**Issue Fixer Agent v2 - Automatic PR Creation Enabled** 🚀

# Issue Fixer Agent

## Overview

The Issue Fixer Agent is an automated GitHub Actions workflow that periodically checks for open issues in the repository and generates reports on what needs to be fixed. It runs on a schedule and identifies priority issues that should be addressed.

## How It Works

### 1. **Automatic Scheduling**
- Runs every 6 hours automatically
- Can also be triggered manually via `workflow_dispatch`
- Checks for open issues in the repository

### 2. **Issue Detection**
The workflow identifies:
- ✅ Open issues without linked Pull Requests
- ✅ Issues labeled as `documentation`, `high-priority`, or `bug`
- ✅ Up to 2 priority issues per run (to avoid overwhelming the repo)

### 3. **Report Generation**
- Creates a pending issues report: `.github/issue-fixes/pending-issues.md`
- Lists issues that need to be addressed
- Provides a checklist for tracking progress
- Posts workflow summary to Actions tab

## Workflow Features

### Automated Detection
```yaml
schedule:
  - cron: '0 */6 * * *'  # Every 6 hours
workflow_dispatch:        # Manual trigger
```

### Issue Filtering
- **Excludes**: Pull requests, issues already linked to PRs
- **Includes**: Documentation, bugs, and high-priority issues
- **Limit**: 2 issues per run for manageable workload

### Output
- 📋 Pending issues report
- 📊 GitHub Actions summary
- 🔗 Links to issue details

## Manual Trigger

You can manually trigger the workflow:

1. Go to: `https://github.com/saimatab/testproject/actions`
2. Select: **Issue Fixer Agent**
3. Click: **Run workflow**
4. Check results in the workflow logs

## Next Steps for Fixing Issues

Once the Issue Fixer Agent identifies issues, here's the process:

### 1. Create a Branch
```bash
git checkout -b fix/issue-<number>
```

### 2. Implement the Fix
- Follow the issue description
- Add necessary code/documentation
- Test changes locally

### 3. Commit Changes
```bash
git commit -m "Fixes #<number>: Brief description"
```

### 4. Create a Pull Request
- Title: Reference the issue (e.g., "Fix documentation for issue #1")
- Description: Link to issue and explain what was done
- Labels: Add relevant labels
- GitHub will automatically link the PR to the issue

### 5. Example Commit Message
```
Fixes #1: Add comprehensive documentation

- Added README.md with setup instructions
- Added architecture overview
- Added component documentation
- Added GitHub API integration guide

Closes #1
```

## Customization

### Change Schedule
Edit `.github/workflows/issue-fixer.yml`:
```yaml
schedule:
  - cron: '0 */6 * * *'  # Change this
```

**Cron Format**: `minute hour day month day-of-week`
- `0 */6 * * *` = Every 6 hours
- `0 9 * * *` = Daily at 9 AM
- `0 0 * * 0` = Weekly on Sunday

### Filter Different Labels
Edit the workflow to prioritize different labels:
```javascript
const priorityIssues = issuesWithoutPR.filter(issue =>
  issue.labels.some(label =>
    label.name === 'your-label' ||
    label.name === 'another-label'
  )
);
```

### Change Issue Limit
Modify the limit (currently 2):
```javascript
.slice(0, 2);  // Change 2 to another number
```

## Workflow Logs

View workflow runs:
1. Go to: `https://github.com/saimatab/testproject/actions/workflows/issue-fixer.yml`
2. Click on a run to see:
   - Issues detected
   - Report generated
   - Any errors or logs

## Integration with Other Tools

This workflow works well with:
- **Code Review Hook**: Automatically reviews PRs created for issues
- **GitHub MCP Server**: Can be enhanced to fetch more detailed issue info
- **Issue Labels**: Uses labels to prioritize work

## Future Enhancements

Potential improvements:
- [ ] Automatically create branches and commit initial fixes
- [ ] Use Claude AI to analyze issues and suggest solutions
- [ ] Create draft PRs with detailed analysis
- [ ] Post comments on issues with progress updates
- [ ] Integration with project boards for tracking
- [ ] Notification on Slack or email when issues are detected

## Troubleshooting

### Workflow Not Running
- Check: `https://github.com/saimatab/testproject/actions`
- Ensure: GitHub Actions are enabled in repository settings
- Verify: Cron schedule is valid

### No Issues Detected
- Open issues without PRs may not exist
- Check issue labels match the filter
- Review `.github/issue-fixes/pending-issues.md`

### Report Not Updating
- Workflow may have failed (check logs)
- Try manual trigger via `workflow_dispatch`
- Check Git permissions for pushing updates

## Contact

For questions about the Issue Fixer Agent, check:
- Workflow file: `.github/workflows/issue-fixer.yml`
- GitHub Actions logs: Repository → Actions tab
- Issue #1: https://github.com/saimatab/testproject/issues/1

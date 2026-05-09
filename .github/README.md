# GitHub Automation & Configuration

This directory contains GitHub-specific configurations, workflows, and documentation.

## Directory Structure

```
.github/
├── workflows/
│   └── issue-fixer.yml          # Automated issue detection and PR creation
├── issue-fixes/
│   └── pending-issues.md        # Generated report of pending issues
├── README.md                    # This file
├── ISSUE_FIXER.md              # Issue Fixer Agent documentation
└── AUTO_PR_CREATION.md         # Automatic PR creation guide
```

## GitHub Actions Workflows

### Issue Fixer Agent (`.workflows/issue-fixer.yml`)

**Purpose**: Automatically detect open issues and create pull requests to fix them.

**Schedule**: Every 6 hours (configurable)

**Features**:
- 🔍 Scans for open issues without linked PRs
- 📌 Prioritizes documentation, bugs, and enhancements
- 🔧 Automatically implements fixes
- 📋 Creates branches and pull requests
- 💬 Updates original issues with PR links
- ⚙️ Configurable labels, schedule, and issue limits

**Workflow Runs**: [View on GitHub Actions](https://github.com/saimatab/testproject/actions/workflows/issue-fixer.yml)

## Configuration Files

### Issue Fixer Configuration

**File**: `.github/workflows/issue-fixer.yml`

**Key Settings**:
```yaml
# Schedule (cron format)
schedule:
  - cron: '0 */6 * * *'  # Every 6 hours

# Issue types to prioritize
labels:
  - documentation
  - high-priority
  - bug
  - enhancement

# Issues per run
limit: 1  # Prevents conflicts
```

## Automated Processes

### 1. Issue Detection & Analysis
- ✅ Scans open issues every 6 hours
- ✅ Filters out issues with existing PRs
- ✅ Prioritizes by labels
- ✅ Limits to prevent overload

### 2. Automatic Fix Implementation
- ✅ Creates feature branch
- ✅ Implements solution
- ✅ Commits changes
- ✅ Pushes to repository

### 3. Pull Request Creation
- ✅ Creates PR with auto-generated title
- ✅ Links to original issue
- ✅ Adds descriptive body
- ✅ Applies labels

### 4. Issue Notification
- ✅ Posts comment on original issue
- ✅ Links to created PR
- ✅ Notifies issue reporter
- ✅ Tracks PR status

## How to Use

### View Workflow Status

1. Go to: `https://github.com/saimatab/testproject/actions`
2. Select: **Issue Fixer Agent**
3. View: Latest run status and logs

### Manually Trigger Workflow

1. Go to: `https://github.com/saimatab/testproject/actions`
2. Click: **Issue Fixer Agent**
3. Click: **Run workflow**
4. Select: **Run workflow** (confirm)

### Monitor Generated PRs

1. Go to: `https://github.com/saimatab/testproject/pulls`
2. Filter by label: `auto-generated`
3. View: Auto-created PRs

## Auto-Generated Content

### Documentation Fixes

When an issue labeled `documentation` is detected:

**Auto-Generated Files**:
- `README.md` - Complete project documentation
- `CONTRIBUTING.md` - Contribution guidelines

**Content Includes**:
- Project overview and features
- Technology stack
- Setup instructions
- Project structure
- Contributing guidelines
- Deployment instructions

### Bug Fixes & Enhancements

- Creates branch and PR template
- Awaits manual implementation
- Posts for developer action

## Reviewing Auto-Generated PRs

### Before Merging

1. **Read Original Issue**
   - Understand requirements
   - Check if fully addressed

2. **Review PR Changes**
   - Check generated content
   - Verify completeness
   - Look for accuracy

3. **Test Locally**
   ```bash
   git checkout fix/issue-<number>
   npm install
   npm run dev
   npm run lint
   ```

4. **Approve & Merge**
   - Approve PR
   - Merge to main
   - Issue auto-closes

## Customization

### Change Schedule

Edit `.github/workflows/issue-fixer.yml`:

```yaml
schedule:
  - cron: '0 */6 * * *'
```

**Common Schedules**:
- `0 */6 * * *` - Every 6 hours
- `0 9 * * *` - Daily at 9 AM
- `0 0 * * 0` - Weekly on Sunday

### Change Priority Labels

Edit workflow file, line ~80:

```javascript
const priorityIssues = issuesWithoutPR.filter(issue =>
  issue.labels.some(label =>
    ['your-label', 'another-label'].includes(label.name)
  )
);
```

### Change Issues Per Run

Edit workflow file, line ~85:

```javascript
.slice(0, 1);  // Change 1 to higher number
```

### Disable Auto-Fixes for Specific Issues

Add label `no-auto-fix` to issue to skip automatic fixing.

## Workflow Logs

### View Workflow Details

1. Go to specific workflow run
2. Scroll to "Logs"
3. Expand each step to see:
   - Issue detection results
   - Files generated
   - Branch creation status
   - PR creation success/failure
   - Error messages (if any)

### Common Log Messages

```
✅ 📋 Found 5 open issues
✅ 🔍 Found 2 issues without linked PRs
✅ ⚡ Processing 1 priority issue(s)
✅ 🔧 Processing Issue #1: Add documentation
✅   Creating branch: fix/issue-1
✅   📚 Implementing documentation fix...
✅   Created README.md
✅   Pushing branch: fix/issue-1
✅ ✅ PR Created: #2
```

## Permissions & Security

### Required Permissions
- `issues: read` - Read issue details
- `pull-requests: write` - Create PRs
- `contents: write` - Push code

### Token
- Uses automatic `GITHUB_TOKEN`
- Scoped to repository
- Expires after each workflow run

### Safety
- Bot identity clearly marked
- All actions logged and visible
- PRs never auto-merged
- Manual review always required

## Troubleshooting

### Workflow Didn't Run

**Possible Causes**:
- GitHub Actions disabled
- Schedule hasn't triggered
- Syntax error in workflow file

**Solutions**:
1. Check repository settings → Actions
2. Verify cron syntax
3. Review workflow file for errors

### PR Not Created

**Check**:
1. Workflow logs for errors
2. Branch creation status
3. File generation success

**Common Issues**:
- Existing branch with same name
- No changes detected
- File write permission

### Issue Comment Missing

**Possible Causes**:
- Comment creation failed
- Issue already closed
- PR creation failed

**Solution**:
- Check workflow logs
- Manually add comment to issue
- Retry workflow

## Documentation Files

### ISSUE_FIXER.md
- How the agent works
- Scheduling and triggers
- Manual workflow usage
- Customization options
- Troubleshooting guide

### AUTO_PR_CREATION.md
- Automatic PR creation process
- Step-by-step workflow
- Issue type handling
- Review checklist
- Advanced configuration

### README.md (this file)
- Directory structure
- Configuration overview
- Usage instructions
- Customization guide

## Examples

### Example: Issue #1 Auto-Fix

**Issue**: Add comprehensive documentation
**Labels**: `documentation`, `enhancement`

**Workflow Actions**:
1. Detects Issue #1
2. Creates branch: `fix/issue-1`
3. Generates `README.md`
4. Generates `CONTRIBUTING.md`
5. Commits changes
6. Creates PR with title: "Fixes #1: Add documentation"
7. Adds comment to Issue #1 with PR link

**Manual Steps**:
1. Review generated PR
2. Test locally
3. Approve PR
4. Merge to main
5. Issue auto-closes

## Integration with Other Features

### Code Review Hook
- Works with Issue Fixer Agent
- Reviews auto-generated PRs
- Provides feedback on quality

### GitHub MCP Server
- Can enhance issue analysis
- Provides more detailed context
- Future: Claude-powered fixes

### CI/CD Pipeline
- Runs on auto-generated branches
- Validates code quality
- Ensures standards met

## Monitoring & Analytics

### Metrics to Track

- Issues detected per week
- PRs created per week
- PR merge rate
- Time to fix issues
- Most common issue labels

### View Statistics

```bash
# Recent workflow runs
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/saimatab/testproject/actions/workflows/issue-fixer.yml/runs
```

## Future Enhancements

- [ ] Claude AI-powered fix analysis
- [ ] Intelligent code generation
- [ ] Test generation for fixes
- [ ] Performance optimization suggestions
- [ ] Security vulnerability detection
- [ ] Dependency update automation
- [ ] Architecture improvement suggestions

## Support & Feedback

For issues or questions:
- Check: GitHub Issues
- Create: New issue with details
- Review: Workflow logs for errors

## Related Documentation

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Workflow Syntax](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions)
- [Cron Scheduling](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows#schedule)

---

**GitHub Automation v2** - Automatic Issue Detection & PR Creation Enabled 🚀

Last Updated: 2026-05-09

# Claude Code Configuration for Portfolio Project

This directory contains Claude Code configuration and custom agents for the portfolio project.

## Contents

- **settings.json** - Project-wide Claude Code settings including hooks
- **agents/** - Custom subagents for specialized tasks
- **.gitignore** - Files not to commit

## Hooks Configuration

### FileChanged Hook - Code Review Agent

Automatically reviews code whenever files change in the repository.

**Trigger**: File modifications detected  
**Agent**: `code-review.md`  
**Type**: Async rewake (runs in background, notifies on completion)

#### How It Works

1. **Detection**: When you save/modify a file, the FileChanged hook triggers
2. **Review**: A subagent runs the code review prompt against the changed file
3. **Analysis**: Reviews code across 8 dimensions:
   - 🔒 Security (vulnerabilities, injection risks, secrets)
   - 🚀 Performance (bottlenecks, efficiency, memory leaks)
   - 📝 Code Quality (readability, naming, DRY principle)
   - ⚠️ Error Handling (exceptions, error messages, graceful degradation)
   - 🧪 Testing (test coverage, edge cases, meaningful tests)
   - 📚 Documentation (comments, docs, type hints, docstrings)
   - ♿ Accessibility (semantic HTML, ARIA, keyboard nav, contrast)
   - 📦 Dependencies (unnecessary deps, security issues)

4. **Notification**: Receives a notification when the review completes
5. **Output**: Review appears as a system notification or message

#### Review Output Format

```
## Summary
[Overview of changes]

## Positive Findings ✅
[What was done well]

## Issues Found
### Critical 🔴
[Must fix issues]

### Important 🟡
[Should fix issues]

### Minor 🟢
[Nice-to-haves]

## Recommendations
[Actionable improvements]

## Approval Status
- Ready to merge / Needs revision
```

#### Configuration

The hook is configured in `settings.json`:

```json
{
  "hooks": {
    "FileChanged": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "agent",
            "prompt": "Review code against security, performance, quality, testing, etc.",
            "timeout": 120,
            "async": true,
            "asyncRewake": true
          }
        ]
      }
    ]
  }
}
```

**Key settings:**
- `type: "agent"` - Runs a subagent (Claude) for intelligent review
- `async: true` - Runs in background without blocking your work
- `asyncRewake: true` - Notifies you when the review completes
- `timeout: 120` - Max 120 seconds for review

#### Customizing the Hook

**To disable temporarily:**
Open `.claude/settings.json` and comment out the `FileChanged` hook:

```json
// "FileChanged": [...]
```

**To modify review criteria:**
Edit `agents/code-review.md` and adjust the review checklist or prompt details.

**To change review scope:**
Modify the `matcher` in settings.json:
- `"*.jsx"` - Review only React files
- `"*.{js,jsx,ts,tsx}"` - Review only JavaScript/TypeScript
- `"*"` - Review all file changes (current)

#### Best Practices for Reviews

The code review agent applies these practices:

1. **Comprehensive**: Checks 8 major quality dimensions
2. **Constructive**: Explains issues and suggests solutions
3. **Balanced**: Acknowledges strengths and improvements
4. **Specific**: Provides actionable feedback with examples
5. **Context-Aware**: Adjusts rigor based on file type

#### Example Review Output

```
## Summary
Added ProjectCard component with styling and error handling

## Positive Findings ✅
- Clear component structure with well-named props
- Responsive design with mobile considerations
- Proper use of CSS for styling (no inline styles)
- Accessible semantic HTML elements

## Issues Found
### Minor 🟢
- Consider extracting hardcoded emoji to constants
- Add PropTypes or TypeScript for component validation

## Recommendations
- Add unit tests for ProjectCard component
- Document the expected props with JSDoc

## Approval Status
✅ Ready to merge (minor improvements suggested)
```

## Agent Files

### code-review.md
Custom instructions for the code review subagent. Includes:
- Complete review checklist across 8 dimensions
- Output format specification
- Best practices to apply
- Guidelines for constructive feedback

## Notes

- Hooks only trigger on file changes detected by Claude Code
- Reviews run asynchronously so your work isn't blocked
- You'll be notified via terminal when reviews complete
- The hook applies to all file types by default (customize the matcher if needed)

## Troubleshooting

**Hook not running?**
1. Check `.claude/settings.json` exists and is valid JSON
2. Use `/hooks` command in Claude Code to verify configuration
3. Ensure FileChanged matcher is set (currently `"*"`)

**Want different review criteria?**
- Edit `agents/code-review.md` with your custom instructions
- Modify the hook prompt in `settings.json` for different focus areas

**Need to disable reviews?**
- Comment out the FileChanged section in `.claude/settings.json`
- Or use `/config` to manage hook settings

## See Also

- [Claude Code Settings Reference](https://docs.anthropic.com/en/docs/build-a-claude-site/claude-code)
- [Hooks Documentation](https://docs.anthropic.com/en/docs/build-a-claude-site/hooks)

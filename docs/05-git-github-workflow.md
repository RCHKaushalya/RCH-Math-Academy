# Git and GitHub Workflow

Document Status: Draft  
Prepared On: 2026-06-28  
Project: Math Tutor Web Application

## 1. Purpose

This document defines the formal Git and GitHub workflow for the project. The goal is to keep development organized, reviewable, and deployable through free tooling.

## 2. Repository Strategy

The project should use one GitHub repository for the web application and documentation.

Recommended repository name:

```text
math-tutor
```

The repository should include:

- Application source code.
- Lesson content.
- Documentation.
- Tests.
- Deployment configuration.

## 3. Branch Strategy

Recommended branches:

- `main`: Production-ready code.
- `develop`: Optional integration branch for larger work.
- `feature/<short-name>`: New feature work.
- `content/<topic-name>`: Lesson and content additions.
- `fix/<short-name>`: Bug fixes.

For a solo project, `main` plus short-lived feature branches is enough.

## 4. Commit Message Standard

Use clear commit messages.

Recommended format:

```text
type(scope): short summary
```

Examples:

```text
docs(plan): add feasibility and roadmap documents
feat(lessons): add fractions topic pages
fix(quiz): correct numeric answer validation
style(ui): improve mobile lesson layout
```

Common types:

- `feat`
- `fix`
- `docs`
- `test`
- `style`
- `refactor`
- `chore`

## 5. Pull Request Workflow

For each meaningful change:

1. Create a feature branch.
2. Make the changes.
3. Run formatting, linting, tests, and build.
4. Open a pull request.
5. Review the changed files.
6. Merge into `main`.
7. Let the hosting provider deploy automatically.

## 6. GitHub Issues

Use GitHub Issues to track:

- New lessons.
- Bug reports.
- Design improvements.
- SEO tasks.
- AdSense readiness checklist.
- Accessibility improvements.

Suggested labels:

- `content`
- `feature`
- `bug`
- `seo`
- `adsense`
- `accessibility`
- `documentation`

## 7. GitHub Actions

Use GitHub Actions for free automated checks.

Initial checks:

- Install dependencies.
- Run lint.
- Run tests.
- Run production build.

Future checks:

- Link checker.
- Lighthouse audit.
- Spell check for documentation.

## 8. Release Workflow

For a small web project, every merge to `main` can deploy to production.

Formal release notes can be added later when the platform has users.

Suggested version tags:

```text
v0.1.0 - MVP content site
v0.2.0 - Interactive practice
v0.3.0 - AdSense-ready release
v1.0.0 - Public stable release
```


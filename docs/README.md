# Math Tutoring Platform Documentation

Document Status: Draft  
Prepared For: Math Tutor Project  
Prepared On: 2026-06-28  
Owner: Project Maintainer

## Purpose

This folder contains the formal planning and technical documentation for the Math Tutor web application. The project objective is to provide free mathematics learning resources for learners at multiple levels while building a sustainable monetization path through Google AdSense.

## Documentation Index

| Document | Purpose |
| --- | --- |
| [01-feasibility-study.md](01-feasibility-study.md) | Determines whether the project is possible, realistic, and worth building. |
| [02-product-requirements.md](02-product-requirements.md) | Defines the target users, core product features, and success criteria. |
| [03-technical-architecture.md](03-technical-architecture.md) | Defines the proposed technology stack and system architecture. |
| [04-monetization-and-adsense.md](04-monetization-and-adsense.md) | Defines the AdSense strategy, approval requirements, and monetization safeguards. |
| [05-git-github-workflow.md](05-git-github-workflow.md) | Defines the Git, GitHub, branch, commit, and release workflow. |
| [06-hosting-and-deployment.md](06-hosting-and-deployment.md) | Defines the free hosting options and recommended deployment path. |
| [07-roadmap.md](07-roadmap.md) | Defines the phased implementation roadmap. |
| [08-action-tracker.md](08-action-tracker.md) | Defines every trackable project action with IDs, status, priority, dependencies, and acceptance criteria. |
| [09-curriculum-scope.md](09-curriculum-scope.md) | Defines the long-term mathematics scope from early numeracy through research-level mathematics. |
| [10-design-and-content-standards.md](10-design-and-content-standards.md) | Defines the gray light theme, interface standards, and content quality requirements. |
| [11-learning-experience-and-pedagogy.md](11-learning-experience-and-pedagogy.md) | Defines level-specific teaching voice, nursery-first interaction design, and child-safe learning requirements. |

## Current Recommendation

The project is possible, but the first version should be built as a content-first static web application rather than a heavy backend application. This makes the platform easier to host for free, easier to optimize for search engines, and safer for future AdSense approval.

Recommended initial stack:

- Frontend: Next.js, React, TypeScript
- Styling: Tailwind CSS
- Math rendering: KaTeX or MathJax
- Content: MDX files stored in the repository
- Source control: Git and GitHub
- Hosting: Cloudflare Pages or Netlify Free
- Optional later backend: Supabase Free or Cloudflare D1

## Key Project Principle

AdSense should not be treated as the first milestone. The first milestone is a useful, original, well-structured mathematics learning platform. Monetization should be added only after the site has enough quality pages, clear navigation, privacy information, and early organic traffic.

## Long-Term Scope

The long-term vision is broad: the platform should grow from nursery-level early numeracy to advanced mathematics useful for university learners, PhD students, engineers, scientists, and research-oriented users. This must be built in phases so quality remains high.

## Pedagogy Principle

Different learners need different teaching voices and interaction models. Nursery learners should not be expected to read independently. Their experience should be visual, audio-guided, touch-friendly, and caregiver-friendly. Advanced learners should receive precise language, notation, derivations, proofs, and serious applications.

## Public Page Principle

The public website should show learning content only. Internal requirements, monetization plans, tracker language, GitHub links, and documentation links should stay out of learner-facing pages.

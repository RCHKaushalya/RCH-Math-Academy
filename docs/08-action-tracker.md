# Master Action Tracker

Document Status: Draft  
Prepared On: 2026-06-28  
Project: Math Tutor Web Application

## 1. Purpose

This document defines every currently known project action in a trackable format. It is the master execution checklist for planning, implementation, content, quality, deployment, and future monetization.

The project order is intentional:

1. Build the math tutoring platform first.
2. Publish high-quality original mathematics content.
3. Validate usability, accessibility, SEO, and performance.
4. Prepare AdSense only after the site is useful and policy-ready.

## 2. Tracking Standard

Each task must be tracked using these fields:

| Field | Meaning |
| --- | --- |
| ID | Stable task identifier. |
| Phase | Work phase where the task belongs. |
| Priority | P0 is required, P1 is important, P2 is useful, P3 is optional. |
| Status | Not Started, In Progress, Blocked, Done. |
| Depends On | Task or decision needed before the work can finish. |
| Acceptance Criteria | Evidence required before the task can be marked Done. |

## 3. Trackable Capabilities

The project must support these tracking capabilities:

- Every task has a stable ID.
- Every task can become a GitHub Issue.
- Every task can be linked to a branch, pull request, and commit.
- Every task has acceptance criteria.
- Every task has a status.
- Every task has a priority.
- Every task has a dependency field.
- Documentation tasks remain in `docs`.
- Source code tasks remain outside `docs`.
- AdSense tasks remain blocked until the math tutoring platform is public and content-rich.

Recommended GitHub labels:

- `docs`
- `planning`
- `frontend`
- `design`
- `content`
- `curriculum`
- `practice`
- `seo`
- `accessibility`
- `performance`
- `testing`
- `deployment`
- `analytics`
- `adsense`
- `blocked`

## 4. Phase 0 - Documentation and Planning

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| DOC-001 | Maintain documentation index. | P0 | Done | None | `docs/README.md` lists all formal documents. |
| DOC-002 | Create feasibility study. | P0 | Done | None | Feasibility document exists and includes risks. |
| DOC-003 | Create product requirements document. | P0 | Done | None | Product requirements document exists. |
| DOC-004 | Create technical architecture document. | P0 | Done | None | Architecture document exists with stack recommendation. |
| DOC-005 | Create monetization and AdSense plan. | P1 | Done | None | AdSense plan exists and states monetization comes later. |
| DOC-006 | Create Git and GitHub workflow. | P0 | Done | None | Workflow document exists. |
| DOC-007 | Create hosting and deployment plan. | P0 | Done | None | Hosting document exists with recommended providers. |
| DOC-008 | Create phased roadmap. | P0 | Done | None | Roadmap document exists. |
| DOC-009 | Create master action tracker. | P0 | Done | User request | This document exists with trackable task IDs. |
| DOC-010 | Create curriculum scope document. | P0 | Done | User request | Curriculum scope covers early numeracy through research mathematics. |
| DOC-011 | Create design and content quality standards. | P0 | Done | User request | Design standards include sky-blue elegant light theme. |
| DOC-013 | Create learning experience and pedagogy document. | P0 | Done | User request | Pedagogy document defines level-specific voice and nursery-first interaction strategy. |
| DOC-012 | Review documentation after each major phase. | P1 | Not Started | Phase completion | Docs match implemented product state. |

## 5. Phase 1 - Git, GitHub, and Project Setup

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| GIT-001 | Initialize local Git repository. | P0 | Done | DOC-009 | `.git` exists locally. |
| GIT-002 | Create `.gitignore`. | P0 | Done | GIT-001 | Common Node, build, environment, and OS files are ignored. |
| GIT-003 | Create project root `README.md`. | P0 | Done | GIT-001 | README explains project purpose and local setup. |
| GIT-004 | Create GitHub repository. | P0 | Done | GIT-001 | Remote repository exists on GitHub: `https://github.com/RCHKaushalya/RCH-Math-Academy.git`. |
| GIT-005 | Connect local repository to GitHub remote. | P0 | Done | GIT-004 | `origin` remote points to GitHub. |
| GIT-006 | Push initial repository commit. | P0 | Done | GIT-005 | Initial docs and scaffold are committed and pushed to `origin/main`. |
| GIT-007 | Define issue labels. | P1 | Not Started | GIT-004 | GitHub labels match this tracker. |
| GIT-008 | Convert tracker items into GitHub Issues. | P1 | Not Started | GIT-007 | Required P0 and P1 tasks are represented as issues. |
| GIT-009 | Create branch protection rule for `main`. | P2 | Not Started | GIT-004 | Direct accidental production changes are reduced. |
| GIT-010 | Add pull request template. | P1 | Not Started | GIT-004 | PR template includes testing and documentation checklist. |
| GIT-011 | Add issue templates. | P1 | Not Started | GIT-004 | Templates exist for bug, content, feature, and SEO tasks. |
| GIT-012 | Define release tag strategy. | P2 | Not Started | GIT-004 | Version tags are documented and used. |
| GIT-013 | Create initial local repository commit. | P0 | Done | GIT-003 | Local Git commit exists with documentation and initial scaffold. |

## 5.1 Phase 1A - Local Development Environment

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| ENV-001 | Verify Node and npm runtime. | P0 | Blocked | GIT-001 | `node --version` and `npm --version` return successfully. Current shell checks time out intermittently. |
| ENV-002 | Install project dependencies. | P0 | Blocked | ENV-001 | `npm install` creates `node_modules` and `package-lock.json`. Current install hangs without producing files. |
| ENV-003 | Verify local build. | P0 | Not Started | ENV-002 | `npm run build` succeeds. |

## 6. Phase 2 - Application Foundation

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| APP-001 | Scaffold Next.js project. | P0 | In Progress | GIT-001 | App runs locally. Files exist, but dependency install is blocked. |
| APP-002 | Add TypeScript configuration. | P0 | In Progress | APP-001 | TypeScript build passes. Configuration exists, build pending. |
| APP-003 | Add Tailwind CSS. | P0 | In Progress | APP-001 | Tailwind styles compile. Configuration exists, compile pending. |
| APP-004 | Add linting. | P0 | In Progress | APP-001 | Lint command exists and runs. Script/config exist, verification pending. |
| APP-005 | Add formatting command. | P1 | Not Started | APP-001 | Format command exists and runs. |
| APP-006 | Add base application layout. | P0 | In Progress | APP-003 | Layout renders header, main area, and footer. Files exist, browser verification pending. |
| APP-007 | Add route structure. | P0 | Not Started | APP-006 | Routes exist for home, topics, lessons, practice, and policy pages. |
| APP-008 | Add reusable page metadata helper. | P0 | Not Started | APP-007 | Pages can generate unique SEO metadata. |
| APP-009 | Add reusable lesson template. | P0 | Not Started | APP-007 | Lesson content renders in a consistent format. |
| APP-010 | Add topic index page. | P0 | Not Started | APP-007 | Users can browse topic groups. |
| APP-011 | Add level index page. | P0 | Not Started | APP-007 | Users can browse by level. |
| APP-012 | Add search index data structure. | P1 | Not Started | APP-010 | Lesson metadata can be searched client-side. |
| APP-013 | Add responsive navigation. | P0 | In Progress | APP-006 | Navigation works on desktop and mobile. Header links exist, browser verification pending. |
| APP-014 | Add footer with required links. | P0 | Not Started | APP-006 | Footer links to About, Contact, Privacy, Terms, and Disclaimer. |
| APP-015 | Add 404 page. | P1 | Not Started | APP-007 | Missing pages show helpful navigation. |
| APP-016 | Add sitemap generation. | P0 | Not Started | APP-008 | Sitemap includes public pages and lessons. |
| APP-017 | Add robots file. | P0 | Not Started | APP-016 | Search engines can crawl public content. |
| APP-018 | Add RSS or content feed. | P3 | Not Started | APP-010 | New lessons can be followed by feed readers. |
| APP-019 | Add environment variable pattern. | P1 | Not Started | APP-001 | Future secrets are not hard-coded. |
| APP-020 | Add production build command. | P0 | In Progress | APP-001 | `npm run build` succeeds. Script exists, verification pending dependency install. |

## 7. Phase 3 - Sky-Blue Elegant Design System

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| DES-001 | Define sky-blue light theme color tokens. | P0 | Not Started | DOC-011 | Theme tokens are implemented in Tailwind or CSS variables. |
| DES-002 | Define typography scale. | P0 | Not Started | DES-001 | Headings, body text, math text, and captions are consistent. |
| DES-003 | Define spacing scale. | P1 | Not Started | DES-001 | Layout spacing is consistent across pages. |
| DES-004 | Define button styles. | P0 | Not Started | DES-001 | Primary, secondary, ghost, and icon button styles exist. |
| DES-005 | Define form input styles. | P0 | Not Started | DES-001 | Inputs are accessible and visually consistent. |
| DES-006 | Define card and panel usage. | P1 | Not Started | DES-001 | Cards are used only for repeated items or tools. |
| DES-007 | Define lesson page layout. | P0 | Not Started | APP-009 | Lesson pages are readable on mobile and desktop. |
| DES-008 | Define practice UI layout. | P0 | Not Started | PRA-001 | Practice controls are clear and stable. |
| DES-009 | Add icon system. | P1 | Not Started | APP-001 | Lucide icons or selected icon library is installed and used. |
| DES-010 | Add accessible focus states. | P0 | Not Started | DES-004 | Keyboard users can see active controls. |
| DES-011 | Add responsive visual QA checklist. | P0 | Not Started | DES-007 | Desktop and mobile layouts pass screenshot review. |
| DES-012 | Add ad-safe layout spacing rules. | P1 | Not Started | ADS-006 | Future ads cannot be confused with lesson controls. |
| DES-013 | Design nursery activity interface pattern. | P0 | Not Started | PED-001 | Nursery screens use audio, visuals, large controls, and one task per screen. |
| DES-014 | Design level-specific page templates. | P0 | Not Started | PED-002 | Templates exist for early learning, guided lessons, standard lessons, and advanced lessons. |

## 8. Phase 4 - Curriculum Architecture

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| CUR-001 | Define full curriculum hierarchy. | P0 | Done | User request | `09-curriculum-scope.md` defines nursery to research scope. |
| CUR-002 | Define learner level taxonomy. | P0 | Not Started | CUR-001 | Levels are represented in content metadata. |
| CUR-003 | Define topic taxonomy. | P0 | Not Started | CUR-001 | Topics are represented in content metadata. |
| CUR-004 | Define prerequisite model. | P0 | Not Started | CUR-002 | Lessons can link to required prior knowledge. |
| CUR-005 | Define difficulty labels. | P0 | Not Started | CUR-002 | Lessons and questions support difficulty values. |
| CUR-006 | Define lesson content schema. | P0 | Not Started | APP-009 | Required lesson fields are documented and validated. |
| CUR-007 | Define practice question schema. | P0 | Not Started | PRA-001 | Required question fields are documented and validated. |
| CUR-008 | Define nursery and early numeracy strand. | P0 | Not Started | CUR-001 | Topic list exists for early counting, shapes, comparison, and patterns. |
| CUR-009 | Define primary math strand. | P0 | Not Started | CUR-001 | Topic list exists for arithmetic, place value, fractions, and measurement. |
| CUR-010 | Define middle school strand. | P0 | Not Started | CUR-001 | Topic list exists for ratios, expressions, equations, geometry, and data. |
| CUR-011 | Define high school strand. | P0 | Not Started | CUR-001 | Topic list exists for algebra, functions, geometry, trigonometry, and statistics. |
| CUR-012 | Define exam preparation strand. | P1 | Not Started | CUR-001 | Practice plan exists for exam-style topics. |
| CUR-013 | Define undergraduate mathematics strand. | P1 | Not Started | CUR-001 | Topic list exists for calculus, linear algebra, discrete math, probability, and differential equations. |
| CUR-014 | Define graduate mathematics strand. | P2 | Not Started | CUR-001 | Topic list exists for analysis, algebra, topology, measure theory, and advanced probability. |
| CUR-015 | Define applied mathematics strand. | P1 | Not Started | CUR-001 | Topic list exists for numerical methods, optimization, modeling, and scientific computing. |
| CUR-016 | Define research mathematics strand. | P2 | Not Started | CUR-001 | Topic list exists for research-oriented and specialist content. |
| CUR-017 | Define space, aerospace, and NASA-relevant math strand. | P2 | Not Started | CUR-001 | Topic list exists for orbital mechanics, control, estimation, numerical simulation, and mission analysis foundations. |
| CUR-018 | Define content progression rules. | P0 | Not Started | CUR-004 | Learners can move from prerequisite to advanced lessons logically. |
| CUR-019 | Define content review rubric. | P0 | Not Started | DOC-011 | Every lesson can be reviewed for quality. |
| CUR-020 | Define long-term expansion milestones. | P1 | Not Started | CUR-001 | Curriculum expansion is split into realistic releases. |

## 8.1 Phase 4A - Pedagogy and Learner Experience

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| PED-001 | Define nursery learning approach. | P0 | Done | User request | `11-learning-experience-and-pedagogy.md` states nursery learners should not need reading ability. |
| PED-002 | Define teaching voice by level. | P0 | Done | User request | Each learner level has a reading assumption, voice, and interaction model. |
| PED-003 | Define audio-first requirements for early learning. | P0 | Done | PED-001 | Audio prompts, replay controls, and visual fallback rules are documented. |
| PED-004 | Define caregiver support pattern. | P0 | Done | PED-001 | Nursery pages include optional parent or teacher helper notes. |
| PED-005 | Define child-safe privacy requirements. | P0 | Done | PED-001 | Child sections avoid accounts, personal data, public comments, and personalized ads. |
| PED-006 | Build early learning activity template. | P0 | Not Started | APP-007 | Nursery activities render one task per screen with large touch controls. |
| PED-007 | Build audio prompt control. | P0 | Not Started | PED-006 | Users can play or replay instructions. |
| PED-008 | Build picture-based answer component. | P0 | Not Started | PED-006 | Learners can answer without reading text. |
| PED-009 | Build caregiver note component. | P1 | Not Started | PED-006 | Adults can read guidance without cluttering the child activity. |
| PED-010 | Create first nursery counting activity. | P0 | Not Started | PED-006 | Activity teaches counting from 1 to 5 without requiring reading. |
| PED-011 | Create first nursery shape activity. | P0 | Not Started | PED-006 | Activity teaches basic shapes with picture matching. |
| PED-012 | Test nursery flow on mobile. | P0 | Not Started | PED-010 | Activity works with touch targets suitable for young learners. |
| PED-013 | Review child-directed monetization policy before ads. | P0 | Not Started | ADS-007 | Current COPPA and AdSense age treatment guidance is reviewed before child-section monetization. |

## 9. Phase 5 - Content Production

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| CON-001 | Create lesson authoring template. | P0 | Not Started | CUR-006 | Template includes objective, explanation, examples, mistakes, practice, and summary. |
| CON-002 | Create practice question template. | P0 | Not Started | CUR-007 | Template supports answer and explanation. |
| CON-003 | Create topic overview template. | P0 | Not Started | CUR-003 | Template explains a topic and links lessons. |
| CON-004 | Create first 10 early math lessons. | P0 | Not Started | CON-001 | Ten original beginner lessons are published. |
| CON-005 | Create first 10 arithmetic lessons. | P0 | Not Started | CON-001 | Ten original arithmetic lessons are published. |
| CON-006 | Create first 10 algebra foundation lessons. | P0 | Not Started | CON-001 | Ten original algebra foundation lessons are published. |
| CON-007 | Create first 5 geometry foundation lessons. | P1 | Not Started | CON-001 | Five original geometry lessons are published. |
| CON-008 | Create first 5 statistics or data lessons. | P1 | Not Started | CON-001 | Five original statistics lessons are published. |
| CON-009 | Add worked examples to every MVP lesson. | P0 | Not Started | CON-004 | Every MVP lesson has at least two worked examples. |
| CON-010 | Add common mistakes to every MVP lesson. | P0 | Not Started | CON-004 | Every MVP lesson includes misconception guidance. |
| CON-011 | Add practice questions to every MVP lesson. | P0 | Not Started | CON-002 | Every MVP lesson has at least five questions. |
| CON-012 | Add internal related lesson links. | P0 | Not Started | CUR-004 | Lessons link to prerequisites and next lessons. |
| CON-013 | Add visual aids for selected lessons. | P1 | Not Started | DES-007 | Diagrams or visual examples support difficult concepts. |
| CON-014 | Review content for originality. | P0 | Not Started | CON-004 | No copied text is present. |
| CON-015 | Review content for mathematical correctness. | P0 | Not Started | CON-004 | Examples and answers are checked. |
| CON-016 | Review content for learner clarity. | P0 | Not Started | CON-004 | Lessons use plain language before formal notation. |
| CON-017 | Add advanced content seed pages. | P2 | Not Started | CUR-013 | Advanced topic pages exist as structured placeholders with original summaries. |
| CON-018 | Add NASA-relevant math seed pages. | P2 | Not Started | CUR-017 | Specialist topic pages exist as structured placeholders with original summaries. |
| CON-019 | Create content publishing checklist. | P0 | Not Started | CON-001 | Checklist must be completed before publishing each lesson. |
| CON-020 | Create content update schedule. | P1 | Not Started | CON-019 | Monthly review schedule exists. |

## 10. Phase 6 - Interactive Practice

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| PRA-001 | Build practice data model. | P0 | Not Started | CUR-007 | Questions can be rendered from structured data. |
| PRA-002 | Build multiple choice component. | P0 | Not Started | PRA-001 | Learners can choose an answer and receive feedback. |
| PRA-003 | Build numeric answer component. | P0 | Not Started | PRA-001 | Learners can enter a numeric answer and receive feedback. |
| PRA-004 | Build true or false component. | P1 | Not Started | PRA-001 | Binary questions work with feedback. |
| PRA-005 | Build solution reveal component. | P0 | Not Started | PRA-002 | Learners can reveal step-by-step explanations. |
| PRA-006 | Build per-lesson practice progress. | P1 | Not Started | PRA-002 | Learners can see completed questions in the current session. |
| PRA-007 | Add generated arithmetic drills. | P1 | Not Started | PRA-003 | Simple arithmetic practice can generate fresh questions client-side. |
| PRA-008 | Add fraction practice drills. | P1 | Not Started | PRA-003 | Fraction practice can generate or load questions. |
| PRA-009 | Add algebra equation practice. | P1 | Not Started | PRA-003 | Learners can practice basic equation solving. |
| PRA-010 | Add graph reading practice. | P2 | Not Started | DES-008 | Learners can answer questions from visual graphs. |
| PRA-011 | Add incorrect answer explanations. | P0 | Not Started | PRA-002 | Wrong answers explain the likely mistake. |
| PRA-012 | Add difficulty filtering. | P2 | Not Started | CUR-005 | Learners can filter easy, medium, and hard questions. |
| PRA-013 | Add printable worksheet mode. | P2 | Not Started | CON-011 | Practice sets can be printed cleanly. |
| PRA-014 | Add keyboard accessibility to practice. | P0 | Not Started | PRA-002 | Practice works without a mouse. |
| PRA-015 | Add practice component tests. | P0 | Not Started | PRA-002 | Core practice behavior is tested. |

## 11. Phase 7 - SEO, Accessibility, and Performance

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| SEO-001 | Define SEO title pattern. | P0 | Not Started | APP-008 | Every lesson has a unique title. |
| SEO-002 | Define SEO description pattern. | P0 | Not Started | APP-008 | Every lesson has a useful description. |
| SEO-003 | Add canonical URLs. | P0 | Not Started | APP-008 | Public pages include canonical metadata. |
| SEO-004 | Add Open Graph metadata. | P1 | Not Started | APP-008 | Shared links render useful previews. |
| SEO-005 | Add structured heading rules. | P0 | Not Started | CON-001 | Lesson headings follow a logical hierarchy. |
| SEO-006 | Add internal linking rules. | P0 | Not Started | CON-012 | Lesson pages link to related content. |
| SEO-007 | Add Google Search Console plan. | P0 | Not Started | DEP-006 | Search Console setup steps are documented. |
| SEO-008 | Add lightweight analytics plan. | P1 | Not Started | ANA-001 | Analytics does not harm performance or privacy. |
| SEO-009 | Run mobile performance audit. | P0 | Not Started | DEP-008 | Mobile performance score is acceptable. |
| SEO-010 | Run accessibility audit. | P0 | Not Started | DES-010 | Critical accessibility issues are fixed. |
| SEO-011 | Verify keyboard navigation. | P0 | Not Started | APP-013 | Main navigation and practice work by keyboard. |
| SEO-012 | Verify color contrast. | P0 | Not Started | DES-001 | Text and controls meet contrast requirements. |
| SEO-013 | Optimize images. | P1 | Not Started | CON-013 | Images are compressed and sized correctly. |
| SEO-014 | Prevent layout shift. | P0 | Not Started | DES-007 | Lesson and future ad containers use stable dimensions. |

## 12. Phase 8 - Testing and Quality Assurance

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| QA-001 | Add unit testing framework. | P0 | Not Started | APP-001 | Test command runs. |
| QA-002 | Add component tests for navigation. | P1 | Not Started | APP-013 | Navigation tests pass. |
| QA-003 | Add component tests for lesson template. | P1 | Not Started | APP-009 | Lesson rendering tests pass. |
| QA-004 | Add component tests for practice. | P0 | Not Started | PRA-015 | Practice tests pass. |
| QA-005 | Add end-to-end smoke test. | P0 | Not Started | APP-020 | Home, topic, lesson, and practice routes load. |
| QA-006 | Add build verification. | P0 | Not Started | APP-020 | Production build passes locally and in CI. |
| QA-007 | Add content validation script. | P0 | Not Started | CUR-006 | Missing lesson metadata fails validation. |
| QA-008 | Add link checker. | P1 | Not Started | CON-012 | Broken internal links are detected. |
| QA-009 | Add spelling review process. | P2 | Not Started | CON-001 | Content can be reviewed for spelling mistakes. |
| QA-010 | Add math answer review process. | P0 | Not Started | CON-011 | Practice answers are manually or programmatically verified. |
| QA-011 | Add responsive screenshot checks. | P1 | Not Started | DES-011 | Desktop and mobile screenshots are reviewed. |
| QA-012 | Add CI workflow. | P0 | Not Started | GIT-004 | GitHub Actions runs lint, tests, and build. |
| QA-013 | Add pre-release checklist. | P0 | Not Started | QA-012 | Each release has documented checks. |
| QA-014 | Add defect tracking process. | P1 | Not Started | GIT-007 | Bugs are tracked through GitHub Issues. |

## 13. Phase 9 - Hosting and Deployment

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| DEP-001 | Select production hosting provider. | P0 | Not Started | DOC-007 | Cloudflare Pages or Netlify is selected. |
| DEP-002 | Create hosting account. | P0 | Not Started | DEP-001 | Hosting dashboard is accessible. |
| DEP-003 | Connect hosting to GitHub. | P0 | Not Started | GIT-004 | Hosting provider can deploy from repository. |
| DEP-004 | Configure build command. | P0 | Not Started | APP-020 | Production build works on host. |
| DEP-005 | Configure preview deployments. | P1 | Not Started | DEP-003 | Pull requests create preview URLs. |
| DEP-006 | Configure custom domain. | P0 | Not Started | DEP-003 | Production site uses selected domain. |
| DEP-007 | Enable HTTPS. | P0 | Not Started | DEP-006 | Production domain loads over HTTPS. |
| DEP-008 | Deploy public MVP. | P0 | Not Started | DEP-004 | Public website loads. |
| DEP-009 | Validate sitemap on production. | P0 | Not Started | DEP-008 | Sitemap is available and accurate. |
| DEP-010 | Validate robots file on production. | P0 | Not Started | DEP-008 | Robots file is available and correct. |
| DEP-011 | Add rollback process. | P1 | Not Started | DEP-008 | Failed releases can be rolled back. |
| DEP-012 | Document deployment steps. | P1 | Not Started | DEP-008 | Deployment process is documented in `docs`. |

## 14. Phase 10 - Analytics and Feedback

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| ANA-001 | Select privacy-conscious analytics. | P1 | Not Started | DEP-008 | Analytics option is selected and documented. |
| ANA-002 | Add analytics to production. | P1 | Not Started | ANA-001 | Page views can be measured. |
| ANA-003 | Configure Search Console. | P0 | Not Started | DEP-006 | Site is verified in Search Console. |
| ANA-004 | Submit sitemap to Search Console. | P0 | Not Started | ANA-003 | Sitemap is submitted. |
| ANA-005 | Track lesson page performance. | P1 | Not Started | ANA-002 | Popular and weak pages can be identified. |
| ANA-006 | Create feedback contact path. | P0 | Not Started | APP-014 | Users can report mistakes or contact the owner. |
| ANA-007 | Add content improvement backlog process. | P1 | Not Started | ANA-005 | Search and feedback insights become tasks. |
| ANA-008 | Review analytics monthly. | P2 | Not Started | ANA-002 | Monthly review notes are recorded. |

## 15. Phase 11 - AdSense Readiness and Monetization

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| ADS-001 | Keep AdSense blocked until learning MVP is public. | P0 | Not Started | DEP-008 | No ad code is added before public content release. |
| ADS-002 | Create About page. | P0 | Not Started | APP-007 | About page explains project and owner. |
| ADS-003 | Create Contact page. | P0 | Not Started | APP-007 | Contact method is available. |
| ADS-004 | Create Privacy Policy page. | P0 | Not Started | APP-007 | Privacy page explains cookies, analytics, and ads. |
| ADS-005 | Create Terms of Use page. | P0 | Not Started | APP-007 | Terms page exists. |
| ADS-006 | Create educational disclaimer page. | P0 | Not Started | APP-007 | Disclaimer states educational purpose. |
| ADS-007 | Review AdSense policies before application. | P0 | Not Started | ADS-004 | Current policy links are reviewed. |
| ADS-008 | Confirm original content quantity. | P0 | Not Started | CON-014 | Site has enough useful original lessons. |
| ADS-009 | Confirm navigation and user experience quality. | P0 | Not Started | SEO-010 | Site is easy to browse and accessible. |
| ADS-010 | Confirm domain and HTTPS readiness. | P0 | Not Started | DEP-007 | Production domain is stable and secure. |
| ADS-011 | Create ad placement plan. | P0 | Not Started | DES-012 | Ads are placed away from quiz controls and core learning steps. |
| ADS-012 | Apply for AdSense. | P0 | Not Started | ADS-007 | Application is submitted only after readiness checks pass. |
| ADS-013 | Add AdSense verification code. | P0 | Not Started | ADS-012 | Verification code is added correctly. |
| ADS-014 | Add approved ad units. | P1 | Not Started | ADS-012 | Ads display only after approval. |
| ADS-015 | Monitor ad impact on learning experience. | P1 | Not Started | ADS-014 | Ads do not damage readability, speed, or trust. |
| ADS-016 | Keep nursery activity screens ad-free. | P0 | Not Started | PED-005 | Early learning activity screens do not show ads. |
| ADS-017 | Add age-restricted ad treatment plan for child-directed sections. | P0 | Not Started | PED-013 | Any future ads on child-directed content follow current legal and platform requirements. |

## 16. Phase 12 - Long-Term Growth

| ID | Task | Priority | Status | Depends On | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| GRO-001 | Expand primary and middle school content. | P0 | Not Started | CON-004 | More complete beginner and school content exists. |
| GRO-002 | Expand high school content. | P1 | Not Started | CON-006 | Algebra, geometry, trigonometry, and statistics content grows. |
| GRO-003 | Expand undergraduate content. | P1 | Not Started | CUR-013 | Calculus, linear algebra, probability, and discrete math sections grow. |
| GRO-004 | Expand graduate content. | P2 | Not Started | CUR-014 | Advanced mathematics content grows carefully. |
| GRO-005 | Expand applied and research content. | P2 | Not Started | CUR-015 | Applied mathematics and research pages grow. |
| GRO-006 | Expand NASA-relevant mathematics content. | P2 | Not Started | CUR-017 | Aerospace and mission-analysis math pages grow. |
| GRO-007 | Add printable worksheets. | P2 | Not Started | PRA-013 | Learners can print high-quality practice sheets. |
| GRO-008 | Add progress tracking without accounts. | P2 | Not Started | PRA-006 | Optional local progress works in browser storage. |
| GRO-009 | Evaluate account-based features. | P3 | Not Started | GRO-008 | Decision document exists before adding backend complexity. |
| GRO-010 | Evaluate premium products only after free platform succeeds. | P3 | Not Started | ADS-015 | Revenue expansion does not weaken free learning mission. |

## 17. Current Next Action

The next action is to resolve `ENV-001` and `ENV-002` so the local scaffold can be installed and built. GitHub setup is complete for the initial repository push.

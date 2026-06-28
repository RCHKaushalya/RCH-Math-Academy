# Technical Architecture

Document Status: Draft  
Prepared On: 2026-06-28  
Project: Math Tutor Web Application

## 1. Architecture Overview

The recommended architecture is a static-first web application. Lessons, exercises, and metadata will be stored in the Git repository and published as static pages during deployment.

This architecture is appropriate because the project needs:

- Low hosting cost.
- High speed.
- Search engine visibility.
- Simple deployment.
- Low security risk.
- Easy content editing through Git.

The application must support multiple learning templates. A nursery learner should not see the same page type as a PhD-level learner.

## 2. Recommended Technology Stack

| Layer | Recommendation | Reason |
| --- | --- | --- |
| MVP framework | Dependency-free static HTML, CSS, and JavaScript | Runs immediately while local npm install is blocked. |
| Future framework | Next.js with static generation | Modern React framework with strong SEO support when tooling is healthy. |
| Future language | TypeScript | Safer code and better maintainability. |
| MVP styling | Plain CSS with documented design tokens | No build step required. |
| Future styling | Tailwind CSS | Fast responsive UI development after package installation is reliable. |
| Content | MDX | Allows lessons to combine Markdown and interactive components. |
| Math rendering | KaTeX or MathJax | Displays equations cleanly in the browser. |
| Icons | Lucide React | Lightweight modern icon system. |
| Testing | Vitest and Playwright | Unit tests and browser checks. |
| Hosting | Cloudflare Pages or Netlify | Free deployment options for static sites. |
| Version control | Git and GitHub | Collaboration, history, and deployment integration. |

## 3. System Components

### 3.1 Web Application

The web application provides:

- Public pages.
- Lesson rendering.
- Topic navigation.
- Practice question interaction.
- SEO metadata.
- Ad placement containers after approval.

### 3.2 Content System

Content should be stored in repository files such as:

- `content/lessons`
- `content/topics`
- `content/questions`

Each lesson should include metadata:

- Title.
- Description.
- Level.
- Topic.
- Estimated reading time.
- Prerequisites.
- Related lessons.

### 3.3 Practice Engine

The MVP practice engine can run fully in the browser.

Supported question types:

- Multiple choice.
- Numeric input.
- True or false.
- Step reveal.

Future question types:

- Graph interpretation.
- Drag-and-drop matching.
- Generated arithmetic drills.
- Timed practice sets.

### 3.5 Learning Templates

The application should support these templates:

| Template | Audience | Purpose |
| --- | --- | --- |
| `EarlyLearningActivityTemplate` | Nursery and pre-reading learners | Audio-first, picture-based, touch-friendly activities. |
| `GuidedLessonTemplate` | Primary and middle school learners | Short explanations, visuals, and frequent practice. |
| `StandardLessonTemplate` | High school and college readiness learners | Structured written lessons with examples and practice. |
| `AdvancedLessonTemplate` | Undergraduate, graduate, and research learners | Formal definitions, notation, proofs, derivations, and applications. |

The template should be selected by lesson metadata rather than hard-coded by route.

### 3.4 Search

Initial search can be implemented as:

- Static topic index.
- Client-side search over lesson metadata.

Future search can use:

- Pagefind.
- Algolia free tier, if needed.

## 4. Proposed Folder Structure

```text
math-tutor/
  docs/
  content/
    lessons/
    topics/
    questions/
  public/
    images/
  src/
    app/
    components/
    lib/
    styles/
  tests/
  package.json
  README.md
```

## 5. Data Model

### 5.1 Lesson Metadata

```ts
type Lesson = {
  slug: string;
  title: string;
  description: string;
  level: string;
  topic: string;
  prerequisites: string[];
  relatedLessons: string[];
  template: "early-activity" | "guided-lesson" | "standard-lesson" | "advanced-lesson";
  readingLevel: "none" | "early" | "independent" | "advanced" | "expert";
  childDirected: boolean;
  allowAds: boolean;
  published: boolean;
};
```

### 5.2 Practice Question

```ts
type PracticeQuestion = {
  id: string;
  lessonSlug: string;
  type: "multiple-choice" | "numeric" | "true-false";
  prompt: string;
  choices?: string[];
  answer: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
};
```

### 5.3 Early Learning Activity

```ts
type EarlyLearningActivity = {
  id: string;
  title: string;
  level: "L00" | "L01";
  promptText: string;
  promptAudio?: string;
  visualPrompt: string;
  interaction: "tap" | "drag" | "match" | "count";
  choices: Array<{
    id: string;
    label?: string;
    imageAlt: string;
    imageSrc?: string;
    correct: boolean;
  }>;
  caregiverNote: string;
  childDirected: true;
  allowAds: false;
};
```

## 6. SEO Architecture

Each public lesson page should include:

- Unique title.
- Meta description.
- Canonical URL.
- Open Graph metadata.
- Structured headings.
- Internal links.
- Human-readable URL slug.

Example URL pattern:

```text
/lessons/fractions/adding-fractions
/practice/algebra/linear-equations
/topics/geometry
```

## 7. Security Architecture

The MVP should avoid collecting sensitive user data. Without accounts or payment handling, the security surface remains small.

Security requirements:

- Do not store secrets in the repository.
- Use environment variables for future private keys.
- Keep dependencies updated.
- Use HTTPS through the hosting provider.
- Use safe ad placement after AdSense approval.
- Avoid collecting personal information from children in early learning sections.
- Keep nursery activity screens ad-free.

## 8. Future Backend Options

A backend is not required for MVP. If the project later needs accounts, progress tracking, or saved quiz results, use a free-tier backend.

Possible future options:

- Supabase for authentication and PostgreSQL.
- Cloudflare D1 for lightweight data storage.
- Firebase for authentication and analytics-style events.

Backend work should be added only when the product need is clear.

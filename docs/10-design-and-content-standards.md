# Design and Content Standards

Document Status: Draft  
Prepared On: 2026-06-28  
Project: Math Tutor Web Application

## 1. Purpose

This document defines the visual design and content quality standards for the Math Tutor platform. The site should feel modern, elegant, calm, trustworthy, and easy to learn from.

The required visual direction is a sky-blue elegant light theme.

## 2. Design Principles

- Learning comes before decoration.
- Pages should be calm and readable.
- The interface should feel modern, not childish, even when teaching beginner content.
- Navigation should be predictable.
- Practice controls should be clear and stable.
- Math content should have enough white space to read comfortably.
- Ads, when added later, must never confuse learners or interrupt core reasoning.
- Nursery learners must not be forced into text-heavy pages.

## 3. Color System

Recommended palette:

| Token | Color | Usage |
| --- | --- | --- |
| `sky-50` | `#f0f9ff` | Page background accents. |
| `sky-100` | `#e0f2fe` | Soft panels and selected states. |
| `sky-500` | `#0ea5e9` | Primary actions and active navigation. |
| `sky-600` | `#0284c7` | Primary hover states. |
| `sky-800` | `#075985` | Strong headings or active text. |
| `slate-950` | `#020617` | Main text. |
| `slate-700` | `#334155` | Secondary text. |
| `slate-200` | `#e2e8f0` | Borders. |
| `white` | `#ffffff` | Main content background. |
| `emerald-500` | `#10b981` | Correct answer feedback. |
| `rose-500` | `#f43f5e` | Incorrect answer feedback. |
| `amber-500` | `#f59e0b` | Warnings and hints. |

The theme should use sky blue as the main identity color while retaining neutral slate text and small functional accents for success, warning, and error states.

## 4. Typography

Recommended typography requirements:

- Use a highly readable sans-serif font for general text.
- Use a suitable math rendering library for equations.
- Keep body text comfortable on mobile.
- Use strong but restrained headings.
- Do not use oversized hero text inside lesson pages.
- Do not scale font size directly with viewport width.
- Keep letter spacing at `0`.

## 5. Layout Standards

The site should use:

- A clean header.
- Level and topic navigation.
- A centered readable lesson column.
- Supporting side navigation on wider screens.
- Stable practice panels.
- Clear footer links.

Lesson pages should prioritize:

- Title.
- Learning objective.
- Explanation.
- Examples.
- Practice.
- Summary.
- Related lessons.

## 6. Component Standards

Required components:

- Header navigation.
- Mobile navigation.
- Footer.
- Topic card.
- Level card.
- Lesson table of contents.
- Lesson content block.
- Worked example block.
- Mistake warning block.
- Practice question block.
- Answer feedback block.
- Solution reveal block.
- Related lesson list.
- Search input.
- Breadcrumbs.
- Audio prompt button for early learning activities.
- Large picture answer card for nursery activities.
- Caregiver note panel for early learning activities.

Button requirements:

- Primary actions use sky blue.
- Destructive actions use rose only when required.
- Icon buttons should use recognizable icons.
- Buttons must have visible focus states.
- Button text must not overflow.

## 7. Math Content Presentation

Math should be presented with:

- Clean notation.
- Step-by-step transformations.
- Short explanations beside each major step.
- Visual diagrams where useful.
- Definitions before formal use.
- Examples before difficult abstraction for beginner levels.
- Proofs and formal assumptions for advanced levels.

## 8. Content Quality Standard

Every lesson must be:

- Original.
- Mathematically correct.
- Written for a specific learner level.
- Search-friendly without keyword stuffing.
- Structured with clear headings.
- Supported by examples.
- Supported by practice.
- Reviewed before publication.

Every page must use the correct teaching voice for its target level. A nursery activity should be visual and audio-first. A PhD-level page should be precise, formal, and intellectually serious.

Every lesson should include:

- Learning objective.
- Prerequisites.
- Plain-language explanation.
- Formal rule or notation.
- At least two worked examples.
- Common mistakes.
- At least five practice questions.
- Answer explanations.
- Summary.
- Related lessons.

## 9. Advanced Content Standard

Advanced lessons for undergraduate, graduate, PhD, or research users should include:

- Prerequisite chain.
- Formal definitions.
- Theorems where relevant.
- Proof sketches or full proofs where appropriate.
- Computational examples when useful.
- Applications in science, engineering, computing, or research.
- References to standard terminology.

Advanced content must not pretend to be complete if it is only an introduction. It should clearly state its scope.

## 10. Accessibility Standard

The site must support:

- Keyboard navigation.
- Visible focus states.
- Good color contrast.
- Descriptive link text.
- Proper heading hierarchy.
- Text alternatives for diagrams.
- Responsive layouts on mobile and desktop.

## 11. Ad-Safe Design Rule

When AdSense is added later:

- Ads must be visually separate from quiz controls.
- Ads must not be labelled in misleading ways.
- Ads must not be placed inside worked solution steps.
- Ads must not cause layout shift.
- Ads must not appear before the learner receives useful content.
- Ads must not appear inside nursery activities.
- Child-directed sections must use separate monetization rules from general-audience sections.

## 12. Quality Review Checklist

Before publishing a page, verify:

- The lesson is original.
- The math is correct.
- The level is clear.
- The explanation is readable.
- Examples are correct.
- Practice answers are correct.
- The page works on mobile.
- The page has SEO metadata.
- Links work.
- The page matches the sky-blue light theme.

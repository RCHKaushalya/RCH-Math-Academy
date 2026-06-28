# Learning Experience and Pedagogy

Document Status: Draft  
Prepared On: 2026-06-28  
Project: Math Tutor Web Application

## 1. Purpose

This document defines how the platform should teach different learner levels. The site cannot use one voice for everyone. Nursery learners, school learners, university learners, and research users need different language, interaction patterns, examples, and content depth.

The most important early correction is this: nursery learners may not be able to read. The nursery experience must not depend on reading.

## 2. Core Pedagogy Rule

Each level must define:

- Reading expectation.
- Teaching voice.
- Interaction model.
- Visual support.
- Practice style.
- Feedback style.
- Parent, teacher, or self-learner support.
- Ad and privacy treatment.

## 3. Level-Specific Teaching Voice

| Level | Reading Assumption | Teaching Voice | Primary Interaction |
| --- | --- | --- | --- |
| L00 Nursery and early numeracy | No independent reading. | Very short spoken prompts, friendly and concrete. | Tap, drag, match, listen, choose pictures. |
| L01 Primary foundations | Early reading with support. | Short sentences, examples from everyday life. | Read-aloud, pictures, simple answers. |
| L02 Upper primary | Basic reading. | Clear and encouraging, with step-by-step wording. | Guided practice and visual examples. |
| L03 Middle school | Independent reading. | Direct explanations with vocabulary support. | Worked examples and mixed practice. |
| L04 High school foundations | Independent reading and symbolic reasoning. | Precise but approachable. | Algebraic steps, graphs, and problem solving. |
| L05 Advanced high school and exam prep | Strong reading. | Efficient, exam-aware, strategy-focused. | Timed practice, error analysis, and review paths. |
| L06 College readiness | Strong reading. | Bridge from school math to formal math. | Notation support, concept checks, and proof readiness. |
| L07 Undergraduate core | Mature reading. | Formal explanations with intuition first. | Definitions, examples, proofs, and applications. |
| L08 Advanced undergraduate | Formal reading. | Precise mathematical language. | Proofs, derivations, and problem sets. |
| L09 Graduate foundations | Formal and abstract reading. | Dense but structured. | Theorems, proofs, references, and advanced exercises. |
| L10 Research and specialist mathematics | Expert reading. | Professional and research-oriented. | Models, assumptions, derivations, algorithms, and specialist applications. |

## 4. Nursery Learning Approach

Nursery learners should use a separate early learning experience, not a normal lesson page.

Required approach:

- Audio-first prompts.
- Large visual cards.
- Large touch targets.
- Minimal text.
- Simple repeated patterns.
- Picture-based answers.
- Immediate feedback through color, sound, and motion.
- Parent or teacher helper text available separately.
- No long scrolling lesson pages.
- No account requirement.
- No personal data collection.

Example activity types:

- Tap the number that matches the sound.
- Count the objects shown on screen.
- Match a shape to its outline.
- Pick the group with more objects.
- Drag numbers into order.
- Complete a color or shape pattern.
- Listen and tap the correct answer.

The nursery section should behave more like a guided learning game than an article.

## 5. Nursery Page Structure

Nursery pages should include:

- A large start button.
- A speaker button for replaying instructions.
- One task per screen.
- One clear success state.
- One simple retry state.
- Optional caregiver note.
- Exit button back to the level home.

Nursery pages should avoid:

- Paragraphs as the main instruction.
- Tiny buttons.
- Dense navigation.
- Ads inside the activity.
- Complex scoreboards.
- Open text input.
- Public comments or chat.

## 6. Audio Strategy

The MVP can use browser speech capabilities only if they are reliable enough for the target browser. If browser speech is inconsistent, the product should use short recorded audio files or keep the feature behind a graceful fallback.

Audio rules:

- Every nursery prompt should be playable.
- Audio should never be the only signal; visuals must also show the task.
- A parent or teacher should be able to mute audio.
- Audio controls must be large and obvious.
- Spoken prompts should be short.

Example nursery prompt:

```text
Tap three stars.
```

Not suitable for nursery:

```text
Select the set whose cardinality corresponds to the numeral three.
```

## 7. School Learner Approach

School learners should receive normal lesson pages, but the voice must still match the level.

Primary learners need:

- Short sentences.
- Many visuals.
- Everyday examples.
- Practice after each small idea.

Middle school learners need:

- Vocabulary support.
- Step-by-step examples.
- Common mistake explanations.
- Visual and symbolic connections.

High school learners need:

- Formal notation.
- Exam-style examples.
- Graphs and diagrams.
- Multi-step problem solving.
- Review paths for weak prerequisites.

## 8. Advanced Learner Approach

Advanced learners should not receive simplified nursery-style explanations. They need precision and intellectual respect.

Undergraduate and higher pages should include:

- Prerequisites.
- Definitions.
- Theorems or propositions where relevant.
- Proofs or proof sketches.
- Worked examples.
- Problem sets.
- Applications.
- Computational notes when useful.
- References to standard terminology.

Research-oriented pages should include:

- Problem context.
- Assumptions.
- Mathematical model.
- Derivation.
- Numerical or algorithmic approach.
- Failure modes.
- Specialist applications.

## 9. Mixed-Audience Navigation

The platform should avoid forcing all learners through the same interface.

Recommended navigation:

- A "Start by level" entry path.
- Separate early learning mode for nursery and primary learners.
- Topic search for independent learners.
- Advanced topic index for university and research users.
- Clear labels for level and prerequisites.

## 10. Child-Safe Product Rules

Because the site includes nursery and young-child content, the early learning section must be built conservatively.

Rules:

- Do not require child accounts in the MVP.
- Do not ask children for names, email addresses, location, photos, voice recordings, or school information.
- Do not include public comments or chat in child sections.
- Do not use personalized ads in child-directed sections.
- Do not place ads inside nursery activities.
- Review COPPA and equivalent child privacy requirements before monetizing child-directed pages.
- If AdSense is later used on child-directed sections, use Google age-restricted treatment requirements and confirm the current policy first.

## 11. AdSense Implication

The AdSense plan must treat early-childhood pages differently from general math pages.

Recommended rule:

- No ads on nursery activity screens.
- No personalized advertising for child-directed sections.
- AdSense readiness must include child privacy and age-treatment review.
- General-audience advanced pages may have normal ad placement only after AdSense approval and policy review.

## 12. Implementation Implications

The application should eventually support different page templates:

- `EarlyLearningActivityTemplate` for nursery and pre-reading learners.
- `GuidedLessonTemplate` for primary and middle school learners.
- `StandardLessonTemplate` for high school and college learners.
- `AdvancedLessonTemplate` for undergraduate, graduate, and research-level learners.

Each content item should include metadata:

```ts
type PedagogyProfile = {
  level: "L00" | "L01" | "L02" | "L03" | "L04" | "L05" | "L06" | "L07" | "L08" | "L09" | "L10";
  readingLevel: "none" | "early" | "independent" | "advanced" | "expert";
  voice: "audio-first" | "guided" | "standard" | "formal" | "research";
  requiresAudio: boolean;
  requiresVisuals: boolean;
  allowAds: boolean;
  childDirected: boolean;
};
```

## 13. References

- FTC COPPA compliance plan: https://www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-six-step-compliance-plan-your-business
- Google AdSense age restricted treatment: https://support.google.com/adsense/answer/3248194
- Google AdSense Program policies: https://support.google.com/adsense/answer/48182


import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Volume2
} from "lucide-react";
import {
  learnerLevels,
  nurseryActivity,
  pedagogyModes,
  topicGroups
} from "@/lib/curriculum";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-950">
      <header className="border-b border-sky-100 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-3" href="/">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sky-500 text-lg font-bold text-white">
              M
            </span>
            <span>
              <span className="block text-lg font-bold">Math Tutor</span>
              <span className="block text-xs text-slate-600">Free math learning path</span>
            </span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#levels">Levels</a>
            <a href="#early">Nursery</a>
            <a href="#topics">Topics</a>
            <a href="#quality">Quality</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-md border border-sky-200 bg-white px-3 py-2 text-sm font-semibold text-sky-800">
            <BookOpen aria-hidden="true" className="h-4 w-4" />
            Math tutoring first. Ads later.
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Choose a math level and learn in the right voice.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Nursery learners need pictures and sound. School learners need clear steps.
            Advanced learners need definitions, proofs, and models. This platform is being
            built around those differences from the beginning.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
              href="#levels"
            >
              Browse Levels
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-sky-200 bg-white px-5 py-3 text-sm font-bold text-sky-800 transition hover:border-sky-300 hover:bg-sky-100"
              href="#early"
            >
              Try Nursery Mode
            </a>
          </div>
        </div>

        <section
          aria-labelledby="early-preview-title"
          className="math-card-shadow rounded-lg border border-sky-100 bg-white p-5"
          id="early"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase text-sky-700">Pre-reading activity</p>
              <h2 className="mt-1 text-2xl font-bold" id="early-preview-title">
                {nurseryActivity.title}
              </h2>
            </div>
            <button
              aria-label="Play activity instruction"
              className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-100 text-sky-800 transition hover:bg-sky-200"
              type="button"
            >
              <Volume2 aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <p className="rounded-md bg-sky-50 p-4 text-lg font-semibold text-slate-800">
            {nurseryActivity.prompt}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {nurseryActivity.choices.map((choice) => (
              <button
                className="min-h-32 rounded-lg border border-sky-200 bg-white p-3 text-center transition hover:border-sky-500 hover:bg-sky-50"
                key={choice.id}
                type="button"
              >
                <span className="block text-3xl font-bold text-sky-800">{choice.label}</span>
                <span aria-hidden="true" className="mt-2 block text-2xl tracking-normal text-amber-500">
                  {choice.marks.join(" ")}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-5 rounded-md border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700">
            <strong className="text-slate-900">Caregiver note:</strong>{" "}
            {nurseryActivity.caregiverNote}
          </p>
        </section>
      </section>

      <section className="bg-white py-10" id="levels">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-sky-700">Learning levels</p>
            <h2 className="mt-2 text-3xl font-bold">Different levels, different teaching styles.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {learnerLevels.map((level) => {
              const Icon = level.icon;
              return (
                <article className="rounded-lg border border-slate-200 bg-white p-5" key={level.code}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-sky-100 text-sky-800">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase text-sky-700">{level.code}</p>
                      <h3 className="mt-1 text-xl font-bold">{level.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-700">{level.audience}</p>
                  <p className="mt-2 text-sm text-slate-600">{level.summary}</p>
                  <p className="mt-4 rounded-md bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800">
                    {level.mode}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10" id="topics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase text-sky-700">Topic map</p>
              <h2 className="mt-2 text-3xl font-bold">A curriculum that can grow carefully.</h2>
              <p className="mt-4 text-slate-700">
                The first release should be small and excellent. The long-term structure can
                still support everything from counting to aerospace mathematics.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {topicGroups.map((topic) => {
                const Icon = topic.icon;
                return (
                  <article className="rounded-lg border border-sky-100 bg-white p-5" key={topic.title}>
                    <Icon aria-hidden="true" className="h-6 w-6 text-sky-700" />
                    <h3 className="mt-3 text-lg font-bold">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>
                    <p className="mt-4 text-xs font-bold uppercase text-sky-700">{topic.level}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-900 py-10 text-white" id="quality">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-sky-200">Quality rules</p>
            <h2 className="mt-2 text-3xl font-bold">The site should be useful before it earns.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {pedagogyModes.map((mode) => (
              <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4" key={mode}>
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-emerald-300" />
                <span className="font-semibold">{mode}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4 sm:col-span-2">
              <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-sky-200" />
              <span className="font-semibold">
                Nursery activity screens stay child-safe and ad-free.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


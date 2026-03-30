"use client";

import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowDown,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Code2,
  Trophy,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import type { HomeContent } from "@/data/portfolio";

function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  const from = {
    up:    { opacity: 0, y: 36, scale: 0.97 },
    left:  { opacity: 0, x: -36, scale: 0.97 },
    right: { opacity: 0, x: 36, scale: 0.97 },
    none:  { opacity: 0, y: 0, scale: 1 },
  } as const;

  return (
    <motion.div
      ref={ref}
      initial={from[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const catStyle: Record<string, { pill: string; label: string; dot: string }> = {
  Frontend:         { pill: "bg-blue-50 text-blue-700 border border-blue-200",      label: "text-blue-600",   dot: "bg-blue-400"   },
  Backend:          { pill: "bg-emerald-50 text-emerald-700 border border-emerald-200", label: "text-emerald-600", dot: "bg-emerald-400" },
  Database:         { pill: "bg-violet-50 text-violet-700 border border-violet-200", label: "text-violet-600", dot: "bg-violet-400" },
  "Cloud & DevOps": { pill: "bg-orange-50 text-orange-700 border border-orange-200", label: "text-orange-600", dot: "bg-orange-400" },
  Languages:        { pill: "bg-rose-50 text-rose-700 border border-rose-200",       label: "text-rose-600",   dot: "bg-rose-400"   },
  Tools:            { pill: "bg-slate-100 text-slate-600 border border-slate-200",   label: "text-slate-500",  dot: "bg-slate-400"  },
};
function cs(cat: string) {
  return catStyle[cat] ?? { pill: "bg-gray-100 text-gray-600 border border-gray-200", label: "text-gray-500", dot: "bg-gray-400" };
}

function Section({
  id, children, bg = "bg-white", className = "",
}: {
  id?: string; children: React.ReactNode; bg?: string; className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-16 ${bg}`}>
      <div className={`mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 ${className}`}>
        {children}
      </div>
    </section>
  );
}

export function HomePageClient({
  content,
  year,
}: {
  content: HomeContent;
  year: number;
}) {
  const { profile, stats, skills, experiences, projects, education, awards } = content;
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const rawY       = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const rawBgY     = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const heroY      = useSpring(rawY,       { stiffness: 60, damping: 20 });
  const heroOp     = useSpring(rawOpacity, { stiffness: 60, damping: 20 });
  const bgY        = useSpring(rawBgY,     { stiffness: 40, damping: 18 });

  return (
    <MotionConfig reducedMotion="user">
      <section ref={heroRef} className="relative overflow-hidden bg-white">

        <motion.div
          style={prefersReducedMotion ? undefined : { y: bgY }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <div className="dot-grid absolute inset-0 opacity-[0.18]" />
          <div
            className="animate-blob-drift absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full opacity-[0.18]"
            style={{ background: "radial-gradient(circle, #3B82F6 0%, #6366F1 40%, transparent 70%)" }}
          />
          <div
            className="animate-blob-drift-2 absolute -bottom-48 -left-32 h-[600px] w-[600px] rounded-full opacity-[0.12]"
            style={{ background: "radial-gradient(circle, #818CF8 0%, #3B82F6 50%, transparent 72%)" }}
          />
          <div
            className="animate-blob-drift-3 absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #38BDF8 0%, transparent 65%)" }}
          />
          <div className="animate-spin-slow absolute right-24 top-24 h-64 w-64 rounded-full border border-blue-200/50 opacity-30" />
          <div className="animate-spin-slow absolute right-24 top-24 h-40 w-40 rounded-full border border-indigo-200/60 opacity-25 [animation-direction:reverse]" />
        </motion.div>

        <motion.div
          style={prefersReducedMotion ? undefined : { y: heroY, opacity: heroOp }}
          className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Available for new opportunities
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 font-mono text-sm text-gray-500">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mb-4 font-mono text-base text-gray-400"
            >
              Hi, I&apos;m 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-extrabold leading-[1.02] tracking-tight text-gray-900 sm:text-7xl lg:text-8xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-2xl font-bold text-blue-500 sm:text-3xl lg:text-4xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 max-w-xl text-xl leading-relaxed text-gray-500 sm:text-xl"
            >
              {profile.tagline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.54 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 hover:shadow-xl"
            >
              View projects
              <ArrowDown className="h-4.5 w-4.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:border-blue-300 hover:shadow-md hover:text-blue-600"
            >
              <Mail className="h-4.5 w-4.5" />
              Hire me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-blue-300 hover:shadow-md hover:text-blue-600"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-blue-300 hover:shadow-md hover:text-blue-600"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
            className="mt-16 grid w-fit grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 shadow-sm sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center bg-white px-7 py-5 text-center sm:px-10"
              >
                <span className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{s.value}</span>
                <span className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center gap-1.5 text-gray-400 transition-colors hover:text-blue-500">
              <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
              <ChevronDown className="h-5 w-5 animate-scroll-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Section id="about" bg="bg-gray-50">
        <FadeIn className="mb-4 section-label">01 — About</FadeIn>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <FadeIn>
              <h2 className="section-heading">
                Engineer focused on{" "}
                <span className="text-blue-500">impact</span>
              </h2>
            </FadeIn>
            <div className="mt-7 space-y-5">
              {profile.about.map((p, i) => (
                <FadeIn key={i} delay={0.07 * (i + 1)}>
                  <p className="body-lg">{p}</p>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.22} className="mt-10">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-gray-400">
                Areas of focus
              </h3>
              <ul className="space-y-3">
                {profile.focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base text-gray-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="space-y-5">
            <FadeIn direction="right" delay={0.1}>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-3 text-base font-semibold text-gray-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                    <GraduationCap className="h-4.5 w-4.5 text-blue-500" />
                  </span>
                  Education
                </div>
                <div className="space-y-5">
                  {education.map((e) => (
                    <div key={e.degree} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <p className="font-bold text-gray-900">{e.degree}</p>
                      <p className="mt-1 text-base text-gray-500">{e.institution}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm text-gray-400">{e.period}</span>
                        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-sm font-bold text-blue-600">
                          {e.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-3 text-base font-semibold text-gray-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                    <Trophy className="h-4.5 w-4.5 text-blue-500" />
                  </span>
                  Awards & Activities
                </div>
                <ul className="space-y-3">
                  {awards.map((a) => (
                    <li key={a.text} className="flex items-start gap-3 text-base text-gray-600">
                      <span className="mt-0.5 shrink-0 text-lg">{a.icon}</span>
                      {a.text}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section id="skills" bg="bg-white">
        <FadeIn className="mb-4 section-label">02 — Skills</FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="section-heading">
            Tech stack &{" "}
            <span className="text-blue-500">tools</span>
          </h2>
          <p className="mt-4 max-w-xl text-xl text-gray-500">
            Technologies I reach for when building production-grade applications.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => {
            const style = cs(group.category);
            return (
              <FadeIn key={group.category} delay={gi * 0.06} direction="up">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="h-full rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className={`mb-5 flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest ${style.label}`}>
                    <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-lg px-3 py-1.5 text-sm font-medium ${style.pill}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section id="projects" bg="bg-gray-50">
        <FadeIn className="mb-4 section-label">03 — Projects</FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="section-heading">
            Selected{" "}
            <span className="text-blue-500">work</span>
          </h2>
          <p className="mt-4 max-w-xl text-xl text-gray-500">
            Production-focused projects — built to scale, ship, and make an impact.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08} direction="up">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:border-blue-100 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                  {p.featured && (
                    <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-gray-500">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-gray-100 px-2.5 py-1 font-mono text-sm text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {(p.github || p.live) && (
                  <div className="mt-6 flex gap-5 text-sm font-semibold">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-600 transition-colors hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-gray-500 transition-colors hover:text-gray-900"
                      >
                        <Github className="h-4 w-4" />
                        Source code
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="experience" bg="bg-white">
        <FadeIn className="mb-4 section-label">04 — Experience</FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="section-heading">
            Where I&apos;ve{" "}
            <span className="text-blue-500">built</span>
          </h2>
        </FadeIn>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          className="mt-14 space-y-6"
        >
          {experiences.map((ex) => (
            <motion.div key={ex.id} variants={staggerItem}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-7 sm:p-9 transition-all hover:border-blue-100 hover:shadow-lg">
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-blue-400 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />

                {ex.current && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-green-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    Current
                  </span>
                )}

                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">{ex.company}</h3>
                    <span className="text-base text-gray-400">{ex.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 text-base font-bold text-blue-600">
                      <Briefcase className="h-4 w-4" />
                      {ex.role}
                    </span>
                    <span className="font-mono text-sm text-gray-400">{ex.period}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {ex.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-base leading-relaxed text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="contact" bg="bg-gray-50">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn className="mb-4 section-label flex justify-center">05 — Contact</FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="section-heading">
              Let&apos;s work{" "}
              <span className="text-blue-500">together</span>
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-gray-500">
              Open to full-time roles, contract work, and interesting collaborations.
              Drop me a message and I&apos;ll reply within 24 hours.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              {profile.email}
            </a>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                { href: profile.github,   icon: Github,   label: "GitHub"   },
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.leetcode, icon: Terminal, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-5 py-3 text-base font-medium text-gray-600 transition-all hover:border-blue-300 hover:shadow-md hover:text-blue-600"
                >
                  <Icon className="h-4.5 w-4.5" />
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <p className="mt-7 flex items-center justify-center gap-2 text-base text-gray-400">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </p>
          </FadeIn>
        </div>
      </Section>

      <footer className="border-t border-gray-100 bg-white py-8 text-center">
        <p className="font-mono text-sm text-gray-400">
          Built by{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-500 hover:underline"
          >
            {profile.name}
          </a>{" "}
          · {year}
        </p>
      </footer>
    </MotionConfig>
  );
}

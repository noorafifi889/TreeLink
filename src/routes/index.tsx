import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Twitter,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نور العفيفي — Full-Stack Developer | كل روابطي" },
      {
        name: "description",
        content:
          "صفحة روابط نور العفيفي: مطوّرة برمجيات Full-Stack، معرض أعمال، منصات العمل الحر، والسيرة الذاتية.",
      },
      { property: "og:title", content: "نور العفيفي — Full-Stack Developer" },
      {
        property: "og:description",
        content: "معرض الأعمال، منصات العمل الحر، والتواصل المباشر في مكان واحد.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LinkInBio,
});

const platforms = [
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01bfed2b157461cbb6",
    icon: Globe,
  },
  { label: "مستقل", href: "https://mostaql.com/u/noor_afifi", icon: Briefcase },
  { label: "خمسات", href: "https://khamsat.com/user/noor_afifi", icon: Sparkles },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noor-al-afifi-168483399",
    icon: Linkedin,
  },
];

const moreProfiles = [
  { label: "بعيد — Baaeed", href: "https://baaeed.com/u/noor_afifi" },
  { label: "فرلانسو — Forlanso", href: "https://www.forlanso.com/ar/nor-alaafyfy" },
  { label: "Bright Gaza", href: "https://www.brightgaza.com/talents/353" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "X / Twitter", href: "https://x.com/", icon: Twitter },
  { label: "Email", href: "mailto:noor.afifi.dev@gmail.com", icon: Mail },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

function LinkInBio() {
  return (
    <main dir="rtl" className="relative min-h-screen overflow-hidden bg-background font-sans">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-glow), var(--gradient-glow-2)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-xl flex-col items-center px-5 py-14 sm:py-20"
      >
        {/* Hero */}
        <motion.div variants={fadeUp} className="relative">
          <div className="glow-ring rounded-full p-[3px]">
            <img
              src="/noor.webp"
              alt="نور العفيفي"
              className="size-28 rounded-full object-cover object-top sm:size-32"
            />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          نور العفيفي
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-2 text-sm font-medium text-primary sm:text-base">
          Full-Stack Software Developer &amp; UI Enthusiast
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground"
        >
          أبني تطبيقات ويب متكاملة من الواجهة حتى قواعد البيانات، وأحب دمج حلول الذكاء الاصطناعي في
          تجارب استخدام أنيقة وسريعة. شغفي: تفاصيل الواجهات، الأداء، والكود النظيف.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <MapPin className="size-3.5" />
          <span>فلسطين — متاحة للعمل عن بُعد</span>
        </motion.div>

        {/* Freelance platforms */}
        <motion.div variants={fadeUp} className="mt-10 w-full">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            منصات العمل الحر
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {platforms.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card group flex flex-col items-center gap-2 rounded-2xl px-3 py-4 transition-colors hover:border-primary/50"
              >
                <Icon className="size-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-xs font-medium text-foreground">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Main links */}
        <motion.div variants={fadeUp} className="mt-8 w-full space-y-3">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            الروابط الأساسية
          </h2>

          {/* spotlight */}
          <motion.a
            href="https://ai-outfit-recommendation-platform.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.99 }}
            className="glass-card glow-ring group relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4"
          >
            <span
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            />
            <span className="relative flex flex-col items-start">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sparkles className="size-4 text-primary" />
                منصة «ميرور مي» للأزياء بالذكاء الاصطناعي
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                أحدث مشروع — تجربة قياس افتراضية مدعومة بالـ AI
              </span>
            </span>
            <ArrowUpRight className="relative size-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>

          <LinkRow
            href="https://protoflio-dusky.vercel.app/"
            title="معرض الأعمال — Portfolio"
            subtitle="مشاريع مختارة وتفاصيل تقنية"
          />
          <LinkRow
            href="public/Noor_Al-Afifi_Resume_v3 (1).pdf"
            title="تحميل السيرة الذاتية (CV)"
            subtitle="نسخة PDF محدّثة"
            icon={Download}
          />
          {moreProfiles.map((p) => (
            <LinkRow key={p.label} href={p.href} title={p.label} subtitle="ملف تعريفي" />
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.08 }}
              className="glass-card flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon className="size-[18px]" />
            </motion.a>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="mt-10 text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} نور العفيفي — جميع الحقوق محفوظة
        </motion.p>
      </motion.div>
    </main>
  );
}

function LinkRow({
  href,
  title,
  subtitle,
  icon: Icon = ArrowUpRight,
}: {
  href: string;
  title: string;
  subtitle?: string;
  icon?: typeof ArrowUpRight;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      className="glass-card group flex items-center justify-between rounded-2xl px-5 py-4 transition-colors hover:border-primary/40"
    >
      <span className="flex flex-col items-start">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        {subtitle ? (
          <span className="mt-0.5 text-xs text-muted-foreground">{subtitle}</span>
        ) : null}
      </span>
      <Icon className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}

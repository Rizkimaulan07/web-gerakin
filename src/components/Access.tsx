import {
  ArrowUpRight,
  Check,
  Download,
  Globe2,
  LockKeyhole,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";
import { APP_LINKS, APK_AVAILABLE } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const WEB_FEATURES = [
  "Langsung dibuka di browser",
  "Masuk dengan akun email",
  "Rekam GPS, mode demo 10×, dan input manual",
  "Beranda, feed, riwayat, dan jelajah rute",
];

const APK_FEATURES = [
  "Aplikasi untuk perangkat Android",
  "Instal melalui file APK",
  "Tautan unduhan segera hadir",
];

export default function Access() {
  return (
    <section
      id="akses"
      aria-labelledby="akses-title"
      className="section-pad relative scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(182,242,64,0.055),transparent_66%)]"
      />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            label="Web App vs APK"
            align="center"
            title={
              <span id="akses-title">
                Mulai dari mana pun.
                <span className="text-lime"> Tetap satu akun.</span>
              </span>
            }
            description="Web App siap dicoba sekarang dengan akun email. APK hadir menyusul untuk pengalaman aplikasi di Android, dengan rencana akun yang sama."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1050px] gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal delay={40}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-lime p-6 text-ink shadow-[0_30px_100px_rgba(182,242,64,0.13)] sm:rounded-[2rem] sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <svg
                  viewBox="0 0 600 600"
                  className="absolute -right-40 -bottom-52 size-[480px] opacity-[0.11]"
                  fill="none"
                >
                  <circle cx="300" cy="300" r="220" stroke="#070a08" strokeWidth="1" strokeDasharray="6 8" />
                  <circle cx="300" cy="300" r="150" stroke="#070a08" strokeWidth="1" />
                  <circle cx="300" cy="300" r="80" stroke="#070a08" strokeWidth="1" />
                  <path d="M60 420C135 360 150 260 255 240C365 218 396 120 540 104" stroke="#070a08" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-ink/10 bg-ink text-lime">
                  <MonitorSmartphone className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/[0.06] px-3 py-1.5 text-[9px] font-extrabold tracking-[0.12em] text-ink uppercase">
                  <span className="live-dot size-1.5 rounded-full bg-ink text-ink" aria-hidden="true" />
                  Tersedia sekarang
                </span>
              </div>

              <div className="relative mt-8">
                <p className="text-[10px] font-extrabold tracking-[0.18em] text-ink/70 uppercase">01 akses</p>
                <h3 className="mt-2 font-display text-[2rem] leading-none font-semibold tracking-[-0.06em] sm:text-[2.5rem]">
                  Web App
                </h3>
                <p className="mt-3 max-w-sm text-[13px] leading-6 text-ink/65">
                  Buka langsung dari browser, masuk dengan akunmu, lalu mulai mencatat tanpa menunggu
                  instalasi.
                </p>
              </div>

              <ul className="relative mt-6 space-y-2.5">
                {WEB_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[12px] font-semibold text-ink/75">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-ink/10">
                      <Check className="size-2.5 text-ink" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 flex flex-1 items-end">
                <a
                  href={APP_LINKS.web}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-[13px] font-extrabold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#121a14] focus-visible:outline-ink"
                >
                  Buka Web App
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <p className="relative mt-3 flex items-center gap-1.5 text-[9px] font-semibold text-ink/65">
                <Globe2 className="size-3" aria-hidden="true" />
                Akses lewat browser favoritmu
              </p>
            </article>
          </Reveal>

          <Reveal delay={110}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[#0c120e] p-6 sm:rounded-[2rem] sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-36 -right-28 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,154,98,0.12),transparent_68%)]"
              />
              <div aria-hidden="true" className="bg-dots absolute inset-0 opacity-[0.12]" />

              <div className="relative flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-orange">
                  <Smartphone className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/20 bg-orange/10 px-3 py-1.5 text-[9px] font-extrabold tracking-[0.12em] text-orange uppercase">
                  <LockKeyhole className="size-2.5" aria-hidden="true" />
                  Segera hadir
                </span>
              </div>

              <div className="relative mt-8">
                <p className="text-[10px] font-extrabold tracking-[0.18em] text-fog/50 uppercase">02 akses</p>
                <h3 className="mt-2 font-display text-[2rem] leading-none font-semibold tracking-[-0.06em] text-cream sm:text-[2.5rem]">
                  APK Android
                </h3>
                <p className="mt-3 max-w-sm text-[13px] leading-6 text-fog">
                  Versi unduhan untuk dipasang di perangkat Android. Kami sedang menyiapkannya.
                </p>
              </div>

              <ul className="relative mt-6 space-y-2.5">
                {APK_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[12px] font-semibold text-cream/65">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-white/[0.06]">
                      <Download className="size-2.5 text-orange" strokeWidth={2.6} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 flex flex-1 items-end">
                {APK_AVAILABLE ? (
                  <a
                    href={APP_LINKS.apk}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-orange px-5 text-[13px] font-extrabold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad7c]"
                  >
                    Unduh APK
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 text-[13px] font-extrabold text-cream/35"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Unduh APK
                    <span className="rounded-full bg-orange/10 px-2 py-0.5 text-[8px] font-extrabold tracking-[0.08em] text-orange/80 uppercase">
                      Segera hadir
                    </span>
                  </button>
                )}
              </div>

              <p className="relative mt-3 flex items-center gap-1.5 text-[9px] font-semibold text-fog/50">
                <Download className="size-3" aria-hidden="true" />
                Unduhan akan tersedia setelah rilis
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <p className="mt-6 text-center text-[10px] font-semibold tracking-[0.06em] text-fog/80">
            Web app sudah terhubung ke akun dan database. APK direncanakan memakai akun yang sama saat
            tersedia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

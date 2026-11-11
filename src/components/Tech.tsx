import {
  Code2,
  Database,
  KeyRound,
  LockKeyhole,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FRONTEND_STACK = [
  "React 19",
  "TypeScript",
  "Vite",
  "Tailwind CSS 4",
  "Zustand",
  "React Router",
  "Leaflet",
  "Radix UI",
  "Recharts",
  "Sonner",
];

const DATA_ITEMS = ["Akun", "Aktivitas", "Kudos", "Komentar", "Klub", "Tantangan", "Profil"];

function StackChip({ children, accent = "#b6f240" }: { children: string; accent?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-bold text-cream/70"
    >
      <span className="size-1 rounded-full" style={{ backgroundColor: accent }} aria-hidden="true" />
      {children}
    </span>
  );
}

export default function Tech() {
  return (
    <section
      id="teknologi"
      aria-labelledby="teknologi-title"
      className="section-pad relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-[#080c09]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(82,199,184,0.055),transparent_66%)]"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              label="Teknologi"
              title={
                <span id="teknologi-title">
                  Di balik <span className="text-lime">Gerakin.</span>
                </span>
              }
              description="Stack modern untuk antarmuka yang cepat, peta rute yang interaktif, dan data aktivitas yang tetap rapi bersama akunmu."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
              <span className="grid size-9 place-items-center rounded-xl bg-lime/10 text-lime">
                <Code2 className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[9px] font-extrabold tracking-[0.14em] text-fog/90 uppercase">Stack aplikasi</p>
                <p className="mt-0.5 text-[11px] font-bold text-cream">04 layer · selaras</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3.5 lg:grid-cols-12 lg:gap-4">
          <Reveal delay={40} className="md:col-span-1 lg:col-span-7">
            <article className="surface-card-hover relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(182,242,64,0.12),transparent_70%)]"
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl border border-lime/20 bg-lime/[0.07] text-lime">
                    <Code2 className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[9px] font-extrabold tracking-[0.16em] text-fog/85 uppercase">Layer 01</p>
                    <h3 className="mt-0.5 font-display text-lg font-semibold tracking-[-0.035em] text-cream">
                      Frontend
                    </h3>
                  </div>
                </div>
                <span className="font-display text-[9px] font-medium tracking-[0.15em] text-fog/30">UI</span>
              </div>

              <p className="relative mt-4 max-w-lg text-[12px] leading-6 text-fog">
                Antarmuka, state, navigasi, peta rute, grafik, dan notifikasi dibangun dengan ekosistem React
                yang modern.
              </p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {FRONTEND_STACK.map((item) => (
                  <StackChip key={item} accent={item === "Leaflet" ? "#66b6ff" : "#b6f240"}>
                    {item}
                  </StackChip>
                ))}
              </div>

              <div className="relative mt-auto pt-6">
                <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#070c08]">
                  <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
                    <span className="size-1.5 rounded-full bg-rose/60" aria-hidden="true" />
                    <span className="size-1.5 rounded-full bg-orange/60" aria-hidden="true" />
                    <span className="size-1.5 rounded-full bg-lime/60" aria-hidden="true" />
                    <span className="ml-2 text-[8px] font-semibold text-fog/85">gerakin / tampilan aktivitas</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-3">
                    <span className="grid size-8 place-items-center rounded-lg border border-lime/15 bg-lime/[0.06] text-lime">
                      <Code2 className="size-3.5" aria-hidden="true" />
                    </span>
                    <div className="flex-1 space-y-1.5">
                      <span className="block h-1.5 w-[74%] rounded-full bg-white/[0.09]" />
                      <span className="block h-1.5 w-[46%] rounded-full bg-white/[0.06]" />
                    </div>
                    <span className="rounded-md border border-teal/15 bg-teal/[0.06] px-2 py-1 text-[7px] font-bold text-teal">
                      Leaflet
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={90} className="md:col-span-1 lg:col-span-5">
            <article className="surface-card-hover relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -right-16 -bottom-16 size-52 rounded-full bg-[radial-gradient(circle,rgba(82,199,184,0.1),transparent_70%)]"
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl border border-teal/20 bg-teal/[0.07] text-teal">
                    <Server className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[9px] font-extrabold tracking-[0.16em] text-fog/85 uppercase">Layer 02</p>
                    <h3 className="mt-0.5 font-display text-lg font-semibold tracking-[-0.035em] text-cream">
                      Backend & data
                    </h3>
                  </div>
                </div>
                <span className="font-display text-[9px] font-medium tracking-[0.15em] text-fog/80">API</span>
              </div>

              <p className="relative mt-4 text-[12px] leading-6 text-fog">
                Layanan API mengelola aktivitas dan interaksi sosial, dengan PostgreSQL sebagai database
                relasional.
              </p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                <StackChip accent="#52c7b8">Node.js</StackChip>
                <StackChip accent="#52c7b8">Express</StackChip>
                <StackChip accent="#66b6ff">PostgreSQL</StackChip>
              </div>

              <div className="relative mt-auto pt-6">
                <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#070c08] p-3">
                  {[
                    { label: "Express", color: "#52c7b8" },
                    { label: "PostgreSQL", color: "#66b6ff" },
                  ].map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[8px] font-bold"
                      style={{
                        borderColor: `${item.color}24`,
                        color: item.color,
                        backgroundColor: `${item.color}0b`,
                      }}
                    >
                      <span className="size-1 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                      {item.label}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-1 text-[8px] font-semibold text-fog/85">
                    <span className="live-dot size-1 rounded-full bg-teal text-teal" aria-hidden="true" />
                    terhubung
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={40} className="md:col-span-1 lg:col-span-4">
            <article className="surface-card-hover relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl border border-orange/20 bg-orange/[0.07] text-orange">
                    <LockKeyhole className="size-[17px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[9px] font-extrabold tracking-[0.16em] text-fog/85 uppercase">Layer 03</p>
                    <h3 className="mt-0.5 font-display text-lg font-semibold tracking-[-0.035em] text-cream">
                      Autentikasi
                    </h3>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[12px] leading-6 text-fog">
                Login email memakai kata sandi yang di-hash dan session cookie HttpOnly, sehingga data
                terhubung ke akun yang tepat.
              </p>
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 rounded-xl border border-orange/12 bg-orange/[0.035] p-3">
                  <KeyRound className="size-3.5 text-orange" aria-hidden="true" />
                  <span className="text-[9px] font-bold text-cream/70">Session cookie</span>
                  <ShieldCheck className="ml-auto size-3.5 text-lime" aria-hidden="true" />
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={90} className="md:col-span-1 lg:col-span-8">
            <article className="surface-card-hover relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 size-48 rounded-full bg-[radial-gradient(circle,rgba(102,182,255,0.09),transparent_70%)]"
              />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl border border-sky/20 bg-sky/[0.07] text-sky">
                    <Database className="size-[17px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[9px] font-extrabold tracking-[0.16em] text-fog/85 uppercase">Layer 04</p>
                    <h3 className="mt-0.5 font-display text-lg font-semibold tracking-[-0.035em] text-cream">
                      Data yang dikelola
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-sky/15 bg-sky/[0.05] px-2.5 py-1 text-[8px] font-bold text-sky">
                  <Database className="size-2.5" aria-hidden="true" />
                  PostgreSQL
                </span>
              </div>

              <p className="relative mt-4 max-w-xl text-[12px] leading-6 text-fog">
                Akun, aktivitas, kudos, komentar, klub, tantangan, dan profil disimpan dalam struktur data
                yang sama dan tersinkron dengan pengguna.
              </p>

              <div className="relative mt-5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                {DATA_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.07] bg-[#070c08]/70 px-2.5 py-2 text-[9px] font-semibold text-cream/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.018] px-4 py-3.5 text-[10px] leading-5 text-fog/85 sm:flex-row sm:items-center sm:gap-3">
            <span className="inline-flex items-center gap-2 font-bold text-cream/75">
              <Sparkles className="size-3.5 text-lime" aria-hidden="true" />
              Rapi di belakang layar.
            </span>
            <span>
              Stack ini mendukung halaman yang sedang kamu lihat sekaligus aplikasi Gerakin yang mencatat
              aktivitasmu.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import {
  ArrowUpRight,
  Compass,
  Database,
  Heart,
  History,
  MapPin,
  MessageCircle,
  Navigation,
  PenLine,
  Play,
  Target,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FeatureHeaderProps = {
  number: string;
  icon: LucideIcon;
  accent: string;
  title: string;
  children: ReactNode;
};

function FeatureHeader({ number, icon: Icon, accent, title, children }: FeatureHeaderProps) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <span
          className="grid size-11 shrink-0 place-items-center rounded-2xl border"
          style={{ color: accent, backgroundColor: `${accent}12`, borderColor: `${accent}26` }}
        >
          <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="font-display text-[10px] font-medium tracking-[0.16em] text-fog/35">{number}</span>
      </div>
      <h3 className="mt-5 font-display text-[1.15rem] leading-snug font-semibold tracking-[-0.035em] text-cream sm:text-[1.3rem]">
        {title}
      </h3>
      <p className="mt-2.5 text-[13px] leading-6 text-fog">{children}</p>
    </>
  );
}

function FeatureCard({
  children,
  className = "",
  accent,
  style,
}: {
  children: ReactNode;
  className?: string;
  accent: string;
  style?: React.CSSProperties;
}) {
  return (
    <article
      className={`surface-card-hover group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, ${accent}0d, transparent 44%)`,
        ...style,
      }}
    >
      {children}
    </article>
  );
}

function RouteThumb({ color = "#b6f240" }: { color?: string }) {
  return (
    <svg viewBox="0 0 54 38" className="h-9 w-12 shrink-0 rounded-lg bg-[#111912]" aria-hidden="true">
      <path
        d="M8 30C19 27 12 18 23 16C32 14 31 9 45 8"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="30" r="2.5" fill={color} />
      <circle cx="45" cy="8" r="2.5" fill={color} />
    </svg>
  );
}

function GpsVisual() {
  return (
    <div className="relative mt-6 min-h-[152px] flex-1 overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#101710]">
      <svg viewBox="0 0 500 190" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Ilustrasi peta dengan jalur rute GPS berwarna lime.">
        <defs>
          <linearGradient id="feature-map-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#111a12" />
            <stop offset="1" stopColor="#0c120d" />
          </linearGradient>
        </defs>
        <rect width="500" height="190" fill="url(#feature-map-fade)" />
        <path d="M-20 140C75 112 120 146 195 124C280 98 334 120 520 84V220H-20Z" fill="#142318" />
        <g fill="none" stroke="#263229" strokeLinecap="round">
          <path d="M-20 54C80 48 152 63 235 54C330 43 401 52 520 43" strokeWidth="6" />
          <path d="M-20 103C83 93 148 104 233 96C327 87 410 98 520 90" strokeWidth="4" />
          <path d="M-20 155C87 141 159 154 246 145C333 136 422 144 520 132" strokeWidth="5" />
          <path d="M92 -20C86 40 97 90 88 136C79 175 87 216 92 220" strokeWidth="4" />
          <path d="M274 -20C269 35 281 85 272 128C264 174 272 198 268 220" strokeWidth="3" />
          <path d="M408 -20C401 44 415 86 404 132C394 177 403 203 398 220" strokeWidth="4" />
        </g>
        <path
          d="M56 166C85 150 70 126 111 115C154 104 153 77 196 72C240 66 258 47 305 51C344 54 365 35 430 30"
          fill="none"
          stroke="#b6f240"
          strokeWidth="3.5"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 7px rgba(182,242,64,0.45))" }}
        />
        <circle cx="56" cy="166" r="6" fill="#0c120d" stroke="#ff9a62" strokeWidth="2.5" />
        <circle cx="196" cy="72" r="4" fill="#0c120d" stroke="#b6f240" strokeWidth="2" />
        <circle cx="430" cy="30" r="6" fill="#b6f240" stroke="#0c120d" strokeWidth="2.5" />
        <g fill="#5c695f" fontFamily="Manrope, sans-serif" fontSize="6.5" letterSpacing="0.8">
          <text x="115" y="30">RUTE UTAMA</text>
          <text x="330" y="116">JALUR KOTA</text>
        </g>
      </svg>
      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#071009]/80 px-2.5 py-1.5 text-[8px] font-extrabold tracking-[0.1em] text-cream uppercase backdrop-blur-md">
        <span className="live-dot size-1.5 rounded-full bg-lime text-lime" aria-hidden="true" />
        GPS aktif
      </span>
      <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#081009]/80 px-3 py-2 backdrop-blur-md">
        <span className="text-[9px] font-bold text-cream/80">Rute · GBK, Jakarta</span>
        <span className="font-display text-[10px] font-semibold text-lime">8,42 km</span>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="fitur"
      aria-labelledby="fitur-title"
      className="section-pad relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-[#080c09]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(182,242,64,0.055),transparent_65%)]"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              label="Fitur utama"
              title={
                <span id="fitur-title">
                  Satu alur untuk
                  <span className="text-lime"> semua gerakmu.</span>
                </span>
              }
              description="Dari Beranda sampai cerita yang dibagikan. Semua fitur dirancang untuk membuat aktivitas lebih mudah dicatat dan progres lebih mudah dilihat."
            />
            <div className="hidden shrink-0 items-center gap-3 border-l border-white/10 pl-6 lg:flex">
              <span className="font-display text-[2.6rem] leading-none font-semibold tracking-[-0.06em] text-lime">09</span>
              <span className="text-[11px] leading-4 font-semibold text-fog">
                fitur inti
                <br />
                dalam satu app
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          <Reveal className="md:col-span-2 lg:col-span-7">
            <FeatureCard accent="#b6f240" className="min-h-[380px]">
              <FeatureHeader
                number="01"
                icon={Navigation}
                accent="#b6f240"
                title="Rekam aktivitas dengan GPS real-time"
              >
                Rute, durasi, jarak, pace atau kecepatan, dan kalori terekam saat kamu bergerak. Selesai
                olahraga, statistiknya sudah siap.
              </FeatureHeader>
              <GpsVisual />
            </FeatureCard>
          </Reveal>

          <Reveal delay={80} className="md:col-span-2 lg:col-span-5">
            <FeatureCard accent="#ff9a62" className="min-h-[320px]">
              <FeatureHeader
                number="02"
                icon={Zap}
                accent="#ff9a62"
                title="Mode demo 10× untuk mencoba tanpa GPS"
              >
                Kenali pengalaman merekam aktivitas tanpa harus keluar rumah. Simulasi berjalan 10 kali
                lebih cepat—tanpa GPS.
              </FeatureHeader>
              <div className="relative mt-auto flex flex-1 items-end justify-between gap-4 pt-8">
                <div>
                  <div className="flex items-start gap-1">
                    <span className="font-display text-[4.6rem] leading-[0.8] font-semibold tracking-[-0.08em] text-lime sm:text-[5.4rem]">
                      10
                    </span>
                    <span className="mt-1 font-display text-2xl font-semibold text-lime">×</span>
                  </div>
                  <p className="mt-3 text-[9px] font-extrabold tracking-[0.14em] text-fog uppercase">
                    Simulasi tanpa GPS
                  </p>
                </div>
                <div className="relative grid size-16 place-items-center rounded-full border border-lime/25 bg-lime/10 text-lime sm:size-20">
                  <span className="absolute inset-2 rounded-full border border-dashed border-lime/20" aria-hidden="true" />
                  <Play className="ml-0.5 size-6" fill="currentColor" aria-hidden="true" />
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={40} className="md:col-span-1 lg:col-span-4">
            <FeatureCard accent="#52c7b8" className="min-h-[300px]">
              <FeatureHeader
                number="03"
                icon={PenLine}
                accent="#52c7b8"
                title="Input aktivitas manual"
              >
                Catat gym, renang, yoga, atau sesi tanpa GPS. Tetap rapi, tetap jadi bagian dari progresmu.
              </FeatureHeader>
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {["Gym", "Renang", "Yoga", "Tanpa GPS"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[9px] font-bold text-cream/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-teal/15 bg-teal/[0.05] px-3 py-2.5">
                  <span className="text-[9px] font-semibold text-cream/65">Sesi selesai dicatat</span>
                  <span className="grid size-5 place-items-center rounded-full bg-teal text-ink">
                    <ArrowUpRight className="size-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={80} className="md:col-span-1 lg:col-span-4">
            <FeatureCard accent="#66b6ff" className="min-h-[300px]">
              <FeatureHeader number="04" icon={History} accent="#66b6ff" title="Riwayat & peta rute">
                Semua sesi tersimpan di riwayat. Aktivitas dengan GPS membawa peta rute, sementara sesi
                manual tetap rapi tanpa peta.
              </FeatureHeader>
              <div className="mt-auto space-y-2 pt-6">
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-2.5">
                  <RouteThumb color="#b6f240" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-cream">Easy run di GBK</p>
                    <p className="mt-0.5 text-[8px] text-fog">8,42 km · 47:18 · 5&apos;37&quot;/km</p>
                  </div>
                  <ArrowUpRight className="size-3.5 text-fog/50" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-2.5 opacity-65">
                  <RouteThumb color="#52c7b8" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-cream">Renang 1,5K</p>
                    <p className="mt-0.5 text-[8px] text-fog">1.500 m · 42:00 · Pace /100m</p>
                  </div>
                  <ArrowUpRight className="size-3.5 text-fog/50" aria-hidden="true" />
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={120} className="md:col-span-2 lg:col-span-4">
            <FeatureCard accent="#ff8ea8" className="min-h-[300px]">
              <FeatureHeader number="05" icon={Heart} accent="#ff8ea8" title="Feed sosial: cerita, kudos & komentar">
                Bagikan aktivitas, ikuti cerita teman, dan beri kudos atau komentar. Olahraga terasa lebih
                seru saat dilakukan bersama.
              </FeatureHeader>
              <div className="mt-auto pt-6">
                <div className="rounded-[1.1rem] border border-white/[0.08] bg-[#0d140f] p-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-7 place-items-center rounded-full bg-rose/15 font-display text-[8px] font-bold text-rose">
                      RM
                    </span>
                    <div>
                      <p className="text-[10px] font-bold text-cream">Rizki Maulana</p>
                      <p className="text-[8px] text-fog">Easy run di GBK · Lari</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-white/[0.07] pt-2.5">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-rose">
                      <Heart className="size-3" fill="currentColor" aria-hidden="true" />
                      34 kudos
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-fog">
                      <MessageCircle className="size-3" aria-hidden="true" />2 komentar
                    </span>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={40} className="md:col-span-1 lg:col-span-5">
            <FeatureCard accent="#52c7b8" className="min-h-[310px]">
              <FeatureHeader
                number="06"
                icon={Compass}
                accent="#52c7b8"
                title="Jelajah rute populer & papan peringkat"
              >
                Temukan rute untuk sesi berikutnya dan lihat posisimu di papan peringkat mingguan—bisa
                diurutkan berdasarkan jarak, elevasi, atau pace.
              </FeatureHeader>
              <div className="mt-auto grid grid-cols-[1.15fr_0.85fr] gap-2.5 pt-6">
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                  <p className="text-[8px] font-extrabold tracking-[0.12em] text-fog uppercase">
                    Rute populer
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {[
                      ["Loop GBK", "7,4 km"],
                      ["Monas Sunrise Run", "5,2 km"],
                    ].map(([route, distance]) => (
                      <div key={route} className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 text-[9px] font-semibold text-cream/80">
                          <MapPin className="size-2.5 text-teal" aria-hidden="true" />
                          {route}
                        </span>
                        <span className="shrink-0 text-[8px] text-fog">{distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                  <p className="text-[8px] font-extrabold tracking-[0.12em] text-fog uppercase">Pekan ini</p>
                  <div className="mt-2.5 space-y-2">
                    {[
                      ["1", "#b6f240"],
                      ["2", "#66b6ff"],
                      ["3", "#ff9a62"],
                    ].map(([rank, color]) => (
                      <div key={rank} className="flex items-center gap-2">
                        <span className="text-[8px] font-bold text-fog/50">{rank}</span>
                        <span className="size-4 rounded-full border border-white/10" style={{ backgroundColor: `${color}35` }} />
                        <span className="h-1 flex-1 rounded-full bg-white/[0.07]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={80} className="md:col-span-1 lg:col-span-7">
            <FeatureCard accent="#ff9a62" className="min-h-[310px]">
              <div className="grid h-full gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="flex flex-col">
                  <FeatureHeader
                    number="07"
                    icon={Trophy}
                    accent="#ff9a62"
                    title="Tantangan & klub komunitas"
                  >
                    Ikuti tantangan, bergabung dengan klub, dan tetap termotivasi lewat komunitas yang
                    bergerak bersamamu.
                  </FeatureHeader>
                </div>
                <div className="grid gap-2.5">
                  <div className="rounded-[1.1rem] border border-orange/15 bg-orange/[0.06] p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-extrabold tracking-[0.12em] text-orange uppercase">
                        Tantangan aktif
                      </span>
                      <Trophy className="size-3.5 text-orange" aria-hidden="true" />
                    </div>
                    <p className="mt-2 font-display text-sm font-semibold text-cream">Lari 100K November</p>
                    <div className="mt-1.5 flex items-center justify-between text-[8px] font-semibold text-fog">
                      <span>37,6 / 100 km</span>
                      <span>12.480 peserta</span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[38%] rounded-full bg-orange" />
                    </div>
                  </div>
                  <div className="rounded-[1.1rem] border border-teal/15 bg-teal/[0.05] p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-extrabold tracking-[0.12em] text-teal uppercase">
                        Klub pilihan
                      </span>
                      <Users className="size-3.5 text-teal" aria-hidden="true" />
                    </div>
                    <p className="mt-2 font-display text-sm font-semibold text-cream">GBK Runners</p>
                    <p className="mt-1 text-[8px] font-semibold text-fog">1.284 anggota · Jakarta</p>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={40} className="md:col-span-1 lg:col-span-5">
            <FeatureCard accent="#b6f240" className="min-h-[280px]">
              <FeatureHeader
                number="08"
                icon={Target}
                accent="#b6f240"
                title="Dashboard, target mingguan, pencapaian"
              >
                Pantau jarak, waktu, elevasi, kalori, dan rekor pribadi dari Beranda. Lengkapi profil
                untuk mengatur target mingguan dan membuka badge.
              </FeatureHeader>
              <div className="mt-auto flex items-center gap-5 pt-6">
                <div className="relative size-[74px] shrink-0">
                  <svg viewBox="0 0 74 74" className="size-full -rotate-90" aria-hidden="true">
                    <circle cx="37" cy="37" r="30" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="6" />
                    <circle
                      cx="37"
                      cy="37"
                      r="30"
                      fill="none"
                      stroke="#b6f240"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="188.5"
                      strokeDashoffset="47.1"
                    />
                  </svg>
                  <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-bold text-cream">
                    75%
                  </span>
                </div>
                <div>
                  <p className="text-[9px] font-extrabold tracking-[0.12em] text-fog uppercase">Target mingguan</p>
                  <p className="mt-1 font-display text-[1.3rem] font-semibold tracking-[-0.04em] text-cream">
                    37,6 / 50 km
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    {[0, 1, 2].map((item) => (
                      <span key={item} className="grid size-5 place-items-center rounded-full bg-lime/15 text-lime">
                        <Target className="size-2.5" aria-hidden="true" />
                      </span>
                    ))}
                    <span className="text-[8px] font-semibold text-fog">Pencapaian</span>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          <Reveal delay={80} className="md:col-span-1 lg:col-span-7">
            <FeatureCard accent="#66b6ff" className="min-h-[280px]">
              <FeatureHeader
                number="09"
                icon={Database}
                accent="#66b6ff"
                title="Akun aman & tersinkron"
              >
                Buat akun dengan email, masuk dengan sesi aman, dan akses kembali aktivitas, kudos,
                komentar, klub, tantangan, serta profilmu. Semua data tersimpan di PostgreSQL.
              </FeatureHeader>
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {["Akun", "Aktivitas", "Kudos", "Komentar", "Klub", "Tantangan", "Profil"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky/15 bg-sky/[0.04] px-2.5 py-1 text-[8px] font-semibold text-cream/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] p-2.5">
                  <span className="flex items-center gap-1.5 rounded-lg bg-sky/10 px-2 py-1 text-[8px] font-bold text-sky">
                    <Database className="size-3" aria-hidden="true" />
                    PostgreSQL
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-sky/30 to-transparent" aria-hidden="true" />
                  <span className="flex items-center gap-1.5 text-[8px] font-semibold text-cream/70">
                    <span className="live-dot size-1.5 rounded-full bg-teal text-teal" aria-hidden="true" />
                    Sinkron dengan akun
                  </span>
                </div>
              </div>
            </FeatureCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

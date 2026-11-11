import { ArrowUpRight, Check, Download, Sparkles } from "lucide-react";
import { APP_LINKS, APK_AVAILABLE } from "../data";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section id="atas" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute -top-60 right-[-18%] size-[820px] rounded-full bg-[radial-gradient(circle,rgba(182,242,64,0.12)_0%,rgba(182,242,64,0.035)_38%,transparent_68%)]" />
        <div className="absolute top-[30%] left-[-22%] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(82,199,184,0.08)_0%,transparent_64%)]" />
        <svg
          viewBox="0 0 900 800"
          className="absolute top-0 left-[41%] hidden h-full w-[720px] opacity-25 xl:block"
          fill="none"
        >
          <path
            d="M-60 628C92 555 126 450 287 428C447 406 390 245 565 210C675 188 724 123 808 15"
            stroke="url(#hero-route)"
            strokeWidth="1.2"
            strokeDasharray="4 9"
          />
          <defs>
            <linearGradient id="hero-route" x1="0" y1="1" x2="1" y2="0">
              <stop stopColor="#52c7b8" stopOpacity="0" />
              <stop offset="0.5" stopColor="#b6f240" />
              <stop offset="1" stopColor="#ff9a62" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-16 pb-16 sm:gap-20 lg:min-h-[640px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:pb-24 xl:gap-12">
          <div className="relative z-10 lg:pb-8">
            <div className="hero-in" style={{ animationDelay: "80ms" }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-lime/18 bg-lime/[0.055] py-1.5 pr-3.5 pl-2">
                <span className="grid size-5 place-items-center rounded-full bg-lime/12 text-lime">
                  <Sparkles className="size-3" aria-hidden="true" />
                </span>
                <span className="text-[10px] font-extrabold tracking-[0.11em] text-cream/75 uppercase sm:text-[11px]">
                  Satu aplikasi untuk semua caramu bergerak
                </span>
              </div>
            </div>

            <h1
              id="hero-title"
              className="hero-in mt-6 max-w-[12ch] text-[clamp(2.8rem,7.5vw,4.65rem)] leading-[0.99] font-semibold tracking-[-0.065em] text-cream sm:mt-7 lg:text-[clamp(3.65rem,5.3vw,4.65rem)]"
              style={{ animationDelay: "160ms" }}
            >
              Setiap langkah <span className="text-lime">berarti.</span>
            </h1>

            <p
              className="hero-in mt-6 max-w-[33rem] text-[15px] leading-[1.75] text-fog sm:mt-7 sm:text-[17px] sm:leading-8"
              style={{ animationDelay: "240ms" }}
            >
              Rekam rute, durasi, jarak, pace atau kecepatan, dan kalori. Dari lari sampai yoga, semua
              aktivitasmu tersimpan rapi di satu tempat—lengkap dengan riwayat, target, dan komunitas.
            </p>

            <div
              className="hero-in mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "320ms" }}
            >
              <a href={APP_LINKS.web} target="_blank" rel="noreferrer" className="btn btn-primary group">
                Mulai Rekam Aktivitas
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href={APK_AVAILABLE ? APP_LINKS.apk : "#akses"}
                {...(APK_AVAILABLE ? { target: "_blank", rel: "noreferrer" } : {})}
                className="btn btn-secondary group"
              >
                <Download
                  className="size-4 text-cream/70 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                Unduh APK
                <span className="rounded-full border border-orange/20 bg-orange/10 px-2 py-0.5 text-[9px] font-extrabold tracking-[0.08em] text-orange uppercase">
                  Segera hadir
                </span>
              </a>
            </div>

            <div
              className="hero-in mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-semibold text-fog/90 sm:text-xs"
              style={{ animationDelay: "400ms" }}
            >
              {["GPS real-time", "Mode demo 10×", "Input manual"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <span className="grid size-4 place-items-center rounded-full bg-lime/10 text-lime">
                    <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="phone-in relative z-10 mx-auto flex w-full max-w-[530px] items-center justify-center lg:justify-end"
            style={{ animationDelay: "180ms" }}
          >
            <div
              aria-hidden="true"
              className="absolute size-[80%] min-h-[360px] min-w-[360px] rounded-full border border-white/[0.06]"
            />
            <div
              aria-hidden="true"
              className="absolute size-[68%] min-h-[300px] min-w-[300px] rounded-full border border-dashed border-white/[0.055]"
            />
            <div
              aria-hidden="true"
              className="absolute size-[56%] min-h-[260px] min-w-[260px] rounded-full bg-lime/[0.045] blur-3xl"
            />
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

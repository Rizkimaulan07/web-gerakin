import { ArrowUpRight, Download } from "lucide-react";
import { APP_LINKS, APK_AVAILABLE, SPORTS } from "../data";
import { LogoMark } from "./Logo";
import Reveal from "./Reveal";

export default function ClosingCta() {
  return (
    <section aria-labelledby="cta-akhir-title" className="pb-20 sm:pb-24 lg:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,#c8ff57_0%,#b6f240_48%,#a8e837_100%)] p-6 text-ink sm:rounded-[2.5rem] sm:p-10 lg:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <svg
                viewBox="0 0 700 700"
                className="absolute -top-28 -right-24 size-[620px] opacity-[0.1]"
                fill="none"
              >
                <circle cx="350" cy="350" r="290" stroke="#070a08" strokeWidth="1" />
                <circle cx="350" cy="350" r="210" stroke="#070a08" strokeWidth="1" strokeDasharray="5 8" />
                <path d="M40 540C170 460 176 320 310 290C460 256 482 114 660 80" stroke="#070a08" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.06] px-3 py-1.5 text-[9px] font-extrabold tracking-[0.15em] text-ink/65 uppercase">
                  <span className="live-dot size-1.5 rounded-full bg-ink text-ink" aria-hidden="true" />
                  Langkah berikutnya
                </div>
                <h2
                  id="cta-akhir-title"
                  className="mt-5 max-w-[15ch] text-[clamp(2.2rem,4.8vw,4.1rem)] leading-[1.02] font-semibold tracking-[-0.06em] text-ink sm:max-w-none"
                >
                  Siap membuat setiap langkah lebih berarti?
                </h2>
                <p className="mt-5 max-w-lg text-[13px] leading-6 text-ink/65 sm:text-sm sm:leading-7">
                  Buka web app dan rekam aktivitas pertamamu hari ini. APK Android menyusul—direncanakan
                  memakai akun yang sama.
                </p>

                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={APP_LINKS.web}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[13px] font-extrabold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#121a14] focus-visible:outline-ink"
                  >
                    Mulai Rekam Aktivitas
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  {APK_AVAILABLE ? (
                    <a
                      href={APP_LINKS.apk}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-[13px] font-extrabold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/[0.06] focus-visible:outline-ink"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Unduh APK
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-[13px] font-extrabold text-ink/50"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Unduh APK
                      <span className="text-[9px] font-extrabold tracking-[0.06em] text-ink/45 uppercase">
                        Segera hadir
                      </span>
                    </button>
                  )}
                </div>

                <p className="mt-4 text-[9px] font-semibold tracking-[0.05em] text-ink/45">
                  Web app tersedia sekarang · APK segera hadir
                </p>
              </div>

              <div aria-hidden="true" className="relative hidden size-[320px] shrink-0 lg:block">
                <div className="absolute inset-0 rounded-full border border-ink/10" />
                <div className="absolute inset-6 rounded-full border border-dashed border-ink/15" />
                <div className="absolute inset-14 rounded-full bg-ink/5" />
                <div className="absolute top-1/2 left-1/2 grid size-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-lime shadow-[0_20px_50px_rgba(7,10,8,0.25)]">
                  <LogoMark className="size-11" />
                  <span className="-mt-3 text-[9px] font-bold tracking-[0.1em] text-cream/60 uppercase">
                    8 olahraga
                  </span>
                </div>
                {SPORTS.map((sport, index) => {
                  const Icon = sport.icon;
                  const angle = (index / SPORTS.length) * Math.PI * 2 - Math.PI / 2;
                  const left = 50 + Math.cos(angle) * 46.5;
                  const top = 50 + Math.sin(angle) * 46.5;
                  return (
                    <span
                      key={sport.name}
                      className="absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-[#d1ff79] text-ink shadow-[0_5px_16px_rgba(7,10,8,0.08)]"
                      style={{ left: `${left}%`, top: `${top}%` }}
                    >
                      <Icon className="size-4" strokeWidth={2} />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

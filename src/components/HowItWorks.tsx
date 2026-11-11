import { ArrowUpRight, Zap } from "lucide-react";
import { APP_LINKS, HOW_IT_WORKS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="cara-kerja-title"
      className="section-pad relative scroll-mt-24 overflow-hidden border-b border-white/[0.06]"
    >
      <div className="container-page relative">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[linear-gradient(145deg,#0e1510_0%,#0a0f0b_52%,#111a13_100%)] p-5 sm:rounded-[2.25rem] sm:p-8 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-44 -right-32 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(182,242,64,0.11),transparent_66%)]"
          />
          <div aria-hidden="true" className="bg-dots absolute inset-0 opacity-[0.16]" />

          <div className="relative">
            <Reveal>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  label="Cara kerja"
                  title={
                    <span id="cara-kerja-title">
                      Empat langkah.
                      <span className="text-lime"> Satu alur yang mulus.</span>
                    </span>
                  }
                  description="Dari masuk ke akun sampai melihat statistik, semuanya dibuat sederhana. Kamu fokus bergerak, Gerakin yang merapikan catatannya."
                />
                <div className="hidden shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-bold tracking-[0.13em] text-fog uppercase lg:block">
                  Masuk · Rekam · Simpan · Pantau
                </div>
              </div>
            </Reveal>

            <div className="relative mt-11">
              <div
                aria-hidden="true"
                className="absolute top-[2.5rem] right-[9%] left-[9%] hidden border-t border-dashed border-white/15 lg:block"
              />

              <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {HOW_IT_WORKS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.step} className="h-full">
                      <Reveal delay={index * 70} className="h-full">
                        <div className="group relative h-full rounded-[1.4rem] border border-white/[0.08] bg-[#090e0a]/80 p-5 transition-colors duration-500 hover:border-white/15 sm:p-6">
                          <div className="relative z-10 flex items-center justify-between">
                            <span
                              className="grid size-10 place-items-center rounded-full border bg-ink font-display text-[11px] font-bold"
                              style={{
                                color: step.accent,
                                borderColor: `${step.accent}40`,
                                boxShadow: `0 0 24px ${step.accent}12`,
                              }}
                            >
                              {step.step}
                            </span>
                            <Icon
                              className="size-5 opacity-70 transition-transform duration-500 group-hover:scale-110"
                              style={{ color: step.accent }}
                              strokeWidth={1.7}
                              aria-hidden="true"
                            />
                          </div>
                          <h3 className="mt-6 font-display text-[1.1rem] font-semibold tracking-[-0.03em] text-cream">
                            {step.title}
                          </h3>
                          <p className="mt-2.5 text-[13px] leading-6 text-fog">{step.description}</p>
                          <div
                            aria-hidden="true"
                            className="mt-5 h-px w-full opacity-60"
                            style={{ background: `linear-gradient(90deg, ${step.accent}40, transparent)` }}
                          />
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>

            <Reveal delay={160}>
              <div className="mt-4 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-orange/10 text-orange">
                    <Zap className="size-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-[11px] leading-5 text-fog">
                    <strong className="font-bold text-cream">Belum siap keluar?</strong> Coba mode demo 10×
                    atau input manual—tanpa perlu GPS.
                  </p>
                </div>
                <a
                  href={APP_LINKS.web}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 text-[12px] font-bold text-lime transition-colors hover:text-lime-light"
                >
                  Coba alurnya di web app
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

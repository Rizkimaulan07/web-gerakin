import { ArrowRight, Gauge } from "lucide-react";
import { SPORTS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const METRIC_TERMS = ["Pace", "Avg speed", "Kecepatan", "Tempo", "Flow"];

export default function Sports() {
  return (
    <section
      id="olahraga"
      aria-labelledby="olahraga-title"
      className="section-pad relative scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] bottom-[10%] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(82,199,184,0.065),transparent_64%)]"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              label="Olahraga & metrik"
              title={
                <span id="olahraga-title">
                  Setiap olahraga punya
                  <span className="text-lime"> ritmenya sendiri.</span>
                </span>
              }
              description="Pace bukan satu-satunya cara mengukur kecepatan. Gerakin menampilkan istilah dan satuan yang paling relevan dengan cara kamu bergerak."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2 lg:max-w-[280px] lg:justify-end">
              {METRIC_TERMS.map((term) => (
                <span
                  key={term}
                  className="rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold text-cream/60"
                >
                  {term}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {SPORTS.map((sport, index) => {
            const Icon = sport.icon;
            return (
              <Reveal key={sport.name} delay={40 + (index % 4) * 50}>
                <article className="group relative h-full overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-white/[0.024] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 sm:rounded-[1.5rem] sm:p-5">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-5 top-0 h-px opacity-70"
                    style={{ background: `linear-gradient(90deg, transparent, ${sport.accent}66, transparent)` }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -top-10 -right-10 size-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: `${sport.accent}18` }}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className="grid size-9 place-items-center rounded-xl border sm:size-10"
                      style={{
                        color: sport.accent,
                        backgroundColor: `${sport.accent}11`,
                        borderColor: `${sport.accent}24`,
                      }}
                    >
                      <Icon className="size-4 sm:size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-display text-[9px] font-medium tracking-[0.15em] text-fog/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[15px] font-semibold tracking-[-0.025em] text-cream sm:text-[17px]">
                    {sport.name}
                  </h3>

                  <div className="mt-5">
                    <p className="text-[9px] font-extrabold tracking-[0.15em] text-fog/75 uppercase">
                      Metrik utama
                    </p>
                    <p
                      className="mt-1.5 font-display text-[1.05rem] leading-[1.2] font-semibold tracking-[-0.03em] sm:text-[1.2rem]"
                      style={{ color: sport.accent }}
                    >
                      {sport.term}
                    </p>
                    <span className="mt-2 inline-flex max-w-full rounded-full border border-white/[0.09] bg-white/[0.035] px-2.5 py-1 text-[9px] leading-3.5 font-bold text-cream/65 sm:text-[10px]">
                      {sport.unit}
                    </span>
                  </div>

                  <p className="mt-4 hidden text-[12px] leading-5 text-fog sm:block">{sport.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div className="mt-4 flex flex-col gap-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6">
            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-lime/15 bg-lime/[0.06] text-lime">
                <Gauge className="size-[18px]" aria-hidden="true" />
              </span>
              <p className="max-w-3xl text-[12px] leading-6 text-fog">
                <strong className="font-bold text-cream">Kenapa berbeda?</strong> Pace mengukur menit per
                kilometer, Avg speed dan Kecepatan mengukur km/jam. Renang memakai pace per 100 meter,
                sementara Gym dan Yoga memakai ritme—bukan jarak.
              </p>
            </div>
            <a
              href="#cara-kerja"
              className="group inline-flex shrink-0 items-center gap-2 self-end text-[12px] font-bold text-cream transition-colors hover:text-lime sm:self-auto"
            >
              Lihat cara mencatatnya
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

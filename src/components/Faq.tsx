import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { APP_LINKS, APK_AVAILABLE, FAQS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-pad relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-16%] bottom-0 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,154,98,0.05),transparent_65%)]"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              label="FAQ"
              title={
                <span id="faq-title">
                  Masih ada yang
                  <span className="text-lime"> ingin kamu tahu?</span>
                </span>
              }
              description="Jawaban singkat seputar akun, GPS, data, olahraga, dan ketersediaan APK. Kalau masih penasaran, alur tercepat adalah mencoba langsung."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 rounded-[1.6rem] border border-lime/15 bg-[linear-gradient(135deg,rgba(182,242,64,0.075),rgba(182,242,64,0.02))] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[9px] font-extrabold tracking-[0.15em] text-lime uppercase">
                <span className="live-dot size-1.5 rounded-full bg-lime text-lime" aria-hidden="true" />
                Web App tersedia
              </div>
              <p className="mt-3 max-w-xs font-display text-[1.2rem] leading-snug font-semibold tracking-[-0.03em] text-cream">
                Lihat sendiri bagaimana satu aktivitas tercatat dari awal sampai akhir.
              </p>
              <a
                href={APP_LINKS.web}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-lime transition-colors hover:text-lime-light"
              >
                Coba Web App
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-4 border-t border-white/[0.08] pt-3 text-[9px] font-semibold text-fog/55">
                APK Android {APK_AVAILABLE ? "sudah tersedia." : "segera hadir."}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div key={faq.question} className="group">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-5 py-5 text-left transition-colors sm:py-6"
                    >
                      <span className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 font-display text-[9px] font-medium tracking-[0.12em] transition-colors ${
                            isOpen ? "text-lime" : "text-fog/80"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-display text-[14px] leading-snug font-semibold tracking-[-0.02em] transition-colors sm:text-[15px] ${
                            isOpen ? "text-cream" : "text-cream/75 group-hover:text-cream"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-lime/25 bg-lime text-ink"
                            : "border-white/12 bg-white/[0.03] text-cream/60 group-hover:border-white/20"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="size-3.5" strokeWidth={2.3} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    data-open={isOpen}
                    className="accordion-panel"
                  >
                    <div>
                      <p className="max-w-xl pr-10 pb-6 pl-[2.05rem] text-[12px] leading-6 text-fog sm:pl-[2.4rem] sm:text-[13px] sm:leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

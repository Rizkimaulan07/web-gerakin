import { ArrowRight, MapPin, Sparkles, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="section-pad relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-[-14%] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(182,242,64,0.06),transparent_66%)]"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                label="Tentang Gerakin"
                title={
                  <span id="tentang-title">
                    Banyak cara bergerak.
                    <span className="block text-lime">Satu tempat untuk mencatatnya.</span>
                  </span>
                }
                description="Aktivitas sering tersebar: rute di satu aplikasi, catatan gym di buku, target di kepala. Gerakin merapikannya menjadi satu riwayat yang mudah dibaca dan terasa bermakna."
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.16em] text-fog uppercase">
                    <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
                    Masalahnya
                  </div>
                  <p className="mt-3 text-[13px] leading-6 text-cream/75">
                    Rekaman tercecer, progres sulit dilihat, dan momen setelah olahraga cepat terlupakan.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-lime/15 bg-lime/[0.045] p-5">
                  <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.16em] text-lime uppercase">
                    <Users className="size-3.5" aria-hidden="true" />
                    Untuk siapa
                  </div>
                  <p className="mt-3 text-[13px] leading-6 text-cream/75">
                    Pelari harian, pesepeda akhir pekan, pekerja gym, hingga komunitas olahraga.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <a
                href="#fitur"
                className="group mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-cream transition-colors hover:text-lime"
              >
                Lihat semua fitur
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-8 -left-5 hidden size-24 rounded-full border border-dashed border-lime/20 sm:block"
            />
            <figure className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-[0_40px_100px_rgba(0,0,0,0.5)] sm:rounded-[2.4rem]">
                <img
                  src="/images/runner.jpg"
                  alt="Tiga pelari melintasi lintasan atletik saat senja, menggambarkan semangat bergerak bersama."
                  className="h-[420px] w-full object-cover object-center grayscale contrast-[1.05] brightness-[0.7] sm:h-[510px] lg:h-[560px]"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.14)_0%,rgba(7,10,8,0.26)_46%,rgba(7,10,8,0.94)_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(125deg,rgba(182,242,64,0.14),transparent_45%)]"
                />

                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/12 bg-ink/45 px-3 py-2 backdrop-blur-md sm:top-5 sm:left-5">
                  <MapPin className="size-3.5 text-lime" aria-hidden="true" />
                  <span className="text-[9px] font-extrabold tracking-[0.12em] text-cream/80 uppercase">
                    Rute tersimpan
                  </span>
                </div>

                <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                  <div className="glass-panel rounded-[1.4rem] p-4 sm:p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-extrabold tracking-[0.15em] text-fog uppercase">
                          Target minggu ini
                        </p>
                        <p className="mt-2 font-display text-[1.75rem] leading-none font-semibold tracking-[-0.05em] text-cream">
                          37,6<span className="text-sm font-medium text-fog">/50 km</span>
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/20 bg-lime/10 px-2.5 py-1 text-[9px] font-extrabold text-lime">
                        <Sparkles className="size-3" aria-hidden="true" />
                        75% tercapai
                      </span>
                    </div>

                    <div
                      className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"
                      role="img"
                      aria-label="Progres target mingguan 75 persen"
                    >
                      <div className="h-full w-[75%] rounded-full bg-lime shadow-[0_0_16px_rgba(182,242,64,0.4)]" />
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[9px] font-semibold text-fog">
                      <span>Rute, durasi, dan kalori tercatat.</span>
                      <span className="text-cream/75">Easy run di GBK</span>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="sr-only">
                Visual suasana olahraga Gerakin dengan contoh kartu target mingguan.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

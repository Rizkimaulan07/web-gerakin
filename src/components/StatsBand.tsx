import { SPORTS } from "../data";

function TickerGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {SPORTS.map((sport) => {
        const Icon = sport.icon;
        return (
          <span key={sport.name} className="flex shrink-0 items-center">
            <span className="mx-6 flex items-center gap-2 sm:mx-8">
              <Icon className="size-3.5" style={{ color: sport.accent }} aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.04em] text-cream/65 sm:text-xs">
                {sport.name}
              </span>
            </span>
            <span className="size-1 rounded-full bg-white/15" aria-hidden="true" />
          </span>
        );
      })}
    </div>
  );
}

export default function StatsBand() {
  return (
    <>
      <section
        aria-label="Ringkasan Gerakin"
        className="relative z-10 border-y border-white/[0.08] bg-[#090e0a]/80"
      >
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-[0.9fr_0.9fr_1.35fr]">
            <div className="flex items-center gap-4 border-b border-white/[0.08] py-6 pr-4 md:border-r md:border-b-0 md:py-8 md:pr-8">
              <span className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.06em] text-lime sm:text-[3.1rem]">
                08
              </span>
              <div>
                <p className="text-[12px] font-bold text-cream sm:text-sm">Cabang olahraga</p>
                <p className="mt-1 text-[11px] leading-4 text-fog/85 sm:text-xs">Dari lari hingga yoga.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-white/[0.08] py-6 pl-4 md:border-r md:border-b-0 md:px-8 md:py-8">
              <span className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.06em] text-lime sm:text-[3.1rem]">
                09
              </span>
              <div>
                <p className="text-[12px] font-bold text-cream sm:text-sm">Fitur utama</p>
                <p className="mt-1 text-[11px] leading-4 text-fog/85 sm:text-xs">Dalam satu aplikasi.</p>
              </div>
            </div>

            <div className="col-span-2 flex flex-col justify-center gap-2.5 border-white/[0.08] py-5 md:col-span-1 md:border-l md:py-8 md:pl-8">
              <p className="text-[9px] font-extrabold tracking-[0.18em] text-fog/90 uppercase">Status akses</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="inline-flex items-center gap-2">
                  <span className="live-dot size-1.5 rounded-full bg-lime text-lime" aria-hidden="true" />
                  <span className="text-sm font-bold text-cream">Web App</span>
                  <span className="text-[10px] font-semibold text-lime">Tersedia</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
                  <span className="text-sm font-bold text-cream">APK</span>
                  <span className="text-[10px] font-semibold text-orange">Segera hadir</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-white/[0.07] bg-ink py-3.5">
        <div className="container-page flex items-center gap-5">
          <span className="hidden shrink-0 text-[9px] font-extrabold tracking-[0.18em] text-fog/85 uppercase sm:block">
            Didukung untuk
          </span>
          <div className="marquee min-w-0 flex-1 overflow-hidden">
            <div className="marquee-track">
              <TickerGroup />
              <TickerGroup ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

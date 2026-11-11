import {
  BatteryMedium,
  Flame,
  Heart,
  Layers,
  MapPin,
  MessageCircle,
  Pause,
  Signal,
  Square,
  Wifi,
} from "lucide-react";

function LiveMap() {
  return (
    <svg
      viewBox="0 0 320 276"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="map-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#101710" />
          <stop offset="1" stopColor="#0d130e" />
        </linearGradient>
        <filter id="route-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="320" height="276" fill="url(#map-fade)" />

      {/* Parks and water */}
      <path d="M-20 170C22 153 58 160 80 188C96 208 70 235 42 250L-20 268Z" fill="#162418" />
      <path d="M196 0H340V96C308 88 280 94 256 84C228 72 218 42 196 0Z" fill="#142117" />
      <path d="M296 -20C332 24 288 78 310 114C326 140 352 144 360 168V-30Z" fill="#0c1b1a" />
      <path d="M294 -20C328 26 286 78 308 112C324 138 348 144 358 166" fill="none" stroke="#152c29" strokeWidth="2" />

      {/* City blocks */}
      <g fill="#141c15" stroke="#1d281e" strokeWidth="0.8">
        <rect x="15" y="18" width="47" height="31" rx="5" />
        <rect x="70" y="18" width="58" height="31" rx="5" />
        <rect x="136" y="16" width="42" height="35" rx="5" />
        <rect x="186" y="12" width="43" height="26" rx="5" />
        <rect x="27" y="62" width="54" height="42" rx="5" />
        <rect x="89" y="60" width="39" height="46" rx="5" />
        <rect x="139" y="64" width="58" height="38" rx="5" />
        <rect x="207" y="56" width="66" height="33" rx="5" />
        <rect x="227" y="102" width="48" height="35" rx="5" />
        <rect x="172" y="114" width="43" height="39" rx="5" />
        <rect x="105" y="118" width="54" height="41" rx="5" />
        <rect x="15" y="122" width="45" height="36" rx="5" />
        <rect x="85" y="180" width="48" height="35" rx="5" />
        <rect x="145" y="168" width="58" height="29" rx="5" />
        <rect x="218" y="156" width="42" height="46" rx="5" />
        <rect x="192" y="212" width="53" height="29" rx="5" />
        <rect x="255" y="213" width="41" height="36" rx="5" />
      </g>

      {/* Roads */}
      <g fill="none" stroke="#222d23" strokeLinecap="round">
        <path d="M-12 55C48 48 88 57 126 52C178 45 220 50 350 46" strokeWidth="7" />
        <path d="M-10 110C55 104 96 115 144 110C196 105 244 92 330 102" strokeWidth="5" />
        <path d="M-8 166C66 154 111 166 152 161C209 154 254 141 330 151" strokeWidth="6" />
        <path d="M-12 226C48 213 94 221 144 215C196 208 254 200 332 206" strokeWidth="5" />
        <path d="M63 -10C68 54 58 104 68 158C78 209 67 246 74 290" strokeWidth="5" />
        <path d="M164 -10C158 62 170 111 160 166C150 219 160 248 157 290" strokeWidth="4" />
        <path d="M258 -8C250 50 263 102 254 156C244 210 254 246 249 286" strokeWidth="4" />
      </g>

      <g fill="none" stroke="#283429" strokeWidth="1" opacity="0.75">
        <path d="M-10 55C48 48 88 57 126 52C178 45 220 50 350 46" />
        <path d="M-8 166C66 154 111 166 152 161C209 154 254 141 330 151" />
        <path d="M63 -10C68 54 58 104 68 158C78 209 67 246 74 290" />
        <path d="M164 -10C158 62 170 111 160 166C150 219 160 248 157 290" />
      </g>

      {/* Decorative secondary route */}
      <path
        d="M41 251C57 220 106 209 128 184C145 164 134 143 163 128C183 118 194 123 216 105"
        fill="none"
        stroke="#8e9b90"
        strokeWidth="1.3"
        strokeDasharray="3 5"
        opacity="0.36"
      />

      {/* Main route */}
      <path
        className="route-line"
        d="M28 232C50 212 43 187 73 173C106 158 100 134 133 119C162 106 170 86 199 72C220 61 238 51 262 43"
        fill="none"
        stroke="#b6f240"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#route-glow)"
      />

      {/* Route points */}
      <circle cx="28" cy="232" r="7" fill="#0b110c" stroke="#ff9a62" strokeWidth="3" />
      <circle cx="133" cy="119" r="4.5" fill="#0b110c" stroke="#b6f240" strokeWidth="2.5" />
      <circle cx="199" cy="72" r="4.5" fill="#0b110c" stroke="#b6f240" strokeWidth="2.5" />

      {/* Current point */}
      <circle cx="262" cy="43" r="16" fill="#b6f240" opacity="0.12" />
      <circle
        cx="262"
        cy="43"
        r="11"
        fill="none"
        stroke="#b6f240"
        strokeWidth="1.5"
        opacity="0.45"
        style={{ transformOrigin: "262px 43px", animation: "pulse-marker 2.4s ease-in-out infinite" }}
      />
      <circle cx="262" cy="43" r="6" fill="#b6f240" stroke="#0b110c" strokeWidth="2.5" />

      {/* Map labels */}
      <g fill="#657267" fontFamily="Manrope, sans-serif" fontSize="5.4" letterSpacing="0.6">
        <text x="21" y="15">TAMAN KOTA</text>
        <text x="100" y="99" transform="rotate(-2 100 99)">JL. MELATI</text>
        <text x="273" y="125" transform="rotate(90 273 125)">SUNGAI</text>
        <text x="78" y="141" transform="rotate(-10 78 141)">RUTE UTAMA</text>
      </g>
    </svg>
  );
}

function MiniRing() {
  return (
    <div className="relative size-[52px] shrink-0">
      <svg viewBox="0 0 52 52" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="26" cy="26" r="21" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="5" />
        <circle
          cx="26"
          cy="26"
          r="21"
          fill="none"
          stroke="#b6f240"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="132"
          strokeDashoffset="33"
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-[11px] font-bold text-cream">75%</span>
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[286px] max-w-full sm:w-[312px] lg:w-[326px]">
      <div
        className="phone-shell relative rounded-[3.25rem] border border-[#303b31] bg-[#1a211b] p-[8px]"
        role="img"
        aria-label="Pratinjau aplikasi Gerakin saat merekam Easy run di GBK: peta rute berwarna lime, jarak 8,42 kilometer, durasi 47 menit 18 detik, pace 5 menit 37 detik per kilometer, dan 563 kalori."
      >
        <div className="pointer-events-none absolute left-1/2 top-[17px] z-20 h-[23px] w-[82px] -translate-x-1/2 rounded-full bg-[#030504] ring-1 ring-white/[0.06]" />

        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/[0.06] bg-[#0a0f0c]">
          {/* Status bar */}
          <div className="flex h-11 items-center justify-between px-5 pt-1 text-[10px] font-bold text-cream/90">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="size-3" strokeWidth={2.5} aria-hidden="true" />
              <Wifi className="size-3" strokeWidth={2.5} aria-hidden="true" />
              <BatteryMedium className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
            </div>
          </div>

          <div className="px-3.5 pb-3">
            {/* App header */}
            <div className="flex items-center justify-between px-1.5 pt-1.5">
              <div>
                <p className="text-[8px] font-extrabold tracking-[0.2em] text-fog uppercase">Aktivitas baru</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-display text-[16px] font-semibold tracking-[-0.035em] text-cream">
                    Easy run di GBK
                  </span>
                  <span className="rounded-full border border-lime/20 bg-lime/10 px-2 py-0.5 text-[7px] font-extrabold tracking-[0.08em] text-lime uppercase">
                    Lari
                  </span>
                </div>
              </div>
              <div className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] font-display text-[9px] font-bold text-cream">
                RM
              </div>
            </div>

            {/* Map */}
            <div className="relative mt-3 h-[252px] overflow-hidden rounded-[1.65rem] border border-white/[0.08] bg-[#101710]">
              <LiveMap />

              <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#071009]/85 px-2.5 py-1.5 backdrop-blur-md">
                <span className="relative flex size-1.5">
                  <span className="live-dot size-1.5 rounded-full bg-lime text-lime" />
                </span>
                <span className="text-[7px] font-extrabold tracking-[0.12em] text-cream uppercase">GPS aktif</span>
              </div>

              <div className="absolute right-2.5 top-2.5 flex gap-1.5">
                <span className="grid size-7 place-items-center rounded-full border border-white/10 bg-[#071009]/80 text-cream/80 backdrop-blur-md">
                  <Layers className="size-3" aria-hidden="true" />
                </span>
                <span className="grid size-7 place-items-center rounded-full border border-white/10 bg-[#071009]/80 text-lime backdrop-blur-md">
                  <MapPin className="size-3" aria-hidden="true" />
                </span>
              </div>

              <div className="absolute bottom-2.5 left-2.5 rounded-full border border-white/10 bg-[#071009]/80 px-2.5 py-1 text-[7px] font-bold text-cream/70 backdrop-blur-md">
                Rute · GBK, Jakarta
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-2.5 grid grid-cols-3 divide-x divide-white/[0.09] rounded-[1.15rem] border border-white/[0.08] bg-white/[0.035] px-1 py-2.5">
              <div className="px-1.5 text-center">
                <p className="text-[7px] font-extrabold tracking-[0.12em] text-fog uppercase">Jarak</p>
                <p className="mt-0.5 font-display text-[13px] font-semibold tracking-[-0.02em] text-cream">
                  8,42 <span className="text-[8px] font-medium text-fog">km</span>
                </p>
              </div>
              <div className="px-1.5 text-center">
                <p className="text-[7px] font-extrabold tracking-[0.12em] text-fog uppercase">Durasi</p>
                <p className="mt-0.5 font-display text-[13px] font-semibold tracking-[-0.02em] text-cream">
                  47:18
                </p>
              </div>
              <div className="px-1.5 text-center">
                <p className="text-[7px] font-extrabold tracking-[0.12em] text-fog uppercase">Pace</p>
                <p className="mt-0.5 font-display text-[13px] font-semibold tracking-[-0.02em] text-cream">
                  5&apos;37&quot;
                  <span className="text-[8px] font-medium text-fog">/km</span>
                </p>
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between px-1">
              <div className="flex items-center gap-1 text-[9px] font-semibold text-cream/70">
                <Flame className="size-3 text-orange" aria-hidden="true" />
                563 kkal
              </div>
              <div className="flex items-center gap-1 text-[8px] font-medium text-fog">
                <span className="size-1 rounded-full bg-lime" />
                Tersinkron otomatis
              </div>
            </div>

            {/* Controls */}
            <div className="mt-2.5 flex items-center justify-between rounded-[1.15rem] border border-white/[0.08] bg-[#101711] px-5 py-2.5">
              <span className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-cream/60">
                <Square className="size-3" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="grid size-12 place-items-center rounded-full bg-lime text-ink shadow-[0_0_28px_rgba(182,242,64,0.22)]">
                <Pause className="size-5" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-cream/60">
                <MapPin className="size-3.5" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div className="flex justify-center pb-2.5">
            <span className="h-1 w-[92px] rounded-full bg-white/35" />
          </div>
        </div>
      </div>

      {/* Floating weekly goal card */}
      <div
        aria-hidden="true"
        className="glass-panel float-soft absolute -right-5 top-[17%] hidden w-[186px] rounded-[1.4rem] p-3.5 lg:block xl:-right-12"
        style={{ animationDelay: "-1.2s" }}
      >
        <p className="text-[8px] font-extrabold tracking-[0.16em] text-fog uppercase">Target minggu ini</p>
        <div className="mt-2.5 flex items-center gap-3">
          <MiniRing />
          <div>
            <p className="font-display text-[19px] leading-none font-bold tracking-[-0.04em] text-cream">
              37,6<span className="text-[11px] font-medium text-fog">/50 km</span>
            </p>
            <p className="mt-1.5 text-[9px] font-semibold text-lime">Sisa 12,4 km lagi</p>
          </div>
        </div>
      </div>

      {/* Floating social card */}
      <div
        aria-hidden="true"
        className="glass-panel float-soft absolute -left-14 bottom-0 hidden items-center gap-3 rounded-[1.35rem] p-3 pr-4 lg:flex"
        style={{ animationDelay: "-3.4s" }}
      >
        <div className="grid size-9 place-items-center rounded-full bg-rose/15 text-rose">
          <Heart className="size-4" fill="currentColor" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-[12px] font-semibold text-cream">34 kudos</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[8px] font-medium text-fog">
            <MessageCircle className="size-2.5" aria-hidden="true" />
            2 komentar di aktivitasmu
          </p>
        </div>
      </div>
    </div>
  );
}

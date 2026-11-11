import { ArrowUpRight } from "lucide-react";
import type { SVGProps } from "react";
import { APP_LINKS, APK_AVAILABLE, FOOTER_ITEMS, SOCIAL_LINKS } from "../data";
import { Wordmark } from "./Logo";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M14 3v10.2a4.2 4.2 0 1 1-3.2-4.1" />
      <path d="M14 3c.5 2.6 2.2 4.2 5 4.4" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.3 9.2 5 2.8-5 2.8V9.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#060907]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[320px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(182,242,64,0.055),transparent_70%)]"
      />

      <div className="container-page relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.9fr] lg:gap-8 lg:py-16">
          <div>
            <a href="#atas" aria-label="Gerakin — kembali ke atas" className="inline-flex rounded-xl">
              <Wordmark />
            </a>
            <p className="mt-5 max-w-[280px] text-[12px] leading-6 text-fog">
              Aplikasi pencatatan aktivitas untuk semua cara bergerak. Rekam, lihat progres, dan tetap
              terhubung dengan komunitasmu.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5">
              <span className="live-dot size-1.5 rounded-full bg-lime text-lime" aria-hidden="true" />
              <span className="text-[9px] font-extrabold tracking-[0.12em] text-cream/65 uppercase">
                Setiap langkah berarti
              </span>
            </div>
          </div>

          <nav aria-label="Navigasi footer produk">
            <h2 className="text-[9px] font-extrabold tracking-[0.18em] text-fog/85 uppercase">Produk</h2>
            <ul className="mt-4 space-y-3">
              {FOOTER_ITEMS.produk.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[12px] font-semibold text-cream/65 transition-colors hover:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navigasi footer lainnya">
            <h2 className="text-[9px] font-extrabold tracking-[0.18em] text-fog/85 uppercase">Jelajahi</h2>
            <ul className="mt-4 space-y-3">
              {FOOTER_ITEMS.lainnya.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[12px] font-semibold text-cream/65 transition-colors hover:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[9px] font-extrabold tracking-[0.18em] text-fog/85 uppercase">Media sosial</h2>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${social.label} Gerakin`}
                      className="group inline-flex items-center gap-2.5 text-[12px] font-semibold text-cream/65 transition-colors hover:text-lime"
                    >
                      <span className="grid size-7 place-items-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-colors group-hover:border-lime/25 group-hover:bg-lime/[0.06]">
                        <Icon className="size-3.5" />
                      </span>
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={APP_LINKS.web}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold text-lime transition-colors hover:text-lime-light"
            >
              Coba Web App
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <p className="mt-1.5 text-[9px] font-semibold text-fog/80">
              APK {APK_AVAILABLE ? "sudah tersedia" : "segera hadir"}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-medium text-fog/80">
            © {currentYear} Gerakin. Semua hak dilindungi.
          </p>
          <p className="text-[10px] font-medium text-fog/80">
            Dibuat untuk semua yang memilih untuk bergerak.
          </p>
        </div>
      </div>
    </footer>
  );
}

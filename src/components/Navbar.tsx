import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { APP_LINKS, NAV_LINKS } from "../data";
import { Wordmark } from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    const header = toggleRef.current?.closest("header");
    const pageSiblings = header?.parentElement
      ? (Array.from(header.parentElement.children).filter((child) => child !== header) as HTMLElement[])
      : [];
    pageSiblings.forEach((element) => {
      element.inert = true;
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      pageSiblings.forEach((element) => {
        element.inert = false;
      });
    };
  }, [open]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-white/[0.07] bg-ink/85 shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <a
          href="#atas"
          aria-label="Gerakin — kembali ke atas"
          className="shrink-0 rounded-xl transition-opacity hover:opacity-85"
        >
          <Wordmark />
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex rounded-full px-3.5 py-2 text-[13px] font-semibold text-cream/68 transition-colors hover:bg-white/[0.05] hover:text-cream xl:px-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={APP_LINKS.web}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hidden min-h-11 px-5 sm:inline-flex"
          >
            Coba Web App
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-cream transition-colors hover:bg-white/[0.08] lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/[0.07] bg-ink lg:hidden"
        >
          <nav aria-label="Navigasi mobile" className="container-page flex min-h-full flex-col pt-5 pb-8">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold text-cream transition-colors hover:bg-white/[0.05]"
                  >
                    <span>{link.label}</span>
                    <span className="font-display text-[11px] font-medium text-fog/80">0{index + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={APP_LINKS.web}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-5 w-full"
              onClick={() => setOpen(false)}
            >
              Coba Web App
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <div className="mt-auto pt-10">
              <div className="border-t border-white/[0.08] pt-6">
                <p className="font-display text-[1.35rem] leading-tight font-semibold tracking-[-0.04em] text-cream">
                  Setiap langkah
                  <span className="text-lime"> berarti.</span>
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold text-fog">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="live-dot size-1.5 rounded-full bg-lime text-lime" aria-hidden="true" />
                    Web App tersedia
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
                    APK segera hadir
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

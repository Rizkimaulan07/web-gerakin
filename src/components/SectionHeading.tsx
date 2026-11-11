import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`${isCentered ? "mx-auto flex flex-col items-center text-center" : ""} ${className}`}
    >
      <div className="eyebrow text-fog">
        <span className="eyebrow-dot" aria-hidden="true" />
        {label}
      </div>
      <h2
        className={`mt-5 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.055em] text-cream ${
          isCentered ? "mx-auto" : ""
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-7 text-fog sm:text-base ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

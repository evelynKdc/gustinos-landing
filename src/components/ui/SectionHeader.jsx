import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  const ref = useScrollReveal();
  const isCenter = align === "center";

  return (
    <div
      ref={ref}
      className={`will-animate mb-12 ${isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-xl"}`}
    >
      {eyebrow && (
        <p className="text-raspberry text-xs font-bold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-extrabold text-display-lg text-carbon leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray font-light text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

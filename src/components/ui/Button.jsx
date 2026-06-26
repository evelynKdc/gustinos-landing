const variants = {
  primary:  "bg-raspberry text-white hover:bg-raspberry-dark border border-transparent shadow-sm hover:shadow-md",
  outline:  "bg-transparent border border-carbon text-carbon hover:bg-carbon hover:text-white",
  ghost:    "bg-transparent border-none text-raspberry hover:underline underline-offset-4",
  blush:    "bg-blush text-carbon border border-blush-dark hover:bg-blush-dark",
  white:    "bg-white text-carbon border border-white hover:bg-cream",
};

const sizes = {
  sm: "text-xs font-semibold tracking-wide px-4 py-2 rounded-full",
  md: "text-sm font-semibold tracking-wide px-6 py-3 rounded-full",
  lg: "text-sm font-bold tracking-wider px-8 py-3.5 rounded-full uppercase",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raspberry focus-visible:ring-offset-2";

  const cls = [base, variants[variant] ?? variants.primary, sizes[size] ?? sizes.md, className]
    .filter(Boolean).join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

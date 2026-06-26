/**
 * Logo — componente SVG de Gustiños.
 * Props: size (número en px, default 48), showText (bool, muestra nombre debajo)
 */
export default function Logo({ size = 48, className = "" }) {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-label="Gustiños logo"
    >
      <rect width="600" height="600" fill="transparent" />
      <ellipse cx="300" cy="385" rx="92" ry="14" fill="none" stroke="#E0337A" strokeWidth="9" />
      <rect x="228" y="285" width="144" height="95" rx="16" fill="#fffdfb00" stroke="#E0337A" strokeWidth="9" />
      <path
        d="M300,285 C300,260 274,253 264,233 C254,213 270,187 298,185 C326,183 345,200 341,221 C339,232 328,238 319,232"
        fill="none" stroke="#E0337A" strokeWidth="9" strokeLinecap="round"
      />
      <circle cx="336" cy="196" r="11" fill="#E0337A" />
    
    </svg>
  );
}

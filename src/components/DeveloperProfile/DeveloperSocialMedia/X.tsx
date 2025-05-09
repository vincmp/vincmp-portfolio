interface XProps {
  isActive?: boolean;
}

export function X({ isActive = false }: XProps) {
  const XURL = "https://x.com/https_viincent";

  return (
    <a
      href={XURL}
      target="_blank"
      rel="noopener noreferrer"
      className="socials-items flex-1 flex justify-center"
    >
      <svg
        className={`w-5 h-5 transition-all duration-300 ease-in-out ${
          isActive
            ? "scale-110 text-primary"
            : "group-hover:scale-110 group-hover:text-primary"
        }`}
        viewBox="0 0 256 256"
        fill={isActive ? "var(--text-primary)" : "currentColor"}
      >
        <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" />
      </svg>
    </a>
  );
}

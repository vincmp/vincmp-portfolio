interface ContactIconProps {
  isActive?: boolean;
}

export function ContactIcon({ isActive = false }: ContactIconProps) {
  return (
    <svg
      className={`w-5 h-5 transition-all duration-300 ease-in-out ${
        isActive
          ? "scale-110 text-primary"
          : "group-hover:scale-110 group-hover:text-primary"
      }`}
      viewBox="0 0 256 256"
      fill={isActive ? "var(--text-primary)" : "currentColor"}
    >
      {isActive ? (
        <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192Z" />
      ) : (
        <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z" />
      )}
    </svg>
  );
}

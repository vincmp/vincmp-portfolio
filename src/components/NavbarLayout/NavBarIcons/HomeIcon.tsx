interface HomeIconProps {
  isActive?: boolean;
}

export function HomeIcon({ isActive = false }: HomeIconProps) {
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
        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.13-.13,16,16,0,0,0-21.4,0l-.13.13-80,75.48A16,16,0,0,0,32,115.54V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V164a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4v44a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.54A16,16,0,0,0,218.83,103.77Z" />
      ) : (
        <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" />
      )}
    </svg>
  );
}

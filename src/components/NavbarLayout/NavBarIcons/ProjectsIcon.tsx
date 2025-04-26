interface ProjectsIconProps {
  isActive?: boolean;
}

export function ProjectsIcon({ isActive = false }: ProjectsIconProps) {
  return (
    <svg
      className={`w-5 h-5 transition-all duration-300 ease-in-out ${
        isActive
          ? "scale-110 text-primary"
          : "group-hover:scale-110 group-hover:text-primary"
      }`}
      viewBox="0 0 256 256"
      fill={isActive ? "#1a1a1a" : "currentColor"}
    >
      {isActive ? (
        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,72h64V200H96Zm0-24a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Z" />
      ) : (
        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z" />
      )}
    </svg>
  );
}

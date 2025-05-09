interface LinkedinProps {
  isActive?: boolean;
}

export function Linkedin({ isActive = false }: LinkedinProps) {
  const LinkedinURL = "https://www.linkedin.com/in/vincmpimenta/";

  return (
    <a
      href={LinkedinURL}
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
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
      </svg>
    </a>
  );
}

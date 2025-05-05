import React from "react";
import Image from "next/image";

export default function JBRider() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/TechIcons/JBRider.svg"
          alt="JBRider"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">JetBrains Rider</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        JetBrains Rider é minha IDE de escolha para projetos em C# e .NET. Com
        recursos avançados de refatoração, depuração e integração com o
        ecossistema Microsoft, facilita o desenvolvimento de aplicações robustas
        e escaláveis.
      </p>
    </div>
  );
}

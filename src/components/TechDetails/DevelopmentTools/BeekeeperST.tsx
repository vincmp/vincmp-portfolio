import React from "react";
import Image from "next/image";

export default function BeekeeperST() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/TechIcons/BeekeeperST.svg"
          alt="BeekeeperST"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">Beekeeper Studio</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        Adoto o Beekeeper Studio para gerenciamento de bancos de dados SQL. Sua
        interface intuitiva e suporte a múltiplos SGBDs garantem eficiência e
        confiabilidade na manipulação de dados.
      </p>
    </div>
  );
}

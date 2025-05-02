import React from "react";
import clsx from "clsx";

export type Status = "available" | "busy" | "inProject";

const statusConfig: Record<
  Status,
  { text: string; textColor: string; bgColor: string; dotColor: string }
> = {
  available: {
    text: "Disponível para Trabalho",
    textColor: "text-green-700",
    bgColor: "bg-green-100",
    dotColor: "bg-green-500",
  },
  busy: {
    text: "Ocupado",
    textColor: "text-red-700",
    bgColor: "bg-red-100",
    dotColor: "bg-red-500",
  },
  inProject: {
    text: "Em Projeto",
    textColor: "text-yellow-700",
    bgColor: "bg-yellow-100",
    dotColor: "bg-yellow-500",
  },
};

export interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { text, textColor, bgColor, dotColor } = statusConfig[status];

  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 text-sm font-medium rounded-md",
        textColor,
        bgColor
      )}
    >
      <span className={clsx("w-2 h-2 me-2 rounded-full", dotColor)} />
      {text}
    </span>
  );
}

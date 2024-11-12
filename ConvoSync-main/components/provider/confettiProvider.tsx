"use client";

import { useModal } from "@/hooks/use-model-store";
import ReactConfetti from "react-confetti";

export const ConfettiProvider = () => {
  const { isConfettiOpen, onConfettiClose } = useModal();
  if (!isConfettiOpen) {
    return null;
  }

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => onConfettiClose()}
    />
  );
};

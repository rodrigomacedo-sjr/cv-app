import { useState } from "react";
import NavButton from "./NavButton";

interface FormsPageProps {
  handlePrev: () => void;
  handleNext: () => void;
  children: React.ReactNode;
}

export default function FormsPage({
  handlePrev,
  handleNext,
  children,
}: FormsPageProps) {
  return (
    <div className="flex-1 flex flex-col bg-red-100">
      <div className="flex-1 flex items-center justify-center pt-5">
        <p className="font-semibold flex items-center justify-center text-black text-xl md:text-2xl">
          CV App
        </p>
      </div>
      <div className="flex-17 flex">{children}</div>
      <div className="flex-2 flex items-center justify-center pb-5 gap-10 md:gap-30">
        <NavButton text="prev" handleClick={handlePrev} />
        <NavButton text="next" handleClick={handleNext} />
      </div>
    </div>
  );
}

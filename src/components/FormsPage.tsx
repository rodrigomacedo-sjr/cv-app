import NavButton from "./NavButton";

interface FormsPageProps {
  children: React.ReactNode;
}

export default function FormsPage({ children }: FormsPageProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex items-center justify-center pt-5">
        <p className="font-semibold flex items-center justify-center text-black text-xl md:text-2xl">
          CV App
        </p>
      </div>
      <div className="flex-17 flex items-center justify-center">{children}</div>
      <div className="flex-2 flex items-center justify-center pb-5 gap-10 md:gap-30">
        <NavButton
          text="prev"
          handleClick={(e) => console.log("prev" + e.target)}
        />
        <NavButton
          text="next"
          handleClick={(e) => console.log("next" + e.target)}
        />
      </div>
    </div>
  );
}

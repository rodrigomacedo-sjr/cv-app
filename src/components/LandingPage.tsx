import NavButton from "./NavButton";

interface LandingPageProps {
  handleNext: () => void;
}

export default function LandingPage({ handleNext }: LandingPageProps) {
  return (
    <div className="font-sans weight flex-1 w-full flex flex-col items-center justify-center bg-red-100 px-10 pb-40">
      <h1 className="font-semibold text-black text-7xl m-6">CV App</h1>
      <p className="italic text-black text-2xl mb-10 tracking-widest w-full flex items-center justify-center">
        The Odin Project practice thing
      </p>
      <NavButton text="begin" size={2} handleClick={handleNext} />
    </div>
  );
}

import NavButton from "./NavButton";

export default function LandingPage() {
  return (
    <div className="font-sans weight flex-1 w-full flex flex-col items-center justify-center bg-red-100 px-10 pb-40">
      <h1 className="font-semibold text-black text-7xl m-6">CV App</h1>
      <p className="italic text-black text-2xl mb-10">The Odin Project practice thing</p>
      <NavButton text="begin" handleClick={(e) => console.log(e)} />
    </div>
  );
}

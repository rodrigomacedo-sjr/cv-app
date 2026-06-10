import NavButton from "./NavButton";

export default function LandingPage() {
  return (
    <>
      <h1>CV App</h1>
      <p>The Odin Project practice thing</p>
      <NavButton text="begin" handleClick={(e) => console.log(e)} />
    </>
  );
}

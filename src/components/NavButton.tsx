interface NavButtonProps {
  text: string;
  valid?: boolean;
  size?: 1 | 2 | 3;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function resolveSize(size?: 1 | 2 | 3): string {
  let sizeStyle: string;
  switch (size) {
    case 1:
      sizeStyle = "text-base px-10 py-2 md:text-xl md:px-20 md:py-4";
      break;
    case 2:
      sizeStyle = "text-xl px-20 py-4 md:text-2xl md:px-20 md:py-4";
      break;
    case 3:
    default:
      sizeStyle = "text-3xl px-40 py-8 md:text-6xl md:px-80 md-py:16";
  }
  return sizeStyle;
}

export default function NavButton({
  text,
  valid = true,
  size = 1,
  handleClick,
}: NavButtonProps) {
  const common =
    "outline-none focus:shadow-2xl/50 cursor-pointer text-white font-semibold transition duration-300 ease-in-out rounded-full shadow-xl grow-0";

  const color = valid
    ? "bg-sky-500 hover:bg-sky-700"
    : "bg-slate-500 hover:bg-slate-700";

  return (
    <button
      className={`${resolveSize(size)} ${common} ${color}`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </button>
  );
}

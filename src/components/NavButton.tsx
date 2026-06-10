interface NavButtonProps {
  text: string;
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
  return sizeStyle
}

export default function NavButton({
  text,
  size = 1,
  handleClick,
}: NavButtonProps) {

  return (
    <button
      className={`${resolveSize(size)} text-white font-semibold bg-sky-500 transition duration-300 ease-in-out hover:bg-sky-700 rounded-full shadow-xl grow-0`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </button>
  );
}

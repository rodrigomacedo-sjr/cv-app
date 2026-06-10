interface NavButtonProps {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavButton({ text, handleClick }: NavButtonProps) {
  return (
    <button
      className="text-white text-xl font-semibold bg-sky-500 transition duration-300 ease-in-out hover:bg-sky-700 rounded-full shadow-xl px-20 py-4 grow-0"
      onClick={handleClick}
    >
      <p>{text}</p>
    </button>
  );
}

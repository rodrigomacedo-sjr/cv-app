export interface BigPlusButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BigPlusButton({ handleClick }: BigPlusButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="shadow-xl cursor-pointer bg-cyan-500 hover:bg-cyan-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-cyan-700 text-white font-extrabold text-7xl w-50 rounded-3xl"
    >
      +
    </button>
  );
}

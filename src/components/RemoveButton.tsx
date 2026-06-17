export interface RemoveButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RemoveButton({ handleClick }: RemoveButtonProps) {
  return (
    <button
      type="button"
      className="shadow-xl cursor-pointer bg-red-700 hover:bg-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-600 active:bg-red-900 text-white font-extrabold text-7xl w-50 rounded-3xl"
      onClick={handleClick}
    >
      ✕
    </button>
  );
}

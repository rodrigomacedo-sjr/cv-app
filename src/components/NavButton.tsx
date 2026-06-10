interface NavButtonProps {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavButton({ text, handleClick }: NavButtonProps) {
  return (
    <button onClick={handleClick}>
      <p>{text}</p>
    </button>
  );
}

import { useSelector } from "react-redux";

export default function Attempts() {
  const { attempts, lastGuess } = useSelector((state) => state.game);

  return (
    <div className="mb-3">
      <p><strong>Attempts:</strong> {attempts}</p>
      {lastGuess !== null && <p><strong>Last Guess:</strong> {lastGuess}</p>}
    </div>
  );
}

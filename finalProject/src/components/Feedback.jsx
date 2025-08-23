import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Feedback() {
  const { message, gameOver } = useSelector((state) => state.game);
  return message ? <Alert variant={gameOver ? "success" : "info"}>{message}</Alert> : null;
}

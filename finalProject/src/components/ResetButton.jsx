import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { reset } from "../Redux/gameSlice";

export default function ResetButton() {
  const dispatch = useDispatch();
  return <Button variant="warning" onClick={() => dispatch(reset())}>🔄 Reset Game</Button>;
}

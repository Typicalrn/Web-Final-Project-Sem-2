import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { guess } from "../Redux/gameSlice";

export default function GuessInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { gameOver, difficulty } = useSelector(state => ({
    gameOver: state.game.gameOver,
    difficulty: state.game.difficulty
  }));

  const handleGuess = (e) => {
    e.preventDefault();
    const number = parseInt(input, 10);
    if (!isNaN(number) && number >= 1 && number <= difficulty) {
      dispatch(guess(number));
      setInput("");
    }
  };

  return (
    <Form className="d-flex gap-2 mb-3" onSubmit={handleGuess}>
      <Form.Control
        type="number"
        min="1"
        max={difficulty}
        value={input}
        disabled={gameOver}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" disabled={gameOver}>Guess</Button>
    </Form>
  );
}

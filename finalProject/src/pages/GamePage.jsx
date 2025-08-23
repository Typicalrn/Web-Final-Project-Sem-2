import React, { useEffect } from "react";
import { Container, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import GuessInput from "../components/GuessInput";
import Feedback from "../components/Feedback";
import Attempts from "../components/Attempts";
import ResetButton from "../components/ResetButton";
import { setDifficulty } from "../Redux/gameSlice";

export default function GamePage() {
  const dispatch = useDispatch();
  const difficulty = useSelector(state => state.game.difficulty);

  useEffect(() => {
    console.log("Game page loaded, difficulty:", difficulty);
  }, [difficulty]);

  return (
    <Container className="py-4">
      <Card>
        <Card.Body>
          <h3 className="mb-3">🎯 Number Guesser</h3>

          <Form.Group className="mb-3">
            <Form.Label>Difficulty (max number):</Form.Label>
            <Form.Select
              value={difficulty}
              onChange={(e) => dispatch(setDifficulty(Number(e.target.value)))}
            >
              <option value={50}>Easy (1-50)</option>
              <option value={100}>Medium (1-100)</option>
              <option value={500}>Hard (1-500)</option>
            </Form.Select>
          </Form.Group>

          <p>Guess a number between 1 and {difficulty}</p>

          <Feedback />
          <GuessInput />
          <Attempts />
          <ResetButton />
        </Card.Body>
      </Card>
    </Container>
  );
}

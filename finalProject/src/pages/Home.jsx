import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="text-center py-5">
      <h1>Welcome to Number Guesser Game 🎯</h1>
      <p>Try to guess the number in as few attempts as possible!</p>
      <Button as={Link} to="/game">Start Game</Button>
    </Container>
  );
}

import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "numberGuesser",
  initialState: {
    target: Math.floor(Math.random() * 100) + 1,
    attempts: 0,
    lastGuess: null,
    message: "Guess a number between 1 and 100.",
    gameOver: false,
    difficulty: 100, // store difficulty in Redux
  },
  reducers: {
    setDifficulty(state, action) {
      state.difficulty = action.payload;
      state.target = Math.floor(Math.random() * state.difficulty) + 1;
      state.attempts = 0;
      state.lastGuess = null;
      state.message = `New game started! Guess a number between 1 and ${state.difficulty}.`;
      state.gameOver = false;
    },
    guess(state, action) {
      if (state.gameOver) return;
      const number = action.payload;
      state.attempts += 1;
      state.lastGuess = number;

      if (number === state.target) {
        state.message = `🎉 Correct! You guessed it in ${state.attempts} tries.`;
        state.gameOver = true;
      } else if (number < state.target) {
        state.message = "Too low! Try again.";
      } else {
        state.message = "Too high! Try again.";
      }
    },
    reset(state) {
      state.target = Math.floor(Math.random() * state.difficulty) + 1;
      state.attempts = 0;
      state.lastGuess = null;
      state.message = `New game started! Guess a number between 1 and ${state.difficulty}.`;
      state.gameOver = false;
    },
  },
});

export const { guess, reset, setDifficulty } = gameSlice.actions;
export default gameSlice.reducer;

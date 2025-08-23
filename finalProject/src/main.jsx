import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./Redux/gameSlice";

import App from "./App";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import About from "./pages/About";
import Header from "./components/Header";

const store = configureStore({ reducer: { game: gameReducer } });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>
);

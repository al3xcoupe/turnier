import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./TournamentForm";
import TournamentInfo from "./TournamentInfo";
import TournamentForm from "./TournamentForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TournamentForm />} />
        <Route path="/info" element={<TournamentInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
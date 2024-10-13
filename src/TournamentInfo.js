import React from 'react';
import './TournamentInfo.css';
import { Link } from 'react-router-dom'; // Falls du React Router verwendest


const TournamentInfo = () => {
  return (
    <div className="info-container">
      <h1 className="info-title">Turnier Informationen</h1>
      <p className="info-text">
        Willkommen zum großen Turnier! Hier sind die Details:
      </p>
      <ul className="info-list">
        <li><strong>Turnierdatum:</strong> 15. Dezember 2024</li>
        <li><strong>Ort:</strong> Online, Anmeldung erforderlich</li>
        <li><strong>Teilnehmer:</strong> Einzelspieler und Teams (max. 5 Spieler)</li>
        <li><strong>Anmeldefrist:</strong> 1. Dezember 2024</li>
        <li><strong>Preise:</strong> Trophäen und Gutscheine für die besten Spieler und Teams!</li>
        <li><strong>Regeln:</strong> Alle Details werden nach der Anmeldung per E-Mail verschickt.</li>
      </ul>
      <p className="info-text">
        Melde dich jetzt an und nimm an diesem spannenden Wettbewerb teil!
      </p>

      <Link to="/" className="back-btn">
        Zurück zur Anmeldung
      </Link>
    </div>
  );
};

export default TournamentInfo;

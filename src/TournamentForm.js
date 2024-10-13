import React, { useState } from 'react';
import './Form.css';



const TournamentForm = () => {
  const [isTeam, setIsTeam] = useState(true);

  return (
    <form>
      <h2>Anmeldung für das Fussball-Hallenturnier</h2>

      <div className="button-group">
        <button
          type="button"
          className={isTeam ? "active" : ""}
          onClick={() => setIsTeam(true)}
        >
          Team
        </button>
        <button
          type="button"
          className={!isTeam ? "active" : ""}
          onClick={() => setIsTeam(false)}
        >
          Einzelspieler
        </button>
      </div>

      {isTeam ? (
        <>
          <input type="text" placeholder="Teamname" required />
          <input type="text" placeholder="Name des Team-Captains" required />
          <input type="email" placeholder="Email Adresse" required />
          <input type="tel" placeholder="Telefonnummer" required />
          <label>
            <input type="checkbox" /> Wir sind 5 Spieler
          </label>
        </>
      ) : (
        <>
          <input type="text" placeholder="Name des Spielers" required />
          <input type="email" placeholder="Email Adresse" required />
          <textarea placeholder="Präferenzen (optional)"></textarea>
        </>
      )}

     

      <button type="submit">Anmelden</button>
    </form>
  );
};

export default TournamentForm;

import "./App.css";
import { profile } from "./assets/avatar";
import { useEffect, useState } from "react";

function App() {
  const startTime = 1763024606626;
  const [elapsed, setElapsed] = useState("");

  useEffect(() => {
    function update() {
      const now = Date.now();
      const diff = now - startTime;

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const fmt = `${String(days)} days, ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      setElapsed(fmt);
    }

    update();
    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="main">
        <img className="profile" src={profile.avatar} alt="profile photo"></img>
        <p className="mssg">
          No such initial plan for a <span className="style">portfolio</span>
        </p>
        <p className="cs">coming soon.</p>
        <div className="timer">
          <p>Active Since: </p>
          <p className="time">{elapsed}</p>
        </div>
      </div>

      <div className="credit">
        <div className="mails">
          <img className="mail" src={profile.mail}></img>
          <a className="mailId" href="mailto:sayhi@abhisingh.dev">
            sayhi@abhisingh.dev
          </a>
        </div>
        <p className="endCredit">
          Designed and made by <span className="toro">toro</span>
        </p>
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <h1>Lots of Hearts</h1>
        </div>
      </header>
      <section className="container">
        <div className="container__icon">
          <i
            id="heart-explosion"
            className="fas fa-heart"
            onClick={e => {
              const t = e.target;
              t.classList.add("animate");
              t.addEventListener("animationend", () =>
                t.classList.remove("animate")
              );
            }}
          ></i>
        </div>
      </section>
      <footer className="footer">
        <h4>With Love</h4>
        <h5>~By: Sidney Aguirre</h5>
      </footer>
    </div>
  );
}

export default App;

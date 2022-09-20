import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
        <Dictionary keyDefaultWord="code" />
        <footer className="App-footer">
          <small>
            Coded by
            <a
              href="https://github.com/basagan?tab=overview&from=2022-08-01&to=2022-08-31"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Tatiana Daraev</strong>
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

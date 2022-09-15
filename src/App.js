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
        <Dictionary />
        <footer className="App-footer">
          <small>Coded by Tatiana Daraev</small>
        </footer>
      </div>
    </div>
  );
}

import logo from "./logo.svg";
import "./App.css";
import FrenchAppleCake from "./FrenchAppleCake.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FrenchAppleCake />
      </header>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />Coded by Nezhlya Emin 👩‍💻Open-source code in Github
      </footer>
    </div>
  );
}

export default App;

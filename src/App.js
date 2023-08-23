import logo from "./images/logo.svg";
import "./App.css";
import Dumpling from "./Dumpling.js";



function App() {
  return (
    <div className="font-family">
      <header className="App-header">
        <Dumpling />
        
      </header>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />Coded by Nezhlya Emin 👩‍💻Open-source code in Github
      </footer>
    </div>
  );
}

export default App;

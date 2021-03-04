import './App.css';
import env from "react-dotenv";
import { Layout } from "./components";

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <header className="Nav">
      <h1>
        <a className="Nav-Links" href="/index">Home | </a>
        <a className="Nav-Links" href="/resume">Resume | </a>
        <a className="Nav-Links" href="/portfolio">Portfolio | </a>
        <a className="Nav-Links" href="https://github.com/ecpantalone">github </a>
      </h1>
      </header>
      <Layout />;
      </div>
    </div>
  );
}

export default App;

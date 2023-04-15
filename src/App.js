import "./App.css";

import Converter from "./Converter";
import NavBar from "./Navbar";
import Form from "./Form";
// const { convert } = require("html-to-text");

function App() {
  return (
    <>
      <div className="App container">
        <NavBar />
        <div className="row">
          <header className="App-header col-6">
            <Converter />
          </header>{" "}
          <header className="App-header col-6">
            <Form />
          </header>
        </div>
      </div>
    </>
  );
}

export default App;

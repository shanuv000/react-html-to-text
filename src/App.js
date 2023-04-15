import "./App.css";

// import Converter from "./Converter";
import NavBar from "./Navbar";
import Form from "./Form";
// const { convert } = require("html-to-text");

function App() {
  return (
    <>
      <div className="App container-fluid">
        <NavBar />
        {/* <header className="App-header col-6">
          <Converter />
        </header>{" "} */}
        <header className="App-header ">
          <Form />
        </header>
      </div>
    </>
  );
}

export default App;

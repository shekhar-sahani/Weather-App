import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import TempApp from "./Tempapp/TempApp";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Routes>
            <Route path="/" element={<TempApp />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

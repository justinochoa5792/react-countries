import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Country from "./routes/Country";
import Countries from "./routes/Countries";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries/:countryName" element={<Country />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;

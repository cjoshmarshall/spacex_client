import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js"
import Mission from "./pages/Mission.js";
import Launches from "./pages/Launches"
import Rockets from "./pages/Rockets.js"
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;

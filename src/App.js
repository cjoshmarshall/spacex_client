import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Launches from "./pages/Launches";
import Rockets from "./pages/Rockets";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Rocket from "./pages/Rocket";
import Launch from "./pages/Launch";
import Navbar from "./components/Navbar";

function App() {
  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 30;
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:flight_number" element={<Launch />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:rocket_id" element={<Rocket />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

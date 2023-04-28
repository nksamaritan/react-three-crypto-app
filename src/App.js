import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import LearnMore from "./pages/LearnMore";
import Pricing from "./pages/Pricing";
import BookNow from "./pages/BookNow";
import LocationsPage from "./pages/LocationsPage";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;



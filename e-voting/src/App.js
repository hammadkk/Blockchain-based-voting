import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/navbar";
import Features from "./components/feature";
import Slide from "./components/testomonials";
import Details from "./components/details";
import About from "./components/About";
import Vote from "./components/Vote-Button";
import VendingMachine from "./components/connection";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbarr />
      <Vote />
      <About />
      <Features />
      <Slide />
      {/* <Details /> */}
      {/* <VendingMachine /> */}
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;

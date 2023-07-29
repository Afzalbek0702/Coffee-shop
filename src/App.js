import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Content/>
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Form, Makers, How, Popular, Testimonials, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
      
        <Form/>
        <Makers/>
        <About/>

        <How/>
        <div id="rent">
        <Popular/>
        </div>
        
        <Testimonials/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

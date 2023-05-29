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

        <Popular/>

        
        <Testimonials/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

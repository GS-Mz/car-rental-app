import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Form, Makers, How, Popular, Testimonials, Footer, SearchCarModal } from "./components";
import { useState } from "react";

function App() {

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
      
        <Form abrirModal={() => setModalVisible(true)}/>
        <Makers/>
        <About/>

        <How/>

        
        <Popular abrirModal={() => setModalVisible(true)} cerrarModal={() => setModalVisible(false)}/>
        {modalVisible && <SearchCarModal  cerrarModal={() => setModalVisible(false)}/>}
        
        <Testimonials/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

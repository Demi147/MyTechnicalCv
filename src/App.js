import React from "react";
import MainBar from "./Components/MainBar/mainBar";
import NavBar from "./Components//Util/navBar";
import SideBar from "./Components/SideBar/sideBar";
import Footer from "./Components/Footer/footer";
import "./style.css";
import Particles from "./Components/Util/particles";

function App() {
  return (
    <div>
      <Particles></Particles>
      <NavBar></NavBar>

      <div className="main content">
        <SideBar></SideBar>
        <MainBar></MainBar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from "react";
import MainBar from "./Components/MainBar/mainBar";
import NavBar from "./Components//Util/navBar";
import SideBar from "./Components/SideBar/sideBar";
import Footer from "./Components/Footer/footer";
import "./style.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="main">
        <SideBar></SideBar>
        <MainBar></MainBar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

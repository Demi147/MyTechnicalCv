import React from "react";
import MainBar from "./Components/mainBar";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import Footer from "./Components/footer";
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

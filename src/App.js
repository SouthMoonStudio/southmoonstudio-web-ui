import React from "react";
import Background from "./components/Background";
import BackgroundParallax from "./components/BackgroundParallax";
import Gui from "./components/Gui";
import SlideCollection from "./components/SlideCollection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer theme='dark' />
      <Background>
        <BackgroundParallax />
      </Background>
      <Gui />
      <SlideCollection />
    </React.Fragment>
  );
}

export default App;

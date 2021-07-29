import Header from "./components/header"
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.css";
import {useState} from "react";
import "animate.css/animate.min.css";

function App() {
    const [animateContent, setAnimateContent] =useState(true)
    function animate() {
        if( window.scrollY >= 250){
            // setAnimateContent(false)
        }
        else{
            setAnimateContent(true)
        }
        //console.log(window.scrollY)
    }
    window.addEventListener("scroll", animate)
  return (
    <div className="App">
      <Header />
      <Content anime ={animateContent} />
      <Footer />
    </div>
  );
}

export default App;

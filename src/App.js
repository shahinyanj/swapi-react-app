import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import People from "./Components/People/People";
import User from "./Components/User";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main_container">
          <User />
          <People />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

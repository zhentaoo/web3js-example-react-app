import React from "react";
import "./App.css";
import { UtilExample } from "./components/UtilExample";
import { WalletExample } from "./components/WalletExample";
import logo from "./logo.png";

function App() {
  return (
    <div>
      <div className="Header">
        <img src={logo} alt="logo" />
        xxx
      </div>
      <div>
        <div className="Card">
          <h1>Example Web3 Demo</h1>
        </div>
        <hr />
        <UtilExample />

        <hr />
        <WalletExample />
      </div>
    </div>
  );
}

export default App;

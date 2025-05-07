import { useState } from "react";

import "./App.css";
import CoffeeOrderForm from "./components/coffee-order-form/CoffeeOrderForm";
import CoffeeOrder from "./model/CoffeeOrder";

function App() {
  return (
    <CoffeeOrderForm submitter={(order: CoffeeOrder) => console.log(order)} />
  );
}

export default App;

import { CoffeeOrderForm } from "./components/CoffeeOrderForm";
import type { CoffeeOrder } from "./components/CoffeeOrderForm";

function App() {
  const handleSubmit = (order: CoffeeOrder) => {
    console.log("Сustomer order :", order);
  };

  return (
    <div>
      <CoffeeOrderForm submitter={handleSubmit} />
    </div>
  );
}

export default App;

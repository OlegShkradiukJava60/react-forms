import { CoffeeOrderForm } from "./components/OrderCoffeeForm";
import type { CoffeeOrder } from "./components/OrderCoffeeForm";

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

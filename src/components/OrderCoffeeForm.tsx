
import { useForm } from "react-hook-form";
import "./OrderCoffeeForm.css";

export interface CoffeeOrder {
  name: string;
  type: string;
  flavor: string;
  size: string;
  strength: number;
}

interface Props {
  submitter: (order: CoffeeOrder) => void;
}

export function CoffeeOrderForm({ submitter }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CoffeeOrder>();

  return (
    <div className="app-wrapper">
      <h1>Coffee Order</h1>
      <div className="form-wrapper">
        <form
          onSubmit={handleSubmit((data) => submitter(data))}
          className="coffee-form"
        >
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <select defaultValue="" {...register("type", { required: true })}>
            <option value="" disabled hidden>Select type</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="espresso">Espresso</option>
            <option value="latte">Latte</option>
            <option value="americano">Americano</option>
          </select>

          <select defaultValue="" {...register("flavor", { required: true })}>
            <option value="" disabled hidden>Select flavor</option>
            <option value="none">None</option>
            <option value="vanilla">Vanilla</option>
            <option value="caramel">Caramel</option>
            <option value="hazelnut">Hazelnut</option>
          </select>

          <select defaultValue="" {...register("size", { required: true })}>
            <option value="" disabled hidden>Select size</option>
            <option value="small 100 ml">Small 100 ml.</option>
            <option value="medium 200 ml">Medium 200 ml.</option>
            <option value="large 350 ml">Large 350 ml.</option>
          </select>

          <input
            type="range"
            min={0}
            max={100}
            {...register("strength", { required: true })}
          />
          <span>Strength: {watch("strength") ?? 50}%</span>

          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
}

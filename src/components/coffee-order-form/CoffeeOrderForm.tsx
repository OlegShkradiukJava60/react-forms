import React from "react";
import CoffeeOrder from "../../model/CoffeeOrder";
import { useForm } from "react-hook-form";
import './CoffeeOrderForm.css'
interface Props {
  submitter: (order: CoffeeOrder) => void;
}

const CoffeeOrderForm: React.FC<Props> = ({ submitter }) => {
  const { register, formState, handleSubmit } = useForm<CoffeeOrder>();

  return (
    <form onSubmit={handleSubmit((data) => submitter(data))}>
      <select {...register("type", { required: true })}>
        <option value="">--Select Type--</option>
        <option value="Black">Black</option>
        <option value="Cappuccino">Cappuccino</option>
        <option value="Latte">Latte</option>
        <option value="espresso">espresso</option>
        <option value="Americano">Americano</option>
        <option value="Cortado">Cortado</option>
      </select>
      {formState.errors?.type?.type === "required" && (
        <p className="error">Type of Coffe should be selected</p>
      )}
      <select {...register("flavor", { required: true })}>
        <option value="">--Select flavor--</option>
        <option value="Sweet">Sweet</option>
        <option value="Bitter">Bitter</option>
        <option value="Roasted">Roasted</option>
        <option value="Floral">Floral</option>
        <option value="Fruity"></option>
      </select>
      {formState.errors?.flavor?.type === "required" && (
        <p className="error">Flavor of Coffe should be selected</p>
      )}
      <select {...register("size", { required: true })}>
        <option value="">--Select size--</option>
        <option value="short">short</option>
        <option value="tall">tall</option>
        <option value="grand">grand</option>
      </select>
      {formState.errors?.size?.type === "required" && (
        <p className="error">Size should be selected</p>
      )}
      <div>
        <label htmlFor="strength">Strength</label>
        <input
          type="range"
          defaultValue={50}
          min={0}
          max={100}
          step={1}
          {...register("strength")}
          id="strength"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
};

export default CoffeeOrderForm;

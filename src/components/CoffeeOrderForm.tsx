import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

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

const coffeeOptions = {
  espresso: {
    flavors: [],
    sizes: ["Short 30ml", "Tall 60ml"],
  },
  latte: {
    flavors: ["Vanilla", "Caramel", "Hazelnut"],
    sizes: ["Medium 200 ml", "Large 350 ml"],
  },
  cappuccino: {
    flavors: ["Cinnamon", "Chocolate"],
    sizes: ["Medium 200 ml", "Large 350 ml"],
  },
  americano: {
    flavors: ["None"],
    sizes: ["Small 100 ml", "Medium 200 ml", "Large 350 ml"],
  },
};

export function CoffeeOrderForm({ submitter }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CoffeeOrder>();

  const selectedType = watch("type");
  const [availableFlavors, setAvailableFlavors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);

  useEffect(() => {
    if (selectedType && selectedType in coffeeOptions) {
      setAvailableFlavors(coffeeOptions[selectedType as keyof typeof coffeeOptions].flavors);
      setAvailableSizes(coffeeOptions[selectedType as keyof typeof coffeeOptions].sizes);
      setValue("flavor", "");
      setValue("size", "");
    } else {
      setAvailableFlavors([]);
      setAvailableSizes([]);
      setValue("flavor", "");
      setValue("size", "");
    }
  }, [selectedType, setValue]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Coffee Order</h2>
      <form onSubmit={handleSubmit((data) => submitter(data))}>


        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Coffee Type</label>
          <select
            className={`form-select ${errors.type ? "is-invalid" : ""}`}
            defaultValue=""
            {...register("type", { required: "Coffee type is required" })}
          >
            <option value="" disabled hidden>
              Select type
            </option>
            {Object.keys(coffeeOptions).map((type) => (
              <option key={type} value={type}>
                {type[0].toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          {errors.type && <div className="invalid-feedback">{errors.type.message}</div>}
        </div>


        <div className="mb-3">
          <label className="form-label">Flavor</label>
          <select
            className={`form-select ${errors.flavor ? "is-invalid" : ""}`}
            disabled={!selectedType || availableFlavors.length === 0}
            defaultValue=""
            {...register("flavor", { required: "Flavor is required" })}
          >
            <option value="" disabled hidden>
              Select flavor
            </option>
            {availableFlavors.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          {errors.flavor && <div className="invalid-feedback">{errors.flavor.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Size</label>
          <select
            className={`form-select ${errors.size ? "is-invalid" : ""}`}
            disabled={!selectedType}
            defaultValue=""
            {...register("size", { required: "Size is required" })}
          >
            <option value="" disabled hidden>
              Select size
            </option>
            {availableSizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.size && <div className="invalid-feedback">{errors.size.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Strength: {watch("strength") ?? 50}%</label>
          <input
            type="range"
            className="form-range"
            min={0}
            max={100}
            {...register("strength", { required: true })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Order
        </button>
      </form>
    </div>
  );
}

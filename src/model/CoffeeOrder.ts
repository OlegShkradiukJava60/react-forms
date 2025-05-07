export default interface CoffeeOrder {
    type: string;
    size: "short"| "tall"| "grand";
    flavor: string;
    strength: number;

}
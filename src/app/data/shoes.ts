export interface Shoe {
  id: number;
  brand: string;
  model: string;
  size: number[];
  color: string[];
  background: string;
  price: number;
  image: string;
}

const shoes: Shoe[] = [
  {
    id: 1,
    brand: "Nike",
    model: "Air Max 270 React",
    size: [8, 9, 10, 11, 12],
    color: ["blue", "red", "green"],
    background: "blue",
    price: 120,
    image: "/shoes/blue.png",
  },
  {
    id: 2,
    brand: "Nike",
    model: "Zoom Pegasus 38",
    size: [8, 9, 10, 11, 12],
    color: ["blue", "red", "green"],
    background: "green",
    price: 180,
    image: "/shoes/green.png",
  },
  {
    id: 3,
    brand: "Nike",
    model: "Dunk Low",
    size: [8, 9, 10, 11, 12],
    color: ["blue", "red", "green"],
    background: "red",
    price: 75,
    image: "/shoes/red.png",
  },
];

export default shoes;

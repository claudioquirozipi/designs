import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

interface Shoe {
  id: string;
  brand: string;
  model: string;
  size: number;
  color: string;
  price: number;
}

const shoes: Shoe[] = [
  {
    id: "1",
    brand: "Nike",
    model: "Air Max 90",
    size: 10,
    color: "White/Black",
    price: 120,
  },
  {
    id: "2",
    brand: "Adidas",
    model: "Ultraboost",
    size: 9,
    color: "Grey/Black",
    price: 180,
  },
  {
    id: "3",
    brand: "Reebok",
    model: "Club C 85",
    size: 8,
    color: "White/Green",
    price: 75,
  },
  {
    id: "4",
    brand: "New Balance",
    model: "990v5",
    size: 10.5,
    color: "Grey",
    price: 175,
  },
  {
    id: "5",
    brand: "Puma",
    model: "Suede Classic",
    size: 11,
    color: "Black/White",
    price: 65,
  },
  {
    id: "6",
    brand: "Vans",
    model: "Old Skool",
    size: 8.5,
    color: "Red/White",
    price: 60,
  },
  {
    id: "7",
    brand: "Converse",
    model: "Chuck Taylor All Star",
    size: 7,
    color: "Black",
    price: 55,
  },
  {
    id: "8",
    brand: "Fila",
    model: "Disruptor 2",
    size: 9.5,
    color: "White/Navy",
    price: 75,
  },
  {
    id: "9",
    brand: "Timberland",
    model: "6-Inch Premium Waterproof Boots",
    size: 10,
    color: "Wheat",
    price: 190,
  },
  {
    id: "10",
    brand: "Dr. Martens",
    model: "1460",
    size: 8,
    color: "Black",
    price: 150,
  },
];

export const shoesRouter = createTRPCRouter({
  all: publicProcedure.query(() => {
    return shoes;
  }),
});

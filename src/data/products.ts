export interface Product {
  id: number;
  image: string;
  brand: string;
  name: string;
  price: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    image: "/product1.webp",
    brand: "GANNI",
    name: "Sweater Graphic Wool Mix Bunny Crewneck",
    price: 2000000,
    tags: ["Nuevo", "Exclusivo"],
  },
  {
    id: 2,
    image: "/product2.webp",
    brand: "GANNI",
    name: "Chaleco Cotton Mix Striped",
    price: 1400000,
    tags: ["Eco", "Tendencia"],
  },
  {
    id: 3,
    image: "/product3.webp",
    brand: "GANNI",
    name: "Cardigan Future Wool Mix Short Sleeve",
    price: 2000000,
    tags: ["Oferta", "Popular"],
  },
  {
    id: 4,
    image: "/product4.webp",
    brand: "GANNI",
    name: "Chaqueta Print Denim",
    price: 2600000,
    tags: ["Edición Limitada", "Lujo"],
  },
  {
    id: 5,
    image: "/product5.webp",
    brand: "GANNI",
    name: "Vestido Print Denim",
    price: 2200000,
    tags: ["Nuevo", "Recomendado"],
  },
  {
    id: 6,
    image: "/product6.webp",
    brand: "GANNI",
    name: "Vestido Flock Check Suiting Corset",
    price: 2600000,
    tags: ["Tendencia", "Estilo"],
  },
  {
    id: 7,
    image: "/product7.webp",
    brand: "GANNI",
    name: "Sweater Future Wool Mix Oversized",
    price: 2200000,
    tags: ["Popular", "Asequible"],
  },
  {
    id: 8,
    image: "/product8.webp",
    brand: "GANNI",
    name: "Vestido Cotton Poplin Tie String",
    price: 1400000,
    tags: ["Lujo", "Exclusivo"],
  },
];

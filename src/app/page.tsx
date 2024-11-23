import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Cards from "./components/cards";
import ProductCard from "./components/productCard";

export default function Home() {
  return (
   <div>
<Navbar />
<Hero />
<Cards />
<ProductCard />

   </div>
  );
}

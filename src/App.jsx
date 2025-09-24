// src/App.jsx
import React from "react";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div>
      <header style={{ textAlign: "center", padding: "18px 0", background:"#f7f9fc" }}>
        <h1>Photos</h1>
      </header>

      <main>
        <ProductList />
      </main>
    </div>
  );
}

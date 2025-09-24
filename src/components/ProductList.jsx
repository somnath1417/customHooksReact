import React from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

const API = "https://api.escuelajs.co/api/v1/products";

export default function ProductList() {
  const { data, loading, error, refetch } = useFetch(API);

  if (loading) {
    return (
      <div className="center">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center error">
        <p>{"Error: Failed to fetch"}</p>
      </div>
    );
  }

  // Check if data is empty
  if (!data || data.length === 0) {
    return (
      <div className="center mt-100">
        <p>Loading....</p>      
      </div>
    );
  }

  return (
    <div className="product-container">
      <ul className="grid">
        {data.map((p) => (
          <li className="card" key={p.id}>
            <div className="image-wrap">
              <img src={p.images?.[0]} alt={p.title} loading="lazy" />
            </div>
            <h3 className="title">{p.title}</h3>
            <p className="price">₹{p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

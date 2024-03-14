import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:9000/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <header>
        <h1>Product List</h1>
      </header>
      <div id="products">
        {products.map((product) => (
          <div key={product._id} className="card">
            <Link to={`/product/${product._id}`}>
              {/* Change the Link destination to the product detail page */}
              <div className="card-image">
                <img src={product.image} alt={product.name} />
                <div className="heart-icon">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </Link>
            <div className="card-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    console.log("Clicked 'Become a Seller'");
    navigate("/sell"); // Use navigate to redirect to the seller form page
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (!id) {
          throw new Error("Product ID is missing");
        }

        const response = await fetch(`http://localhost:9000/products/${id}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (!id) {
    return <div>No product ID provided</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="ProductDetailContainer">
      <h2>{product.name}</h2>
      <img className="images" src={product.image} alt={product.name} />
      <div className="butn" style={{ backgroundColor: "green" }}>
        <button onClick={handleSubmit}>Become a seller</button>
      </div>
      <div className="productInfo">
        <p>Price: ₹{product.price}kg</p>
        <p>Last 30 Days</p>

        <p>
          High:{product.high} Low:{product.low}
        </p>
        <p>Description: {product.description}</p>
        <p>Sown in :{product.sownin}</p>
        <p>Sowing months:{product.sowingmonths}</p>
        <p>Yield:{product.yield}</p>
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Humnabad</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

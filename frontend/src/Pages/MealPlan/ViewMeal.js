// ViewMeal.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewMeal = () => {
  const { id } = useParams(); // Extract the meal ID from the URL
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMeal();
  }, [id]); // Fetch meal whenever the id changes

  const fetchMeal = async () => {
    try {
      const response = await fetch(`http://localhost:9000/api/meals/${id}`);
      const data = await response.json();
      setMeal(data);
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  return (
    <div style={{ marginTop: "20px" }} className="container">
      <h2
        style={{
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        View Meal
      </h2>
      {meal ? (
        <div>
          <div className="meal-attribute">
            <label style={{ fontWeight: "bold", fontSize: "25px" }}>
              Name:
            </label>
            <span>{meal.name}</span>
          </div>
          <div className="meal-attribute">
            <label
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                fontSize: "25px",
              }}
            >
              Description:
            </label>
            <span>{meal.description}</span>
          </div>
          <div className="meal-attribute">
            <label
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                fontSize: "25px",
              }}
            >
              Image:
            </label>
            {meal.image && (
              <img
                style={{ width: "50%", height: "50%" }}
                src={`data:image/jpeg;base64,${meal.image}`}
                alt={meal.name}
              />
            )}
          </div>
          <Link
            to="/mealList"
            className="btn"
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              marginBlock: "20px",
            }}
          >
            Back
          </Link>
        </div>
      ) : (
        <p>Loading meal...</p>
      )}
    </div>
  );
};

export default ViewMeal;

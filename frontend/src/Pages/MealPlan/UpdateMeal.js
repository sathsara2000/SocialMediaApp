// UpdateMeal.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./update-meal.css"; // Import the CSS file for styling

const UpdateMeal = () => {
  const { id } = useParams(); // Extract the meal ID from the URL
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [updateImage, setUpdateImage] = useState("keep"); // Default to keeping the current image

  useEffect(() => {
    fetchMeal();
  }, []); // Fetch meal details when component mounts

  const fetchMeal = async () => {
    try {
      const response = await fetch(`http://localhost:9000/api/meals/${id}`);
      const data = await response.json();
      setName(data.name);
      setDescription(data.description);
      setImage(data.image); // Set the image data
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);

    if (updateImage === "update" && image) {
      formData.append("imageFile", image); // Append the new image file if updateImage is 'update'
    } else if (updateImage === "keep" && image) {
      // Convert the base64 image string to a Blob
      const byteCharacters = atob(image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/jpeg" });

      // Create a File object from the Blob
      const file = new File([blob], "current_image.jpeg", {
        type: "image/jpeg",
      });

      // Append the File object to the form data
      formData.append("imageFile", file);
    }

    try {
      const response = await fetch(`http://localhost:9000/api/meals/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (response.ok) {
        window.location.href = "/mealList"; // Redirect to the meal list page after successful update
      } else {
        console.error("Failed to update meal:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating meal:", error);
    }
  };

  return (
    <div style={{ marginTop: "20px" }} className="container">
      <h2 style={{ fontWeight: "bold", fontSize: "30px" }}>Update Meal Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            style={{ fontWeight: "bold", marginTop: "20px" }}
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bold" }} htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        {image && (
          <div className="form-group">
            <label style={{ fontWeight: "bold" }}>Current Image:</label>
            <img src={`data:image/jpeg;base64,${image}`} alt="Meal" />
          </div>
        )}
        <div className="form-group">
          <label style={{ fontWeight: "bold" }}>Update Image:</label>
          <div>
            <label>
              <input
                type="radio"
                value="keep"
                checked={updateImage === "keep"}
                onChange={() => setUpdateImage("keep")}
              />
              Keep current image
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="update"
                checked={updateImage === "update"}
                onChange={() => setUpdateImage("update")}
              />
              Update image
            </label>
            {updateImage === "update" && (
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
              />
            )}
          </div>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateMeal;

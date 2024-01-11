import React, { useState } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Lottie from "lottie-react";
import animation1 from "../images/fork.json";

function Recipe() {
  const [recipeData, setRecipeData] = useState(null);

  const handleAPICall = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        console.log(response.data);
        setRecipeData(response.data.meals[0]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
    <div
    style={{
      height: "80px",
      width: "80px",
      justifyContent: "center",
      margin: "auto",
    }}
  >
    <Lottie animationData={animation1} loop={true} />
  </div>
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    }}>
      <Button
        onClick={handleAPICall}
        style={{
          backgroundColor: "teal",
          fontSize: "25px",
          borderColor: "teal",
        }}
        variant="primary"
      >
        Get Random Recipe
      </Button>

      {recipeData && (
        <div>
          <h1>{recipeData.strMeal}</h1>
          <img style={{height:"100px", width:"100px"}} src={recipeData.strMealThumb} alt={recipeData.strMeal} />
          <h2>Ingredients:</h2>
          <ul>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredient = recipeData[`strIngredient${index}`];
              const measure = recipeData[`strMeasure${index}`];

              if (ingredient && measure) {
                return (
                  <li key={index}>
                    {`${measure} ${ingredient}`}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <p>
            {recipeData.strInstructions}
          </p>
        </div>
      )}
    </div>
    </>
  );
}

export default Recipe;
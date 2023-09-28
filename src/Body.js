import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import RecipeCard from "./RecipeCard";

export default function Body() {
  return (
    <div className="container">
      <div className="intro"><h1>Dumplings</h1>
      <p>
      Are you ready to embark on a culinary journey that will take your taste buds on a whirlwind adventure? You've come to the right place! 
      I am passionate about sharing the secrets behind crafting these delectable parcels of joy that have captured the hearts of food lovers worldwide. 
        Chinese dumplings, or jiaozi, are one of the most historic foods in
        existence. Much of the food we eat today has only been around for a few
        hundred years, but the Chinese have made jiaozi for over 2000 years.
        Dumplings are delicious with each bite – they’re warm, savory,
        beautiful, and a fantastic addition to a meal.{" "}
        <p>
          {" "}
          Learn more on
          <a href="https://en.wikipedia.org/wiki/Dumpling"> Wikipedia.</a>
        </p>
      </p></div>
      <div className="wrapper">
        <p>Dumpling wrappers, also known as dumpling skins or dumpling wrappers, are a fundamental component of various types of dumplings found in many Asian cuisines and beyond. </p>
      </div>
    
      <div className="recipeCards ">
        <div className="col">
          <div className="row">
            <h2 className="recipes">Recipes</h2>
            <RecipeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

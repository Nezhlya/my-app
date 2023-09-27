import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import RecipeCard from "./RecipeCard";

export default function Body() {
  return (
    <div>
      <h1>Dumplings</h1>
      <p className="intro">
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
      </p>
    
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

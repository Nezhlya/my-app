import React from "react";
import RecipesData from "./Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import RecipesCard from "./RecipesCard";


export default function Body() {
  return (
    <div>
      <h1>Dumplings</h1>
      <p>
        Chinese dumplings, or jiaozi, are one of the most historic foods in
        existence. Much of the food we eat today has only been around for a few
        hundred years, but the Chinese have made jiaozi for over 2000 years.
        Dumplings are delicious with each bite – they’re warm, savory,
        beautiful, and a fantastic addition to a meal. Today, we will give you a
        brief rundown of the famous Chinese dumpling.{" "}
        <p>
          {" "}
          Learn more on
          <a href="https://en.wikipedia.org/wiki/Dumpling"> Wikipedia.</a>
        </p>
      </p>
      <div className="container">
        <div className="row">
              {RecipesData.map((prod) => (

            <div className="col">
                      <RecipesCard key={prod.name} name={prod.name} description={prod.description} url={prod.url} img={prod.image}/>
                      
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}

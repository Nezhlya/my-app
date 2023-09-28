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
          <h3>Dumpling wrappers recipe</h3>
        <p>Dumpling wrappers, also known as dumpling skins or dumpling wrappers, are a fundamental component of various types of dumplings found in many Asian cuisines and beyond. </p>
      <div className="recipeWrapper">
        <div >
<ul>Ingredients
  <li>2 cups all-purpose flour</li>
  <li>1/2 teaspoon salt</li>
  <li>1/2 teaspoon salt</li>
</ul>
        </div>Instructions
        <ul>
          <li>In a large mixing bowl, combine the all-purpose flour and salt. Stir them together to evenly distribute the salt.</li>
          <li>
          Gradually add warm water to the flour mixture. You may not need to use all the water, so add it a little at a time. Start by using a fork or chopsticks to mix the water into the flour.
          </li>
          <li>Once the dough starts to come together, use your hands to knead it. Knead the dough for about 5-10 minutes or until it becomes smooth and elastic. If the dough is too sticky, you can add a bit more flour. If it's too dry, add a little more water.</li>
       <li>Shape the dough into a ball and place it back in the mixing bowl. Cover it with a clean kitchen towel and let it rest for about 30 minutes. This resting period allows the dough to relax and become easier to work with.</li>
        <li>After resting, divide the dough into smaller portions, depending on how many wrappers you want to make. Roll each portion into a log and cut it into small pieces, roughly the size of a walnut.</li>
        <li>Take one of the small dough pieces and flatten it with your palm. Using a rolling pin, roll it into a thin, round wrapper. Rotate the dough as you roll to create an even circle. You can make the wrappers as thin or thick as you prefer.</li>
        <li>Continue rolling out the rest of the dough pieces into wrappers. Keep the wrappers covered with a clean kitchen towel or plastic wrap to prevent them from drying out.</li>
        <li>You can use the dumpling wrappers immediately for your dumpling filling, or you can stack them with a small piece of parchment paper between each one and store them in an airtight container in the refrigerator for a day or two. If you want to store them for a more extended period, you can freeze them with parchment paper between each wrapper.</li>
        </ul>
        <div>

        </div>
      </div>
      <p>Dumpling wrappers are a versatile and essential component of dumpling-making, allowing for a wide range of creative possibilities when it comes to fillings, shapes, and cooking methods. Whether you're making traditional dumplings or experimenting with innovative flavors, the wrapper plays a crucial role in the overall dumpling experience.</p>
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

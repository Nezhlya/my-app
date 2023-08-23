import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import RecipeCard from "./RecipeCard";

export default function Body() {
  return (
    <div>
      <h1>Dumplings</h1>
      <p>
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
      <h3>
        Dumplings are not only delicious but also have some fascinating and fun
        facts associated with them from around the world:
      </h3>
      <ul>
        <li>
          Dumplings are found in cuisines across the globe, from Chinese jiaozi
          and Japanese gyoza to Italian ravioli, Polish pierogi, and Indian
          samosas. This universal appeal demonstrates the love for dumplings
          transcends borders.
        </li>
        <li>
          There are countless varieties of dumplings, each with its unique
          filling, wrapper, and cooking method. Whether they're steamed, boiled,
          fried, or baked, there's a dumpling for everyone.
        </li>
        <li>
          In many Asian cultures, dumplings are a traditional food during Lunar
          New Year celebrations. Their shape resembles ancient Chinese gold and
          silver ingots, symbolizing wealth and prosperity.
        </li>
        <li>
          There's even a National Dumpling Day celebrated in the United States
          on September 26th, although dumplings are enjoyed worldwide
          year-round.
        </li>
        <li>
          The world record for the largest dumpling ever made goes to a dumpling
          made in China that weighed over 1.13 tons!
        </li>
        <li>
          In Chinese culture, it's customary to eat dumplings in even numbers
          during celebrations, as odd numbers are associated with funerals.
        </li>
        <li>
          Some dumplings, like the Chinese "xiaolongbao," are known for hiding a
          delicious broth inside the filling. When you bite into them, you get a
          burst of flavorful soup.
        </li>
        <li>
          Folding dumplings is an art form. Various cultures have their unique
          folding techniques, resulting in beautifully shaped dumplings. For
          example, the Japanese have a gyoza folding technique that creates a
          pattern on one side.
        </li>
        <li>
          In Russia, there's a tradition where friends and family gather to make
          pelmeni (Russian dumplings) together. The person who folds the most
          dumplings in the least amount of time is considered the winner.
        </li>
        <li>
          Dumplings have even made it to space! Astronauts have enjoyed
          dumplings as part of their meals on the International Space Station.
        </li>
        <li>
          In some cultures, particularly in Russia and Ukraine, it's a tradition
          to hide small objects like coins or small figurines inside dumplings.
          The item you find in your dumpling is believed to foretell your
          future.
        </li>
        <li>
          Many regions have annual dumpling festivals where you can sample a
          wide variety of dumplings from different cultures. The annual Pierogi
          Fest in Whiting, Indiana, is a popular example.
        </li>
        <li>
          Dumplings often carry cultural and symbolic meanings. For example, in
          Tibetan culture, the shape of the dumpling can represent different
          elements of the universe.
        </li>
        <li>
          Dumplings can be nutritious, especially when filled with vegetables
          and lean proteins. They provide a balanced meal with carbohydrates,
          protein, and vitamins.
        </li>
      </ul>
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

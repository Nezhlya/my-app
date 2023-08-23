import React from "react";
import dumpling4 from "./images/dumpling4.jpg";
import dumpling2 from "./images/dumpling2.jpg";
import dumpling5 from "./images/dumpling5.jpg";
import Card from "react-bootstrap/Card";


export default function RecipeCard() {
  return data.map((i, index) => <CardView key={index} {...i} />);
}

const CardView = ({
  title = "Default Title",
  text = "Default Text",
  imgsrc = "default_holder.js/100px180",
  link = "default_holder",
}) => (
  <Card style={{ width: "18rem" }} className="mx-auto m-4">
    <Card.Img variant="top" src={imgsrc} className="mx-auto m-2"/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <a href={link} target="_blank" rel="noreferrer">
        Go to Recipe
      </a>
    </Card.Body>
  </Card>
);
const data = [
  {
    title: "Steamed Chicken Dumplings",
    text: "Steamed chicken dumplings are considered a relatively healthy choice compared to their fried counterparts. They are lower in fat and calories, making them a popular choice for those looking for a tasty but lighter meal.",
    imgsrc: dumpling2,
    link: "https://www.theflavorbender.com/steamed-chicken-dumplings-recipe/#recipe",
  },
  {
    title: "Traditional Chinese Pork Dumplings",
    text: "These Chinese dumplings are from Liana Cafe House in Seattle's International District. They sell these traditional fried pork dumplings from a tiny takeout shop but with this recipe, you can see how to make them at home!",
    imgsrc: dumpling4,
    link: "https://www.allrecipes.com/recipe/228052/chinese-pork-dumplings/",
  },
  {
    title: "Vegetable Dumplings (Potstickers!)",
    text: "Veggie potstickers are a delicious and versatile dish that showcases the beauty of plant-based ingredients. Whether you're a vegetarian, vegan, or simply a fan of dumplings, they are a flavorful and satisfying option to explore. ",
    imgsrc: dumpling5,
    link: "https://www.recipetineats.com/vegetable-dumplings-potstickers/#wprm-recipe-container-72734",
  },
];

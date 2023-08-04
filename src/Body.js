import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import cake from "./French-Apple-Cake.jpg";
import cakePowder from "./Cake-powder.jpg";

export default function Body() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <p>
            The French Apple Cake, also known as "Gateau aux Pommes" in French,
            is a classic and beloved dessert in French cuisine. It is a simple
            yet elegant cake that beautifully showcases the natural sweetness
            and flavor of apples. This delightful treat is commonly served in
            French households, patisseries, and cafes. The French Apple Cake
            typically consists of a tender and moist batter infused with small
            chunks or slices of fresh apples. The apples are often mixed with a
            touch of cinnamon or vanilla, adding a warm and aromatic note to the
            cake. The recipe for French Apple Cake is quite versatile, allowing
            for various adaptations and personal touches. Some versions use a
            buttery batter similar to that of a pound cake, while others
            incorporate a lighter texture with the addition of yogurt or crème
            fraîche. One unique aspect of the French Apple Cake is its rustic
            appearance. It is often baked in a round or rectangular cake pan,
            without the use of intricate decorations or frosting. The focus is
            on the simplicity of the ingredients and the natural beauty of the
            baked apples peeking through the golden cake.
          </p>
          <img
            src={cakePowder}
            alt="cake with powdered sugar"
            className="img-fluid"
          />
        </div>
        <div className="col-sm">
          <p>
            {" "}
            <img src={cake} alt="cake" className="img-fluid" />
            <h3>Recipe</h3>
            French Apple Cake makes one 9-inch round cake 1 cup all-purpose
            flour 1 teaspoon baking powder 1/4 teaspoon fine sea salt 3/4 cup +
            1 tablespoon granulated sugar, divided 2 large eggs, room
            temperature 1 teaspoon pure vanilla extract 1/2 cup unsalted butter,
            melted 2 large baking apples, peeled and cut into 1/2-inch chunks
            juice of 1/2 medium lemon (about 1 tablespoon) For serving
            (optional): confectioner’s sugar Preheat oven to 375F. Grease a
            9-inch springform pan. Set aside. In a small bowl, whisk together
            flour, baking powder, and salt. Set aside. Combine 3/4 cup sugar,
            eggs, and vanilla in a large mixing bowl. Whisk for about 2 minutes,
            or until uniform in appearance and a bit thick. It will be grainy.
            Whisk half the dry ingredients into the egg mixture, followed by
            half the melted butter. Repeat with remaining dry ingredients and
            butter. In a small mixing bowl, toss together apple chunks and lemon
            juice. Add apples to cake batter and fold together with a silicone
            spatula or wooden spoon. Transfer to prepared pan and spread into an
            even layer. Scatter remaining tablespoon of sugar over the top. Tap
            full pan on the counter 5 times before baking for 40-50 minutes, or
            until golden. A toothpick inserted in the center should come back
            clean or with only a few moist crumbs. Let cake cool in the pan on a
            rack for 15 minutes. Run a thin, flexible knife around the edge of
            the pan before releasing the springform. Slice and serve warm or at
            room temperature. Dust with confectioners sugar, if desired.
            Leftover cake will keep covered at room temperature for two days or
            in the refrigerator for up to five.
          </p>
        </div>
      </div>
    </div>
  );
}

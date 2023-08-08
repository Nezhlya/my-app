import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import cake from "./French-Apple-Cake.jpg";
import cakePowder from "./Cake-powder.jpg";

export default function Body() {
  return (
    <div className="grid">
      <div className="left"></div>

      <h1 className="main-heading">
        French<span>Apple</span>Cake
      </h1>

      <p className="main-para">
        Indulge in the Irresistible Delight of French Apple Cake: A Perfect
        Fusion of Flavors and Elegance
      </p>


      <div className="para-wrap--one">
        <p className="para-one">
          <p>
            The French
            <a href="https://en.wikipedia.org/wiki/Apple_cake">Apple Cake</a>,
            also known as "Gateau aux Pommes" in French, is a classic and
            beloved dessert in French cuisine. It is a simple yet elegant cake
            that beautifully showcases the natural sweetness and flavor of
            apples. This delightful treat is commonly served in French
            households, patisseries, and cafes. The French Apple Cake typically
            consists of a tender and moist batter infused with small chunks or
            slices of fresh apples. The apples are often mixed with a touch of
            cinnamon or vanilla, adding a warm and aromatic note to the cake.
            The recipe for French Apple Cake is quite versatile, allowing for
            various adaptations and personal touches. Some versions use a
            buttery batter similar to that of a pound cake, while others
            incorporate a lighter texture with the addition of yogurt or crème
            fraîche. One unique aspect of the French Apple Cake is its rustic
            appearance. It is often baked in a round or rectangular cake pan,
            without the use of intricate decorations or frosting. The focus is
            on the simplicity of the ingredients and the natural beauty of the
            baked apples peeking through the golden cake.
          </p>
        </p>
        <p className="para-two">
          
        </p>
      </div>

      <img src={cakePowder} alt="cake" className="cake" />

      <img src={cake} alt="powdered-sugar" className="cupcake" />

      <div className="para-wrap--two">
        <p className="para-four">
          Eum illo modi repellendus iure animi non ducimus at hic nesciunt
          corporis distinctio consequatur, itaque totam quasi consequuntur id
          molestias officia dolore. Deleniti perferendis veniam aperiam
          quisquam. Ratione repellendus id labore et veritatis pariatur dolor
          nisi quaerat voluptas, error aperiam minus quos placeat, voluptatem
          blanditiis ex nam consequatur eaque&nbsp;fugit.
        </p>
        <p className="para-five">
          Inventore, repudiandae temporibus vel. Molestias dignissimos dolorem
          veniam provident, minus quibusdam rerum quam illum numquam quisquam,
          quaerat nostrum labore natus modi illo odit, quae possimus corporis
          voluptatibus officiis aspernatur laborum fuga sunt, asperiores
          tempora. Aperiam nesciunt, placeat doloribus vel soluta voluptates
          dicta tenetur cupiditate, quidem non molestiae ratione
          veritatis&nbsp;natus!
        </p>
        <p className="para-six">
          Laboriosam alias fuga commodi aut quod assumenda officia iusto
          mollitia delectus eveniet debitis veritati explicabo in labore harum,
          hic voluptm quisquam accusamus neque deserunt id corporis consectet.
          Suscipit minus mollitia atque minima adipisci modi eos debitis, culpa
          error. Voluptate non fugit molesti, consectet sapiente
          soluta&nbsp;illum.
        </p>
        <img
          src="https://res.cloudinary.com/jduquain/q_auto,f_auto/v1540686287/squiggle-2_bwd6id.png"
          alt="squiggle"
          class="squiggle"
        />
      </div>
    </div>
  );
}

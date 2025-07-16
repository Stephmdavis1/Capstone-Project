import chefsMarioAndAdrian1Img from "./assets/chefs-mario-and-adrian_1.jpg";
import chefsMarioAndAdrian2Img from "./assets/chefs-mario-and-adrian_2.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>Our Story</h2>
        <p>
        Nestled in the heart of the city, Little Lemon is a cozy Mediterranean restaurant dedicated to bringing bold flavors, fresh ingredients, and warm hospitality to every table. Inspired by the sun-soaked coasts of Southern Europe, our menu blends traditional Mediterranean recipes with a modern twist—featuring vibrant dishes from Greece, Italy, Spain, and the Levant.
        From zesty lemon-herb chicken and fresh seafood to handmade mezze and hearty vegetarian options, every dish at Little Lemon is crafted with care using locally sourced produce and authentic spices. Whether you're stopping by for a relaxed lunch, a romantic dinner, or a family gathering, our inviting atmosphere and friendly staff make every visit feel like home.
        At Little Lemon, we believe good food brings people together—and we’re proud to serve meals that nourish both body and soul.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrian1Img} alt="Chefs Mario and Adrian #1" />
        <img src={chefsMarioAndAdrian2Img} alt="Chefs Mario and Adrian #2" />
      </div>
    </section>
  );
};

export default OurStory;

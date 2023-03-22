import React from "react";
import Categories from "../../components/Categories/Categories";
import Contacts from "../../components/Contacts/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contacts />
    </div>
  );
};

export default Home;

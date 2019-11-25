import React from "react";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItems from "../components/CarouselItems.jsx";
import Footer from "../components/Footer.jsx";

import "../assets/styles/App.scss";

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi lista">
      <Carousel>
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
      </Carousel>
    </Categories>

    <Categories title="Tendencias">
      <Carousel>
        <CarouselItems />
        <CarouselItems />
        <CarouselItems />
      </Carousel>
    </Categories>

    <Categories title="PlatziVideo :)">
      <Carousel>
        <CarouselItems />
        <CarouselItems />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;

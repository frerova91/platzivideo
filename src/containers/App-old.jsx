import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItems from "../components/CarouselItems.jsx";
import Footer from "../components/Footer.jsx";

import "../assets/styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState([]); //estados y actualizacion, useState recibe como propiedad elementos para inicializar estados(string,number.boolean,object,Array).

  useEffect(() => {
    //Aqui trabajamos con eventos de todo tipo.
    fetch("http://localhost:3000/initialState") // direccion de la API
      .then(response => response.json()) //transformando a json
      .then(data => setVideos(data)); // se lo pasamos a setVideos
  }, []); // si no le pasamos este segundo valo [] ese arreglo vacio se produce un loop infinito

  //console.log(videos);

  return (
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
};

export default App;

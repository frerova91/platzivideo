import { useEffect, useState } from "react";

const useInitialState = API => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  }); //estados y actualizacion, useState recibe como propiedad elementos para inicializar estados(string,number.boolean,object,Array).

  useEffect(() => {
    //Aqui trabajamos con eventos de todo tipo.
    fetch(API) // direccion de la API
      .then(response => response.json()) //transformando a json
      .then(data => setVideos(data)); // se lo pasamos a setVideos
  }, []); // si no le pasamos este segundo valo [] ese arreglo vacio se produce un loop infinito

  return videos;
};

export default useInitialState;

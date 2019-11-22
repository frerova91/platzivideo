# 1. inicializar un proyecto en git local

    git init

# 2. inicializar el proyecto en npm con el flag -y(preconfigura)

    npm init -y

# 3. Ahora empezamos a crear nuestro proyecto siempre siguiendo el estandar de como organizar el proyecto para estar acorde con las buenas practicas del mercado como programador

    en el documento de la calse hay un foto de como debe ser la estructura.

    src: (develop){

        components:{
            HelloWord.jsx
        }
        index.js
    }

    public: (production){
        index.html
    }

    OTROS ARCHIVOS DE CONFIG.

# 4. instalemos React con: (verifica si hay vulnerabilidades y tomo una desicion sobre usar el fix o no)

    npm install react react-dom

# 5. Procedemos a configurar index.js con la ruta con la cual react va a renderizar la app

    import React from "react";
    import ReactDOM from "react-dom";
    import HelloWord from "./components/HelloWorld.jsx";

    // Render recibe 2 parametros el componente y donde lo va a mostar.
    ReactDOM.render(<HelloWord />, document.getElementById(app));

# 6. Recuerda tambien configurar el html para que funcione

    <body>
    <div id="app"></div>
    </body>

# 7. Babel de javaScript moderno a navegadores antiguos.

    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

# 8. Configurar babel crearemos un archivo llamado .babelrc

    babelcore: las herramientas necesaria para transpilar el codigo.
    babel-loader: se encarga de trabajar con webpack.
    babel-preset: se encargan dde entender y tranformar el codigo de javascript y react

# 9. instalando Webpack herramienta para coilar multiples archivos(html,css,javascript, multimedia(imagener,videos)).

    npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev

# 10. Creando un archivo de configuracionde webpack llamado

    webpack.config.js

# 11. Luego de configurar webpack con sus plugins y la copilacion de los archivos recuerda agregarlos en npm para produccion. Ejemplo:

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production"
    },

# 12. En la carpeta dist se ubicaran todos los archivos mimificados y transpilados para la web claro antes hay que correr el script

    npm run build (en este caso uno lo especifica)

# 13. Preparando SASS con webpack

    npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

    mini-css-extract-plugin: permite exxtraer el css del boundle resultante para poder crear un nuevo archivo de css.
    css-loader: se encarga de trabajar con webpack.
    node-sass: añadimos la compatibilidad con sass.
    sass-loader: para trabajar con webpack.

# 14. Ahora hay que añadir la regla en webpack para css.

    1.-creamos una constante para requerir un plugin ya instalado eje:
        const MiniCssExtractPlugin = require("html-webpack-plugin");

    2.- Tenemos que añadir en los modules o modulos el tipo de archivo que vamos a convertir con:

        test: /\.(s*)css$/, (expresion regular para identificar la extension de los archivos)
        use: [
          {
            loader: MiniCssExtractPlugin.loader (aqui le indicamos el loader a usar para el plugin)
          },
          "css-loader", (loader)
          "sass-loader" (loader)

    3.-Inicializamos una instancia del plugin que queremos usar y la ruta a la cual se creara el archivo y su nombre y extension. Cada uno tendra algo en especisifico como dir de archivos nombre, output and imput,etc hay que ver la documentacion de los pugins.

        new MiniCssExtractPlugin({
         filename: "assets/[name].css"
        })

# 15. Recuerda agregar webpack-dev-server para trabajar en development y agregargo al package.json de npm.

    1.- npm install --save-dev webpack-dev-server

    2.- Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

    {
    ""scripts"": {
        ""build"": ""webpack --mode production"",
        ""start"": ""webpack-dev-server --open --mode development""
    },
    }
    (webpack-dev-server hay muchos tipos de flags tienes que ver cuales te son de utilidad)

# 16. Crearemos una carpeta assets dentro de src, la cual forma parte de una estrutura de buenas practicas y adentro crearemos una carpeta styles y dentro nuestros css o sass.

    src:{
        assets:{
            styles:{
                index.scss
            }
        }
    }

    como esta referenciado en webpack, lo va a copilar y con el plugin lo va  a separa y lo va a guardar donde debe estar la referencia real.

# 17. Ahora vamos a hacerle un import "../assets/styles/App.scss" en el archivo HelloWorld.jsx

# 18. Eslint vamos a instalar esta herramienta que nos permitira evitar errores y a crear nuestro archivo gitignore para luego madar todo a github.

    npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

    eslint-config-airbnb: utilizamos este porque vamos a utilizar unas reglas definidas por ellos para crear proyectos en javascript

    gitignore y eslint las reglas recomendadas por platzi estan en los enlaces de:
    https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544
    https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a

# Proyecto-WEB
# Descripcion
Proyecto No.1 de Sistemas y Tecnologias Web

## Como fue hecho este proyecto
Para ver este proyecto se necesita principalmente tener instalado Node.js en el sistema, el cual se puede descargar [aqui](https://nodejs.org/es/download/).
Teniendo Node.js instalado en el sistema, se debe descargar Webpack para poder hacer empaquetados de archivos JS y otros elementos del proyecto para que
puedan ser reconocidos por los navegadores.
### Instalacion de Webpack
```bash
npm install -–save.dev webpack
npm install -–save.dev webpack-cli
```
Adicionalmente, se debe tener instalado React, dado a que esta pagina esta hecho de componentes. Pero antes de esto, se debe instalar Babel como requisito
para su ejecucion, adicionalmente esto servira para que puedan ser ejecutados en navegadores con versiones "viejas" (anteriores).
### Instalacion de Babel
```bash
npm i --save-dev @babel/core 
npm i –-save-dev @babel/preset-env @babel/preset-react
```
##### babel.config.js
```js
const presets = ["@babel/preset-env", "@babel/preset-react"];
module.exports = { presets };
```
### Instalacion de React/ReactDOM
```bash
npm i react react-dom
```
Cada vez que se quiera crear un componente se debe importar React (agregarlo tambien en el _index.js_)
```js
import React from "react";
import ReactDOM from "react-dom";
```

### Bundles
Para generar un HTML el cual tendra todo la logica de JS  o JSX y todos los archivos de estilos como archivos CSS/SCSS/SASS se debe un plugin. **Este 
index.html debe ir en una carpeta llamada _src_**
```bash
npm install --save-dev html-webpack-plugin
npm install --save clean-webpack-plugin
```
Para generar un CSS Bundle el cual servira para reducir las paginas de estilos
```bash
npm install css-minimizer-webpack-plugin --save-dev
npm install --save-dev mini-css-extract-plugin
```

### Loaders
#### CSS Loader
```bash
npm install --save-dev css-loader 
```
#### SASS/SCSS Loader
```bash
npm install sass-loader sass webpack --save-dev
```
#### File Loader
```bash
npm install file-loader --save-dev
```
#### Babel Loader
```bash
npm install babel-loader --save-dev
```

Ya teniendo todo los anterior instalado, webpack.config.js quedaria asi:
```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp3|svg|eot|woff|woff2|ttf|mp4)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
    ],
  },
};

```

## Otros plugins/paquetes
### ESLint
Este plugin sirve para tener un codigo mas limpio siguiendo un formato ya existente, que en este caso es Airbnb. Su instalacion es la siguiente:
```bash
npm install eslint --save-dev
npx eslint -init
npm install eslint-plugin-react
```
Con la instalacion, se debe generar un archivo llamado _.eslint.json_. Dentro de _.eslint.json_ se colocaron las siguientes reglas:
```json
"rules": {
        "linebreak-style": ["error", "windows"],
        "no-extra-semi":"error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "quotes": ["error", "double"],
        "no-alert":["off"]
    }
```
(Se pueden colocar mas reglas, las cuales se encuentran en esta [documentacion](https://eslint.org/docs/rules/)).

Adicionalmente, se debe instalar un plugin en el editor de codigo para que sea reconocido. En el caso de Visual Studio Code es _ESLint_.

### Fonts-awesome
Este paquete de iconos sirve para darle un toque mas llamativo a la vista del consumidor. Su instalacion es la siguiente:
```bash
npm install --save font-awesome
```
Dentro del archivo _index.js_ se debe importar esta libreria:
```js
import "font-awesome/css/font-awesome.css
```
Todos los iconos disponibles se encuentran [aqui](https://astronautweb.co/snippet/font-awesome/). 

**Aviso** Esta es una version vieja, aqui se encuentra la [version mas reciente](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers).
Por el cual el link anterior del listado de iconos no es el mismo.

### React Reveal
Este paquete contiene varias animaciones las cuales pueden ser incluidas en distintas secciones del componente. Su instalacion es la siguiente:
```bash
npm install react-reveal --save
```
Para usar la(s) animacion(es) necesaria(s) se debe importar el efecto en especifico en la parte de arriba del componente. Asi:
```js
import Slide from 'react-reveal/Slide';
```
Listado de sus [efectos](https://www.react-reveal.com/docs/common/)

Aqui se encuentran sus [ejemplos](https://www.react-reveal.com/examples/common/slide/) y su [documentacion](https://www.react-reveal.com/docs/props/)

### React Visibility Sensor
Este paquete sirve para saber cuando un componente esta "siendo visto", en otras palabras, cuando es visible en la pantalla. Su instalacion es la siguiente:
```bash
npm i react-visibility-sensor
```
Se puede encontrar todos los props y un ejemplos en el [repositorio del creador](https://github.com/joshwnj/react-visibility-sensor#readme).

# Creditos
Creditos a los creadores de los plugins y paquetes usados en este proyecto, adicionalmente el uso del carrusel de palabras de Akash [aqui](https://codepen.io/antivirusakash/pen/gBKWog)


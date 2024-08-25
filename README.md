Code Fix App
=============
- Este proyecto lo estoy realizando dentro del curso **Front End III** de la carrera [Certified Tech Developer](https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer "Certified Tech Developer") 
- **Periodo :** Julio - Septiembre 2024
> En este proyecto se practica react

😖😖😖 Por qué no funciona?

En estos dos archivos que mando hay muchos errores y hay que corregirlos, tomando en cuenta la variable que se declara en App.

App.jsx

    import Item from "./Components/Item";

    function App() {
      const muebles = ["mesa", "ropero", "silla", "rack", "escritorio"];
      return (
        <div>
          {muebles.map((zapato) => {
            <Item key={index} deporte={calzado} />;
          })}
        </div>
      );
    }

    export default App;


Items.jsx

    import React from "react";

    const Item = ({ ropa }) => {
      return (
        <div>
          <h4>Compra pendiente: {ropa.elemento}</h4>
        </div>
      );
    };

    export default Item;

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">

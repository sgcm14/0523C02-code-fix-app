
import Item from "./Components/Item";

function App() {
  const muebles = ["mesa", "ropero", "silla", "rack", "escritorio"];

  return (
    <div>
       <h1>Productos</h1>
    {muebles.map((mueble, index) => (
      <Item  key={index} itemMueble={{elemento: mueble}} />
    ))}
  </div>
  );
}

export default App

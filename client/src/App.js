// import Card from "./components/Card/Card"  //only used this for manual testing of 'Card' component
import Cards from './components/Cards/Cards';
import cats from "./mocks/cats.json"
import Pets from './components/Pets/Pets';

function App() {
  return (
    <div>
      <Pets />
    </div>
  );
}

export default App;


//for manual debugging we put the Card into the return div:
{/* <Card
name = "Sydney"
phone = "555-555-5555"
email = "drew@gmail.com"
image = {{
    url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg", alt: "cute cat"
}}
favoured = {false}
/> */}
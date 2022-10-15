import "./Pets.css"
import Filter from "../Filter/Filter"
import Cards from "../Cards/Cards"
import cats from "../../mocks/cats.json"
import axios from "axios"
import { useEffect, useState } from "react"
//@6.14 of v43 he is doing the axios install / import

const Pets = () => {

  const [cats, setCats] = useState([])

  const fetchCats = async () => {
    const response = await axios.get("http://localhost:4000/cats");
    setCats(response.data)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  console.log(cats);
  return (
    <div className="container">
      <div className="app-container">
        <Filter />
        <Cards cats={cats} />
      </div>

    </div>
  )

}







export default Pets






//what I had at video 44 but seems to be missing article
// import "./Pets.css";
// import Filter from "../Filter/Filter";
// import Cards from "../Cards/Cards";
// // import cats from "../../mocks/cats.json"
// import axios from "axios"
// import { useEffect, useState } from "react";


// const Pets = () => {
//     //this use state hook will start as an empty array
//     const [cats, setCats] = useState([]);

//     //we want to call this function on the initial render of the component
//     const fetchCats = async () => {
//         const response = await axios.get("http://localhost:4000/cats");
//         setCats(response.data);
//     };

//     useEffect(() => {
//         fetchCats()
//     }, []);

//     console.log(cats);

//     return (
//         <div className="container">
//             <div className="app-container">
//                 <Filter />
//                 <Cards cats={cats} />
//             </div>
//         </div>
//     );
// };

// export default Pets;

// //original test function:


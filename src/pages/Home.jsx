import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getproduct = async () => {
    try {
      // if you want to do it with fetch api 
      // const strdata = await fetch("https://fakestoreapi.com/products");
      // const jsondata = await strdata.json();
      // console.log(jsondata);
      // fetch api takes more time and more code that's why we used axios

      // with the help of Axios
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>Get Products</button>
    </div>
    
  )
}

export default Home
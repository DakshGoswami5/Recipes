import {Route, Routes} from "react-router-dom";
import Product from "../components/Product";
import Service from "../components/Service";
import Home from "../components/Home";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";
import ServiceDetails from "../components/ServiceDetails";
import ServiceUpdate from "../components/ServiceUpdate";


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/product/details/:name" element={<ProductDetails/>}></Route>
      <Route path="/service" element={<Service/>}>
      <Route path="/service/details" element={<ServiceDetails/>}></Route>
      <Route path="/service/updates" element={<ServiceUpdate/>}></Route>
      </Route>
      
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  )
}

export default Mainroutes;
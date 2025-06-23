import { Outlet, useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
    const navigate = useNavigate();
    const NavigateHandler = () => {navigate(-1)}
    const params = useParams();


  return (
    <div>
        <h1 className="text-4xl font-thin mb-2">{params.name}</h1>
        <h2 className="font-thin text-2xl mb-5">ProductDetails...</h2>
        <button onClick={NavigateHandler} className="bg-white text-black px-4 py-2 rounded">Go Back</button>
        
    </div>
  )
}

export default ProductDetails
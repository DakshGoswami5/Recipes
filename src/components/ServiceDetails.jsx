import { useNavigate } from "react-router-dom"

const ServiceDetails = () => {
    const navigate = useNavigate();
    
    
  return (
    <div>
        <h1 className="text-4xl font-thin mb-2">More Services</h1>
        <h2 className="font-thin text-2xl mb-5">Choose us...</h2>
        <button onClick={() => {navigate(-1)}} className="bg-white text-black px-4 py-2 rounded">Go Back</button>
    </div>
  )
};

export default ServiceDetails;
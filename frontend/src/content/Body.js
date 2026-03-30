
import { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom"

function Body() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const user = {login: false};

    useEffect(() => {
        fetch("http://localhost:9000/testAPI")
          .then(res => res.json())
          .then(res => setProducts(res))
          .catch(err => console.log(err));
      }, []);

    const handleBuy = () =>{
        if(user.login){
            alert("Proceding to buy"); //change after buy interface
        }else{
            navigate("/login");
        }

    };
    return (
    <div className="container mt-4">
    <div className="cards-flex-container">

    {products.map(product => (
        <div className="card shadow-sm rounded" key={product.id}>
        <img src={product.image}  className="card-img-top custom-img" alt={product.name} />

            <div className="card-body bg-light text-center">
            <h6 className="card-title small-text">{product.name}</h6>
             <p className="card-text text-success">Rs. {product.price}</p>

            <button className="btn btn-dark btn-sm" type="button" onClick={handleBuy}>
            Buy now 
            </button>
            </div>
            </div>
    ))} 
        </div>
    </div>

    );
}

export default Body;
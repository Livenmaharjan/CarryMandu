
import {useNavigate} from "react-router-dom"

function Body() {
    const navigate = useNavigate();
    const user = {login: false};

    const products = [
        { id: 1, name: "Crumpled Wallet", image: "./images/s.png", price: "2000" },
        { id: 2, name: "Crumpled Wallet 2", image: "./images/s.png", price: "2000" },       
        { id: 3, name: "Crumpled Wallet 3", image: "./images/s.png", price: "2000" },
        { id: 4, name: "Crumpled Wallet 4", image: "./images/s.png", price: "2000" }

    ];

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
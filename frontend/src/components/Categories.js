import { Link } from "react-router-dom";
import "../App.css";
function Categories() {
    return (
        <div className="container mt-4">
            <h4>Categories</h4>

        <div className="flex-container mt-3">

            <Link to="/bag" className="category-link">
            <div className="card category-card bags-card " style={{ backgroundImage: "url(/images/bag2.jpg)" }}>
            <p className="category-text"></p>
            </div>
            </Link>
            
            <Link to="/wallets" className="category-link">
            <div className="card category-card wallets-card" style={{backgroundImage:"url(/images/wallets.png)"}}>
            <p className="category-text"></p>
            </div>
            </Link>
        </div>
        </div>
            
    );

}
export default Categories;
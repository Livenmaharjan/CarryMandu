import { Link } from "react-router-dom";

function Categories() {
    return (
        <div className="container mt-4">
            <h4>Categories</h4>

            <div className="category-container">
            <ul className=""></ul>
            <div className="card category-card bags-card" style={{backgroundImage: "url(/images/s.png)"}}><button className="cat-btn">
                <Link to="/bag" className="category-link">Bags
                </Link></button></div>
            <div className="card category-card wallets-card" style={{backgroundImage: "url(/images/s.png)"}}><button className="cat-btn">
                <Link to="/wallets" className="category-link">Wallets
                </Link></button></div>
            </div>

        </div>

    );

}
export default Categories;
import { Link } from "react-router-dom";

function Wallets (){
    return (
        <div className="wallets">
            <h1>Wallets</h1>
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Wallet Type
                </button>
                <ul className="dropdown-menu">
                    <li><Link to="/categories" className="dropdown-item">3 Fold</Link></li>
                    <li><Link to="/" className="dropdown-item">2 Fold</Link></li>
                    <li><Link to="/" className="dropdown-item">All</Link></li>
                </ul>
                </div>
        </div>
    )
}

export default Wallets;
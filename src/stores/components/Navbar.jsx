import React from "react";
import {Link} from 'react-router-dom';
import {useCart} from "../context/CartContext";

const Navbar=()=>{

    const {cartItems}=useCart()

    return(
        <>
        <div className="navSection">
            <div className="title">
                <h2>E-Mart</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="search..." />
            </div>
            <div className="user-DETAIL">
                SignIN/SignUP
            </div>
            <Link to="/cart">
            <div className="cart">
                Cart
                <span>
                    {cartItems.length}
                </span>
            </div>
            </Link>
            
        </div>
        <div className="subMenu">
                <ul>
                    <Link to="/mobiles">
                    <li>Mobiles</li>
                    </Link>
                    <Link to="/computers">
                    <li>Computers</li>
                    </Link>
                    <Link to="/watches">
                    <li>Watches</li>
                    </Link>
                    <Link to="/mensfashions">
                    <li>Men Fashion</li>
                    </Link>
                    <Link to="/womensfashions">
                    <li>Woman Fashion</li>
                    </Link>
                    <Link to="/furnitures">
                    <li>Furniture</li>
                    </Link>
                    <Link to="/acs">
                    <li>AC</li>
                    </Link>
                    <Link to="/kitchens">
                    <li>Kitchen</li>
                    </Link>   
                </ul>
            </div>
        </>
    )
}

export default Navbar
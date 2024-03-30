import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import SearchBar from "./Search";

export default function NavBar() {
    const cart = useSelector(state => state.cart);
    //  console.log(cart);




    return (
        <div>
            <div className="navbar nav-1">
                <div className="d-flex flex-1 p-1">
                    <img src={LOGO} className="logo"></img>
                    <Link style={{ marginLeft: "10px" }}> <span style={{ color: "gray", fontSize: "12px", marginRight: "10px" }}>Deliver to</span>
                        <FontAwesomeIcon icon={faLocationDot} /> Egypt </Link>
                    <SearchBar></SearchBar>
                    <div className="d-flex align-content-center" style={{ marginLeft: "-10px" }}>
                        <Link to="/BLogin" >
                      Hello , Signin
                            
                            </Link>

                        <Link to="/" style={{ marginLeft: "20px" }}>Returns & <span style={{ fontWeight: "bold" }}> Orders</span></Link>
                        <div className="cart d-flex" style={{ marginLeft: "20px" }}>
                            <Link to="/cart" className="cart-number" >
                                <FontAwesomeIcon icon={faCartShopping} style={{ width: "35px", height: "35px" }} />
                                <p className="cart-numb">{cart.length}</p>
                                <span style={{ marginLeft: "30px" }}>Chart</span> </Link>
                        </div>
                    </div>



                </div>

            </div>
            <div className="d-flex flex-1 nav-2 item-nav2">
                <Link to="/" style={{ marginLeft: "75px" }}>
                    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

                    ALL</Link>

                <Link to="/today">Today’s Deals</Link>
                <Link to="/customer">Customer Service</Link>
                <Link to="/gift">Gift Cards</Link>
                <Link to="/registery">Registery</Link>
                <Link to="/sell">sell</Link>
            </div>

        </div>
    );
}
import { useDispatch } from "react-redux";
import "../Css/card.css";
import React, { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/Product-slice";
import { addToCart } from "../rtk/slices/Cart-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToDot, faCartShopping, faCircleChevronRight, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";


export default function CardProduct(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const [star, SeStar] = React.useState(true);

    const { product } = props;
    return (
        <div className="box">
            <span style={{ marginLeft: "200px", padding: "10px", color: "#ccc" }}>{product.category}</span>
            <div className="img-product">
                <img src={product.image} alt="img" />
                <div class="caption">
                    <div className="d-flex align-items-end justify-content-end detail-product">
                    <p className="p-product">Compare </p>
                    <FontAwesomeIcon icon={faArrowsToDot} style={{marginLeft:"10px" , fontSize:"14px" , marginBottom:"5px"}}/>
                    </div>
                   <div className="d-flex align-items-end justify-content-end detail-product">
                   <p className="p-product"> Add to Cart</p>
                   <FontAwesomeIcon icon={faCartShopping} style={{marginLeft:"20px", fontSize:"14px" , marginBottom:"5px"}}/>
                   </div>
                   <div className="d-flex align-items-end justify-content-end detail-product">
                    <p className="p-product"> View Details </p>
                    <FontAwesomeIcon icon={faCircleChevronRight} style={{marginLeft:"20px", fontSize:"14px",marginBottom:"5px"}}/>
                  </div>
                  <div className="d-flex align-items-end justify-content-end">
                    
                    <p className="p-product">Add to Wish List</p>
                    <FontAwesomeIcon icon={faHeart} style={{marginLeft:"20px", fontSize:"14px" ,marginBottom:"5px"}}/>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="card-flex">
                    <h3 className="limitnumberh">{product.title}</h3>
                    <span>${product.price}</span>
                </div>
                <p className="limitnumber">{product.description}</p>

                <div
                    style={{ fontSize: "20px", marginTop: "10px" }}
                    onClick={() => SeStar((v) => !v)}
                >
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <i
                        className="fa-solid fa-star"
                        style={{ color: star ? "" : "gold" }}
                    ></i>
                </div>

            </div>
            <div className="info">
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="CardButton"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}


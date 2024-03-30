import { Button, Container, Table } from "react-bootstrap";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clear, deleteFromCart } from "../rtk/slices/Cart-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  // console.log(cart)
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <NavBar></NavBar>
      <section style={{ backgroundColor: "#F0F2F2" }}>
        <div class="h-100 py-5 m-lg-5">
          <div class="row d-flex h-100 justify-content-between align-items-center">
            <div class="col-9">

              
              <div className="d-flex justify-content-between align-items-start">
                <div className="col-12"> 
               
              <div class="card rounded-3" style={{border:"0" , marginRight:"30px"}} >
              <div class=" card-body d-flex justify-content-between align-items-center" style={{borderBottom:"1px solid #ccc"}}>
                <h3 class="fw-bold mb-0 text-black ">Shopping Cart</h3>
                  <p class="fw-bold mb-0">SubTitle</p>
              </div>

              {cart.map((product) => (
                <div class="card-body p-4" key={product.id} >
                    <div class="row d-flex justify-content-between align-items-center p-3" style={{borderBottom:"2px solid #ccc"}} >

                      <div class="col-md-3 col-lg-2 col-xl-2">
                        <img
                          src={product.image}
                          class="img-fluid rounded-3" alt="Cotton T-shirt" />
                      </div>
                      <div class="col-md-10">
                        <p class="lead fw-normal mb-2">{product.title}</p>
                        <p class="">{product.description}</p>
                        <div className="d-flex align-items-center mb-3">
                          <h5 class="mb-0" style={{ marginRight: "10px", color: "#ccc" }}>Unit Price</h5>
                          <p class="mb-0" style={{ fontWeight: "bold" }}>{product.price}</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <h5 class="mb-0" style={{ marginRight: "10px", color: "#ccc" }}>Quantity</h5>
                          <p class="mb-0" style={{ fontWeight: "bold", marginRight: "5px" }}>{product.quantity}</p>

                          <FontAwesomeIcon cursor={"pointer"} icon={faPlus} onClick={() => dispatch(addToCart(product))} />

                        </div>
                        <Button variant="danger" onClick={() => dispatch(deleteFromCart(product))}>Delete</Button>

                      </div>
                    </div>
                
                </div>
                  ))}
              </div>
              

                </div>

              <div class="card col-4" style={{border:"0"}}>
                <div class="card-body p-4">
                  <div className="d-flex"> 
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#6F9A61", fontSize:"20px" , marginRight:"10px", marginTop:"5px"}}/>
                  <p>Your Order qualifies for FREE shopping choose this option at checkout see details....</p>

                  </div>
                  <h5 style={{fontWeight:"bold" , textAlign:"center" , marginBottom:"20px"}}>Total: {totalPrice.toFixed(2)}$</h5>
                  <button type="button" class="btn btn-warning btn-block btn-lg" style={{width:"100%" , fontWeight:"bold"}}>Proceed to Pay</button>
                </div>
              </div>
              </div>
              <Link to="/emptycart">
              <Button variant="danger" onClick={() => dispatch(clear())} className="m-3">Clear Chart</Button>

              </Link>
              
            

            </div>
          </div>
        </div>
      </section>
      <div className="parent mt-0" style={{marginTop7t:"100px"}}>
                <div className="register login">
                    <form  className="">
                        <div>
                            <div>
                                
                                <p className="pAcount mb-3" >See Personalised Recommendations
                                </p>
                            </div>
                            <div style={{ textAlign: "center", marginBottom:"10px" }}>
                                <Link to="/login"><button type="submit">Sign In</button>
                                </Link>
                            </div>
                            <p className="pAcount mb-3" >New Customer
                                    <a href="/register" style={{ color: "#7AB2F3", marginLeft: "5px"  }}>Start here</a>
                                </p>

                        </div>
                    </form>
                </div>
            </div>
      <Footer></Footer>
    </>
  )
}
import NavBar from "./NavBar";
import EMPTYCart from "../assets/emptyCart.png"
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function EmptyCart() {
 
  return (
    <>
      <NavBar></NavBar>
      <section style={{ backgroundColor: "#F0F2F2" }}>
        <div class="container h-100 py-5 ">
          <div class="d-flex h-100 justify-content-center align-items-center">
            <div class="col-9">

              <img src={EMPTYCart} style={{width:"600px"}}></img>
             
    
              

                </div>

              <div class="card col-4" style={{border:"0" , marginLeft:"-230px"}}>
                <div class="card-body p-4">
                  <div className="d-flex"> 
                  <p style={{fontWeight:"bold", fontSize:"30px"}}>Your Cart Feels Lonly</p>

                  </div>
                  <p style={{ textAlign:"center" , marginBottom:"20px"}}>Your shopping cart lives to serve.Give it purpose - fill it with booke, electronics , etc, and make it happy</p>
                  <button type="button" class="btn btn-warning btn-block btn-lg" style={{width:"100%" , fontWeight:"bold" , border:"1px solid #ccc"}}>Continue Shopping</button>
                </div>
              </div>
              </div>
            </div>
       
      </section>
      <div className="parent mt-0">
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
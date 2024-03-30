import NavBar from "../../Components/NavBar";
import "../../index.css"
import { Link } from "react-router-dom";

export default function BLogin() {
    
    return (
        <>
        <NavBar></NavBar>
            <div className="parent">
                <div className="register login">
                    <form  className="box-Shadow">
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
        </>
    );

}
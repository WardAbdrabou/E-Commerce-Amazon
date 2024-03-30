
import { Link} from "react-router-dom";
import Logo from "../../assets/R.png";

export default function Login() {

    return (
        <>
            <div className="parent mt-5">
                <div style={{textAlign:"center"}}> 
                <Link to="/">
                <img src={Logo} style={{width:"200px", height:"150px"}}></img>

                </Link>

                </div>

                <div className="register login ">
                    <form  className="form-login">
                        <div>
                            <div>
                                <h4 style={{ marginBottom: "20px"}}>Sign in</h4>
                
                            </div>

                            <label htmlFor="email">Email or mobile phone number</label>
                            <input
                                className="mb-4"
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Email....."
                                required
                                
                            ></input>

                            <label htmlFor="password">Password:</label>
                            <input
                                className="mb-2"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Enter Your password...." minLength="6"
                               
                                required
                            ></input>
                               <div style={{ textAlign: "center" , marginTop:"10px" }}>
                                <button type="submit" style={{width:"730px", color:"black"}}>Continue</button>
                            </div>
                            
                            <p style={{ color: "#666666", fontSize: "13px", marginTop: "10px" }}>By Continuning you agree to Amazon s
                                <a href="learnmore" style={{ color: "#7AB2F3" }}> Condition of Use and Privacy Notice</a>
                            </p>
                          
                            <div style={{ fontSize: "13px" }}>
                                <Link to="/sendotp">Need help ?</Link>
                            </div>

                         
                        </div>
                     

                    </form>
                   
                </div>
                <p className="newtoAmazon">New to Amazon?</p>
                <div style={{ textAlign: "center" }} >
                               <Link to="/register"> <button type="submit" className="creatAccount">Create Your Amazon account</button></Link>
                            </div>
            </div>
        </>
    );
}

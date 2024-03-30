
import { Link} from "react-router-dom";
import Logo from "../../assets/R.png";


export default function Register() {


    return (
        <> 
        
                <div className="parent mt-5">
                <div style={{textAlign:"center"}}> 
                <Link to="/">
                <img src={Logo} style={{width:"200px", height:"150px" , marginBottom:'60px'}}></img>

                </Link>

                </div>
                    <div className="register login">
                        <form className="form-login ">
                            <div>
                                <div>
                                    <h4 style={{ marginBottom: "10px" }}>Create Account</h4>
                                </div>
                                <div className="mb-2">
                                <label htmlFor="name">Your name</label>
                                <input
                                    className="mb-2"
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Name....."
                                    required
                                
                                ></input>
                                </div>
                                
                              
                                <div className="mb-2">
                                <label htmlFor="email">Email or mobile phone number</label>
                                <input
                                    className="mb-2"
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Email....."
                                    required
                                  
                                ></input>
                                </div>
                                       
                                <div className="mb-2">
                                <label htmlFor="password">Password:</label>
                                <input
                                    className="mb-2"
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password....."
                                   
                                    minLength="6"
                                    required
                                ></input>
                                </div>
                               
                                <div className="mb-2">
                                <label htmlFor="passwordCo">Password Confirmation</label>
                                <input
                                    className="mb-2"
                                    name="passConfirm"
                                    id="passwordCo"
                                    type="password"
                                    placeholder="Password....."
                                   
                                    minLength="6"
                                    required
                                ></input>
                                </div>
                              
                                <div style={{ textAlign: "center" , marginTop:"10px" }}>
                                <button type="submit" style={{width:"730px" , color:"black"}}>Continue</button>
                            </div>
                            <p style={{ color: "#666666", fontSize: "13px", marginTop: "10px" }}>By Continuning you agree to Amazon s
                                <a href="learnmore" style={{ color: "#7AB2F3", textDecoration:"none" }}> Condition of Use and Privacy Notice</a>
                            </p>
                            <p style={{ color: "#666666", fontSize: "13px", marginTop: "10px" }}>Already have an account?
                                <a href="Login" style={{ color: "#7AB2F3", textDecoration:"none" }}> Sign in</a>
                            </p>
                            <p style={{ color: "#666666", fontSize: "13px", marginTop: "10px" }}>Buying for work
                                <a href="Login" style={{ color: "#7AB2F3", textDecoration:"none" }}> Create a free bysiness account</a>
                            </p>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    );
}

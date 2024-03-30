import logo from "../assets/logo.png"

export default function Footer(){
    return(
        <>
        <div class="footer mt-5 headerFooter">
        <div class="contain">
            <div class="box mt-5">
                <h3>Get to Know Us</h3>
                <ul class="links">
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About Amazon</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Amazon Science</a></li>
                </ul>
              
                
            </div>
            <div class="box mt-5">
            <h3>Make Money with Us</h3>
                <ul class="links">
                <li><a href="#">Sell products on Amazon</a></li>
                    <li><a href="#">Sell on Amazon Business</a></li>
                    <li><a href="#">Sell apps on Amazon</a></li>
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">Advertise Your Products</a></li>
                    <li><a href="#">Self-Publish with Us</a></li>
                    <li><a href="#">Host an Amazon Hub</a></li>
                    <li><a href="#">See More Make Money with Us</a></li>
                </ul>
            </div>
            <div class="box mt-5">
            <h3>Amazon Payment Products</h3>
                <ul class="links">
                    <li><a href="#">Amazon Business Card</a></li>
                    <li><a href="#">Shop with Points</a></li>
                    <li><a href="#">Reload Your Balance</a></li>
                    <li><a href="#">Amazon Currency Converter</a></li>

                </ul>
           
            </div>
            <div class="box mt-5">
            <h3>Let Us Help You</h3>
                <ul class="links">
                    <li><a href="#">Amazon and COVID-19</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Shipping Rates & Policies</a></li>
                    <li><a href="#">Returns & Replacements</a></li>
                    <li><a href="#">Manage Your Content and Devices</a></li>
                    <li><a href="#">Amazon Assistant</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright d-flex align-items-center justify-content-center">
            <img src={logo} style={{width:'90px' , height:"50px" , marginRight:"30px" , marginTop:"10px"}}></img>
            <div>
            <button style={{backgroundColor:'#232f3f' , color:"white" , border:"1px solid #a7ada8" , padding:"10px"}}>English</button>
            </div>
          
        </div>
        
        </div>
        <div className="footer bottomFooter">
        <div class="contain">
            <div class="box mt-5">
                <h6>Amazon Music</h6>
                <p class="links"> Stream millions of songs</p>
                <h6>Audible</h6>
                <p class="links"> Download Audiobooks</p>
                <h6>Get to Know Us</h6>
                <p class="links"> Stream millions of songs</p>
            </div>

            <div class="box mt-5">
            <h6>AbeBooks</h6>
                <p class="links"> Books, art & collectables</p>
                <h6>Goodreads</h6>
                <p class="links"> Book reviews</p>
                <h6>Get to Know Us</h6>
                <p class="links"> & recommendations</p>
            </div>

            <div class="box mt-5">
            <h6>ACX</h6>
                <p class="links"> Audiobook Publishing Made Easy </p>
                <h6>Amazon Home Services</h6>
                <p class="links"> Experienced pros Happiness Guarantee</p>
                <h6>Get to Know Us</h6>
                <p class="links"> Stream millions of songs</p>
           
            </div>
            <div class="box mt-5">
            <h6>Amazon Music</h6>
                <p class="links"> Stream millions of songs</p>
                <h6>IMDb</h6>
                <p class="links"> Movies, TV & Celebrities</p>
                <h6>Get to Know Us</h6>
                <p class="links"> Stream millions of songs</p>
            </div>
        </div>
        </div>
        </>
    
    )
}
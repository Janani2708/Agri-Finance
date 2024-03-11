
import './Footer.css'
const  Footer = () =>{
  return (
<div className="mfooter">
        <div className="heading">
        </div>
        <div className="content">
          <br/>
          <div className="services">
            <h4>For Business </h4><br/>
            <p>Employee</p>
            <p>Health Of Plants</p>
            <p>Individual</p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p>
              <a href="https://www.linkedin.com/SimpleLearn"
              ><i className="fab fa-linkedin"></i> Linkedin</a>
            </p>
            <p>
              <a href="https://www.twitter.com"
              ><i className="fab fa-twitter"></i> Twitter</a>
            </p>
            <p>
              <a href="https://github.com"
              ><i className="fab fa-github"></i> Github</a>
            </p>
            <p>
              <a href="https://www.facebook.com"
              ><i className="fab fa-facebook"></i> Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com"
              ><i className="fab fa-instagram"></i> Instagram</a>
            </p>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="/About">About</a></p>
            <p><a href="/Help">Help</a></p>
            <p><a href="/Contact">Contact</a></p>
          </div>
          <div className="details">
            <h4 className="address">Address</h4>
            <p>
             123, AgroCloud Finance Company, Chennai
            </p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">+91 93462 78738<br></br>
              +91-0486534566</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="#">info@agrocloud.com</a></p>
          </div>
          <footer>
            <hr />
            ©️ 2024 agrocloud.
          </footer>
        </div>
      </div>
  )
}
export default Footer;



// const Footer = () => {
//   return (
//     <div>
//     <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'sans-serif', lineHeight: 1.2 }}>
      
//       <footer style={{ display: 'flex', flexWrap: 'wrap', marginTop: 'auto', backgroundColor: '#2d2e33', padding: '60px 10%' }}>
//         <div className="footer-col" style={{ width: '25%' }}>
//           <h4 style={{ position: 'relative', marginBottom: '30px', fontWeight: 400, fontSize: '22px', color: '#f1bc0d', textTransform: 'capitalize' }}>
//             products
//             <span style={{ content: '', position: 'absolute', left: 0, bottom: '-6px', backgroundColor: '#27c0ac', height: '2px', width: '40px' }}></span>
//           </h4>
//           <ul>
//             <li><a href="#">teams</a></li>
//             <li><a href="#">advertising</a></li>
//             <li><a href="#">talent</a></li>
//           </ul>
//         </div>
//         <div className="footer-col" style={{ width: '25%' }}>
//           <h4 style={{ position: 'relative', marginBottom: '30px', fontWeight: 400, fontSize: '22px', color: '#f1bc0d', textTransform: 'capitalize' }}>
//             network
//             <span style={{ content: '', position: 'absolute', left: 0, bottom: '-6px', backgroundColor: '#27c0ac', height: '2px', width: '40px' }}></span>
//           </h4>
//           <ul>
//             <li><a href="#">technology</a></li>
//             <li><a href="#">science</a></li>
//             <li><a href="#">business</a></li>
//             <li><a href="#">professional</a></li>
//             <li><a href="#">API</a></li>
//           </ul>
//         </div>
//         <div className="footer-col" style={{ width: '25%' }}>
//           <h4 style={{ position: 'relative', marginBottom: '30px', fontWeight: 400, fontSize: '22px', color: '#f1bc0d', textTransform: 'capitalize' }}>
//             company
//             <span style={{ content: '', position: 'absolute', left: 0, bottom: '-6px', backgroundColor: '#27c0ac', height: '2px', width: '40px' }}></span>
//           </h4>
//           <ul>
//             <li><a href="#">about</a></li>
//             <li><a href="#">legal</a></li>
//             <li><a href="#">contact us</a></li>
//           </ul>
//         </div>
//         <div className="footer-col" style={{ width: '25%' }}>
//           <h4 style={{ marginBottom: '30px', fontWeight: 400, fontSize: '22px', color: '#f1bc0d', textTransform: 'capitalize' }}>
//             follow us
//             <span style={{ content: '', position: 'absolute', left: 0, bottom: '-6px', backgroundColor: '#27c0ac', height: '2px', width: '40px' }}></span>
//           </h4>
//           <div className="links">
//             <a href="#"><i className="fab fa-linkedin-in" style={{ display: 'inline-block', height: '44px', width: '44px', color: 'white', backgroundColor: 'rgba(40, 130, 214, 0.8)', margin: '0 8px 8px 0', textAlign: 'center', lineHeight: '44px', borderRadius: '50%', transition: '0.4s' }}></i></a>
//             <a href="#"><i className="fab fa-facebook-f" style={{ display: 'inline-block', height: '44px', width: '44px', color: 'white', backgroundColor: 'rgba(40, 130, 214, 0.8)', margin: '0 8px 8px 0', textAlign: 'center', lineHeight: '44px', borderRadius: '50%', transition: '0.4s' }}></i></a>
//             <a href="#"><i className="fab fa-twitter" style={{ display: 'inline-block', height: '44px', width: '44px', color: 'white', backgroundColor: 'rgba(40, 130, 214, 0.8)', margin: '0 8px 8px 0', textAlign: 'center', lineHeight: '44px', borderRadius: '50%', transition: '0.4s' }}></i></a>
//             <a href="#"><i className="fab fa-instagram" style={{ display: 'inline-block', height: '44px', width: '44px', color: 'white', backgroundColor: 'rgba(40, 130, 214, 0.8)', margin: '0 8px 8px 0', textAlign: 'center', lineHeight: '44px', borderRadius: '50%', transition: '0.4s' }}></i></a>
//           </div>
//         </div>
//       </footer>
//     </div>
//     </div>
//   );
// }

// export default Footer;



import "../../assets/css/footer.css"
const  Footer = () =>{
  return (
<div className="mfooter">
        <div className="heading">
        </div>
        <div className="content">
          <br/>
          <div className="services">
            <h4>Services</h4>
            <p><a href="#">App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">DevOps</a></p>
            <p><a href="#">Web designing</a></p>
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
              10th,vivekanadhar street ,Main Road  <br />
              Town hall, CBE.
            </p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">+91-8870754365<br></br>
              +91-0486534566</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="#">kidsparty@gmail.com</a></p>
          </div>
          <footer>
            <hr />
            ©️ 2024 simpleLearn.
          </footer>
        </div>
      </div>
  )
}
export default Footer;

import React from "react"
import "../App.css"
const Footer = () => (
  <footer>
    <div className="footer-img-div"><img alt="Company logo" src={require("../images/E_lecticLogi_ Logo (5).png")}></img></div>
    <div className="copyright">© {new Date().getFullYear()} EclecticLogic</div>
    <div className="footer-links">
        <a class="fab fa-instagram fa-2x" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eclecticlogic/?hl=en"></a>
        <a class="fab fa-linkedin-in fa-2x" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/eclecticlogic"></a>
        <a class="fab fa-twitter fa-2x" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Eclectic_Logic"></a>
    </div>
  </footer>
)


export default Footer

import './Footer.scss'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="left">
          <h1>Have a project in mind? Let's make it happen</h1>
        </div>
        <div className="right">
          <div className="address">
          <div>22 Street Name, Suburb, 8000,</div>
           <div>Cape Town, South Africa</div>
           <div>+27 21 431 0001</div>
           <div>
             <a href="">enquirie@website.co.za</a>
           </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="left">
          <div className="socials">
            <div className="col">
              <a>Terms of service</a>
              <a>Privacy policy</a>
              <a>Impressum</a> 
            </div>
            <div className="col">
              <a>Facebook</a>
              <a>Instagram</a>
              <a>Twitter</a>
            </div>
            <div className="col">
              <a>Github</a>
              <a>LinkedIn</a>
              <a>Teams</a>
            </div>
            <div className="col">
              <a>Youtube</a>
              <a>Behance</a>
              <a>Dribble</a>
            </div>
          </div>
        </div>
        <div className="lower right">
          <div className="col">
            <a>Explore open jobs</a>
            <div>
              ©2000—2023 Company Name
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
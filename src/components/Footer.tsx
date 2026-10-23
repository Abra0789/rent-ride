import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h2 className="brand">
            Rent<span>Ride</span>
          </h2>
          <p>Dhaka er ride share driver der jonno gari rental.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fleet">Our Fleet</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Khilgaon, Dhaka</li>
            <li>hello@rentride.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© 2026 RentRide. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

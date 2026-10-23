import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h1>
        Take the wheel
        <span>with RentRide</span>
      </h1>
      <p>
        Ride share driver der jonno sohoj, swochchho ar affordable gari rental.
        Gari bachho, kagoj ready koro, ar rasta e nambo.
      </p>
      <div className="hero-actions">
        <Link to="/fleet" className="btn btn-accent">
          See our fleet
        </Link>
        <Link to="/faq" className="btn btn-brand">
          Read FAQ
        </Link>
      </div>
    </section>
  );
}

export default Home;

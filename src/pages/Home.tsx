import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h1>Welcome to RentRide</h1>
      <p>Premium rental cars for ride share drivers.</p>
      <Link to="/fleet">See our fleet</Link>
    </section>
  );
}

export default Home;

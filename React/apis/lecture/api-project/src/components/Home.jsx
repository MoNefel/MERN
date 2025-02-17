import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/star">Star Wars</Link>
    </div>
  );
};

export default Home;

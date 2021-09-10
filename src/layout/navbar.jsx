import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="_navbar_">
      <Link to="/">
        <h1>Kumba</h1>
      </Link>
    </div>
  );
};

export default Navbar;

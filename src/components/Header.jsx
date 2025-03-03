import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
        <Link to="/about">About</Link>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    
    </nav>
  );
};

export default Header;

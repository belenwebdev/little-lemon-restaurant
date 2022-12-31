import './Navbar.css';
import logo from '../../logo.png';

function Navbar() {
    return (
      <nav>
        <img src={logo} alt="Little Lemon"/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order delivery</a></li>
            <li><a href="#">Log in</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  
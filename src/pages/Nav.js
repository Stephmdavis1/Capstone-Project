import logo from "../icons_assets/Logo.svg"
import "../components/Nav/Nav.css"

function Nav() {
    return (
      <>
        <section className="nav_section">
            <img src={logo} alt="" />
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        </section>
      </>
    );
  }
  
  export default Nav;
  
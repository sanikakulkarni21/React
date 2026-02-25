import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Left side */}
      <div className="logo">
        <img
          src="https://dummyimage.com/40x40/ff6600/fff.png&text=T"
          alt="Logo"
        />
        <span>Transflower Learning</span>
      </div>

      {/* Right side */}
      <nav>
        <ul className="nav-links">
          <li>Login</li>
          <li>Register</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
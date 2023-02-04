import '/src/navbar.css'
export default function Navbar() {
  return(
  <nav class="navbar">

  <div class="logo">ANKUR</div>

  <ul class="nav-links">

    <div class="menu">

      <li><a href="/">HOME</a></li>

      <li><a href="/">ABOUT</a></li>

      <li class="services">

        <a href="/">SERVICES</a>

      </li>

      <li><a href="/">PROCING</a></li>

      <li><a href="/">CONTACT</a></li>

    </div>

  </ul>

</nav>
);
}
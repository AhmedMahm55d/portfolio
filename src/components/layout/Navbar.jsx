import { NavLink } from "react-router-dom";

import Container from "../ui/Container";
import { navigationLinks } from "../../data/navigation";

function Navbar() {
  return (
    <header className="header">
      <Container>
        <nav className="navbar" aria-label="Main navigation">
          <NavLink to="/" className="navbar__logo">
            Ahmed<span>.</span>
          </NavLink>

          <ul className="navbar__links">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className="navbar__contact">
            Let’s talk
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
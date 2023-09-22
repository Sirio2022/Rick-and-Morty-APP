import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand fs-1" to="/">
          <h1 className="text-center ubuntu my-4">
            Rick & Morty <span className="text-primary">APP</span>
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
                button[aria-expanded="false"] > .close{
                  display: none;
                }
                button[aria-expanded="true"] > .open{
                  display: none;
                }
              `}
          </style>
          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" activeClassName="active">
                Characters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="episodes">
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="location">
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand fs-3" href="#">
          Welcome
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active fs-4" aria-current="page" to="/">
              Movies
            </Link>
            <Link className="nav-link fs-4" to="/favorites">
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

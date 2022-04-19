import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isActive , setIsActive] = useState(true)

  const makeHomeActive = () => {
    setIsActive(true)
  }

  const makeFavoritesActive = () => {
    setIsActive(false)
  }
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand fs-3 mx-3" href="#">
          Welcome
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={`nav-link fs-4 mx-3 rounded-3 ${isActive ? "bg-primary active" : "" }`} aria-current="page" to="/" onClick={()=>makeHomeActive()}>
              Movies
            </Link>
            <Link className={`nav-link fs-4 mx-3 rounded-3 ${isActive ? "" : "bg-primary active" }`}  to="/favorites" onClick={()=>makeFavoritesActive()}>
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

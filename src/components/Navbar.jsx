import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todo App
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Home
                </Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link" to="/measureyourspace">
                  Measure your space
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tanstacktable">
                  Tanstack table
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dtle">
                  GraphQl
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fileupload">
                  file upload
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Url State
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/multicheck">
                  Multiple Checkbox
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Database Todos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/localstorage">
                  Local Storage Todos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/scroll">
                  Scroll
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/test">
                  Test
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/swr">
                  SwrInf
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inform">
                  inForm
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bfab">
                  bFab.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

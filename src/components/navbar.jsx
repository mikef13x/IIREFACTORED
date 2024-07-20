import React from 'react';

export default function Navbar({ loggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item logo">
              <img src="/assets/images/logo.png" alt="AniName Logo" style={{ maxHeight: '35px' }} />
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
            </li>
            {loggedIn ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/upload">Upload</a>
                </li>
                <li className="nav-item">
                  <a href="/api/users/logout" id="logoutButton" className="nav-link active">Logout</a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a className="nav-link active" id="loginButton" aria-current="page" href="/login">Login</a>
              </li>
            )}
          </ul>
          {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}


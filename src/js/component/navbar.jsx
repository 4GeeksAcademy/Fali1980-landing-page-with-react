import React from "react";

const Navbar =()=>{
   return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand text-white fw-semibold" href="#">Start Bootstrap</a>
            <button className="navbar-toggler buttonToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon barsHor"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active text-white fw-semibold" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-white" href="#">About</a>
                    <a className="nav-link text-white" href="#">Service</a>
                    <a className="nav-link text-white" href="#">Contact</a>
                </div>
            </div>
        </div>
    </nav>
   
   );
}

export default Navbar
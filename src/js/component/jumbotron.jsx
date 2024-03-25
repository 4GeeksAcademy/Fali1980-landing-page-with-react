import React from "react";

const Jumbotron =() => {
    return (
      <div className="container mt-4">
        <div className="position-relative p-5 text-start text-muted jumboStyle border border-dashed rounded-2">
          <h1 className="text-body-emphasis text-black">A Warm Welcome!</h1>
          <p className="col mb-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel quibusdam corrupti perspiciatis vitae officia. Impedit, minima distinctio nemo repudiandae cum dignissimos fugit maxime, porro hic corporis tempore eum nobis.</p>
          <button className="btn btn-primary py-2 px-5 mb-5" type="button">
            Call to action!
          </button>
        </div>
      </div>
    );
};

export default Jumbotron
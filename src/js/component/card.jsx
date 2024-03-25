import React from "react";

const Card =()=>{
   return (
            <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="card h-100">
                    <div className="imageCard d-flex justify-content-center align-items-center fs-2 text-secondary rounded-1">500 x 325</div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus quasi temporibus amet nulla, saepe nihil inventore explicabo velit doloribus!</p>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-primary px-4" type="button">
                            Find out more!
                        </button>
                    </div>
                </div>
            </div>


   );
}

export default Card
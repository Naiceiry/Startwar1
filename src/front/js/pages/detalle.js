import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
const Detalle = (props) => {
  return (
   <div className="card mb-3" style="max-width: 540px;">
         <div className="row no-gutters">
            <div className="col-md-4">
              <img src="..." alt="..."></img>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
  </div>

  );
};

export default Detalle;
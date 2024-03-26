import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Brandlogos from "./Brandlogos";
import Pricerange from "./Pricerange";
import Priceunder from "./Priceunder";

function MyComponent() {
  return (
    // <Container>
      <div className="row p-5" >
        {/* Left Column */}
        <div className="col-md-7 col-sm-6 col-xs-12">
          <div className="cards">
            <div className="card-body">
              <Pricerange />
              <Priceunder />
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="col-md-5 col-sm-6 col-xs-12">
          <div className="cards">
            <div className="card-body">
              <Brandlogos />
            </div>
          </div>
        </div>
      </div>
    // </Container>
  );
}

export default MyComponent;

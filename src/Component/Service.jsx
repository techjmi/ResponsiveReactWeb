import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card"
import {Sdata} from "./Sdata.jsx"

const Service = () => {
  return (
    <>
      <div className="my-5 text-center">
        <h1>Our Service</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((val, ind) => (
                  <Card key={val.id} title={val.title} description={val.description} imageUrl={val.imageUrl}  keywords={val.keywords}/>
                ))
              }

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

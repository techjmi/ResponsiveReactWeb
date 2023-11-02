import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , NavLink} from "react-router-dom"; 


const Common = (props) => {
  return (

      <section id="header" className="d-flex align-items-center justify-content-center">
        <div className="container-fluid nav_bg">
           <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className=" mt-5 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center justify-content-center flex-column">
                <h1>{props.name }</h1>
                <h2 className="my-3"> Lorem Ipsum has been the industry's standard </h2>
                <div className="mt-3">
                  <Link to={props.visit} className="btn btn-primary">
                    {props.btname}
                  </Link>
                </div>
              </div>
              <div className=" mt-5 col-md-6 order-1 order-lg-2 header-img d-flex align-items-center justify-content-center">
                <img src="logoweb.jpg" className="img-fluid animated" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
          </div>
      </section>

  );
};

export default Common;

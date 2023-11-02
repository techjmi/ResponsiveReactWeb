import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formSubmit = (event) => {
   event.preventDefault()
    alert("form Submitted")
  };

  const InputEvent = (e) => {
    //  update the state here with the new input value
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="my-2 text-center">
        <h1>Contact Us</h1>
      </div>
      <div className="container-fluid contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Number"
                  name="phone" // Changed from "data.phone" to "phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

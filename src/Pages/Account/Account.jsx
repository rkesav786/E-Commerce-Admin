import React from "react";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  let navigate = useNavigate();

  const HandleSubmit = (event) => {
    event.preventDefault(); 
      navigate("/admin");
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
      <form onSubmit={HandleSubmit}>
        <div className="form-group mt-2 ">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mt-2 mb-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

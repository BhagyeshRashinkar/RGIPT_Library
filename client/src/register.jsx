import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword)) {
      axios.post("http://localhost:3001/register", user).then((res) => {
        alert(res.data.message);
        navigate("/");
      })


    } else {
      alert("invalid response");
    }
  }


  return (
    <div className="main">
      <Header />
      <div className="center  ">
        <form className="grey">
          <div className="mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input type="text" name="name" value={user.name} required={true} onChange={handleChange} id="form3Example1c" className="form-control" />
              <label className="form-label" htmlFor="form3Example1c">
                Your Name
              </label>
            </div>
          </div>

          <div className="mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input type="email" name="email" value={user.email} required={true} onChange={handleChange} id="form3Example3c" className="form-control" />
              <label className="form-label" htmlFor="form3Example3c">
                Your Email
              </label>
            </div>
          </div>

          <div className="mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input type="password" name="password" value={user.password} required={true} onChange={handleChange} id="form3Example4c" className="form-control" />
              <label className="form-label" htmlFor="form3Example4c">
                Password
              </label>
            </div>
          </div>

          <div className="mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                name="reEnterPassword"
                value={user.reEnterPassword}
                required={true}
                onChange={handleChange}
                id="form3Example4cd"
                className="form-control"
              />
              <label className="form-label" htmlFor="form3Example4cd">
                Repeat your password
              </label>
            </div>
          </div>

          <div className="mx-4 mb-3 mb-lg-4">
            <button type="button" className="btn btn-dark btn-lg" onClick={register}>
              Register
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Register;

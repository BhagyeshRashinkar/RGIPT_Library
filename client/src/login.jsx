import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = ({setLoginUser}) => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    const { email, password } = user
    if (email && password) {
      axios.post("http://localhost:3001/login", user).then((res)=>{
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/home");
      })
    }
  }

  return (
    <div className="main">
      {<Header />}
      <div className="center">
        <form className="grey">
          <div className="form-outline mb-4">
            <input
              type="email"
              name="email"
              value={user.email}
              required={true}
              onChange={handleChange}
              placeholder="Enter Your E-mail"
              id="form2Example1"
              className="form-control "
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              value={user.password}
              required={true}
              onChange={handleChange}
              placeholder="Enter Your Password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          <button type="button" className="btn btn-primary btn-dark mb-4" onClick={login}>
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to='/register'>register</Link>
            </p>
          </div>
        </form>
      </div>
      {<Footer />}
    </div>
  );
};

export default Login;

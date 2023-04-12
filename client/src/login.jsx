import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({ setLoginUser }) => {

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
      axios.post("http://localhost:3001/login", user).then((res) => {
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
        <div className="flex-child">
          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg" class="d-block w-100 quote" alt="quote" />
              </div>
              <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_960_720.jpg" class="d-block w-100  quote" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_960_720.jpg" class="d-block w-100 quote" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


        <div className="flex-child">
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
        <div className="flex-child">
          <div id="carouselExample1" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg" class="d-block w-100 quote" alt="quote" />
              </div>
              <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_960_720.jpg" class="d-block w-100 quote" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_960_720.jpg" class="d-block w-100 quote" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {<Footer />}
    </div>
  );
};

export default Login;

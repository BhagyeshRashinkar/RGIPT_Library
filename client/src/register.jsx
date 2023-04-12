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
      <div className="flex-child">
          <div id="carouselExample" class="carousel slide">
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
          <div className="mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input type="text" name="name" value={user.name} placeholder="Enter Name" required={true} onChange={handleChange} id="form3Example1c" className="form-control" />
              <label className="form-label" htmlFor="form3Example1c">
                Your Name
              </label>
            </div>
          </div>

          <div className="mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input type="email" name="email" value={user.email} placeholder="Enter E-mail" required={true} onChange={handleChange} id="form3Example3c" className="form-control" />
              <label className="form-label" htmlFor="form3Example3c">
                Your Email
              </label>
            </div>
          </div>

          <div className="mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input type="password" name="password" value={user.password} placeholder="Enter Password" required={true} onChange={handleChange} id="form3Example4c" className="form-control" />
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
                placeholder="Re-enter Password"
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
      <div className="flex-child">
          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg" class="d-block w-100 quote" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_960_720.jpg" class="d-block w-100 quote" alt="..." />
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
      </div>
      <Footer />
    </div>
  );
};
export default Register;

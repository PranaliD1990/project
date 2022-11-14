import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm text-dark">
          <div class="container-fluid">
            <img src="\image\logo.png" alt="logo" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="collapsibleNavbar"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/About">
                    About Us
                  </Link>
                </li>

                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/Business">
                        Business Setup
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Compliances">
                        Compliances
                      </Link>
                    </li>

                    <li>
                      <Link class="dropdown-item" to="/Audit">
                        Audit And Assurance Services
                      </Link>
                    </li>

                    <li>
                      <Link class="dropdown-item" to="/Outsource">
                        Outsourced Accounting And Book Keeping Services
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Financial">
                        Financial Advisory And Management Consultancy
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <button
              class="btn btn-light m-5 justify-content-center border"
              type="button"
            >
              Get A Quote
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

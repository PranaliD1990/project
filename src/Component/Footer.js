import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid mt-1 bg-secondary">
          <div class="row">
            <div class="col p-3 text-white">
              <img
                src="\image\footerlogo.png"
                alt="logo"
                class="img-fluid"
                style={{ height: "150px", width: "150px" }}
              />
            </div>
            <div class="col p-3 text-white">
              <h4>Services</h4>
              <Link
                to="/Business"
                style={{ color: "black", textDecoration: "none" }}
              >
                » Business Setup
              </Link>
              <br />
              <Link
                to="/Compliances"
                style={{ color: "black", textDecoration: "none" }}
              >
                » Compliances
              </Link>
              <br />
              <Link
                to="/Audit"
                style={{ color: "black", textDecoration: "none" }}
              >
                » Audit and Assurances
              </Link>
              <br />
              <Link
                to="/Outsource"
                style={{ color: "black", textDecoration: "none" }}
              >
                » Outsourced Accounting And Book Keeping Services
              </Link>
              <br />
              <Link
                to="/Financial"
                style={{ color: "black", textDecoration: "none" }}
              >
                » Financial Advisory And Management Consultancy
              </Link>
            </div>
            <div class="col p-3 text-white">
              <h4>Contact Info</h4>
              <p style={{ color: "black" }}>
                <i
                  class="fa-solid fa-location-dot"
                  style={{ padding: "5px", color: "blue" }}
                ></i>
                B-102, Trade Square, Mehra Compound, Sakinaka, Andheri East,
                Mumbai 400072.
              </p>
              <p style={{ color: "black" }}>
                <i
                  class="fa-solid fa-phone"
                  style={{ padding: "5px", color: "blue" }}
                ></i>
                9987636927
              </p>
              <p style={{ color: "black" }}>
                <i
                  class="fa-solid fa-envelope"
                  style={{ padding: "5px", color: "blue" }}
                ></i>
                vpaiyapilly@gmail.com
              </p>
            </div>
          </div>
          <hr />
          <p>Copyright © 2022 Chartered Accountant in Mumbai</p>
          <p>Powered by Pranali D</p>
        </div>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        {/* intro */}
        <div class="container-fluid bg-primary">
          <div class="row">
            <div class="col-sm-6 p-3 text-white">
              <h1>Joyce</h1>
              <h1>Roberts</h1>
              <h6>Practical Financial Advice You Can Count On</h6>
              <p>
                Invest your time and efforts on running your business.
                <br /> Leave the accounting to me.
              </p>
              <div class="row">
                <div class="col-sm-6">
                  <button class=" btn btn-light" type="button">
                    Get A Free Quote
                  </button>
                </div>
                <div class="col-sm-6">
                  <button class=" btn btn-light text-dark" type="button">
                    Learn More
                  </button>
                </div>
              </div>
              <div class="row text-white m-5">
                <div class="col-sm-4">
                  <h6>☑ Trusted</h6>
                </div>
                <div class="col-sm-4">
                  <h6>☑ Experienced</h6>
                </div>
                <div class="col-sm-4">
                  <h6>☑ Professional</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6  ">
              <img
                src="\image\accountant.png"
                alt="img"
                class="img-fluid"
                id="introimg"
                style={{ heigt: "50%", width: "50%" }}
              />
            </div>
          </div>
        </div>
        {/* info */}

        <div class="container fluid text-center m-3">
          <h1>Salian Paiyapilly & Co</h1> <br />
          <p>
            Salian Paiyapilly is one of the leading Chartered Accountants Firm
            in Mumbai. We managed and run by group of qualified <br /> Chartered
            Accountants, Company Secretaries, Corporate Financial Advisors & Tax
            Consultants. We have accumulated with us 15 <br /> years experience
            of adding value to clients by providing multitude of serivces.
          </p>
        </div>

        <div class="container-fluid m-3 justify-content-center">
          <div class="row" style={{ padding: "50px" }}>
            <div class="col-md-6 bg-light text-dark ">
              <h3>OUR VALUE PROPOSITION</h3>
              <br />
              <ul type="none" style={{ textAlign: "left" }}>
                <li>
                  ▶ Team of professionals understanding present day requirement
                </li>
                <li>
                  ▶ Professionals specialized in each area of services providing
                  required expertise
                </li>
                <li>
                  ▶ Dedicated team for each area of services delivering quality
                  and timely service
                </li>
                <li>
                  ▶ Service delivery model based on client value addition and
                  client satisfaction
                </li>
                <li>
                  ▶ Various statutory compliance services under one umbrella
                </li>
                <li>▶ Cost competitive services</li>
                <li>▶ Adoption of latest technology in service delivery</li>
              </ul>
            </div>
            <div class="col-md-6">
              <img src="\image\money.jpg" alt="img" class="img-fluid" />
            </div>
          </div>
        </div>
        {/* services */}
        <div class="container-fluid m-3">
          <div class="container-fluid text-primary text-center">
            <h6>SERVICES</h6>
          </div>
          <div class="container-fluid text-dark text-center">
            <h1>What We Do</h1>
          </div>

          <div class="row">
            <div class="col p-3">
              <img
                src="\image\business setup.jpg"
                alt="err"
                class="img-fluid"
              />
            </div>
            <div class="col">
              <p style={{ color: "blue" }}>01.</p>
              <h4 style={{ color: "black" }}>Business Setup</h4>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
              <button type="button">
                <Link to="/Business"> Read More</Link>
              </button>
            </div>

            <div class="row">
              <div class="col p-3">
                <p style={{ color: "blue" }}>02.</p>
                <h4 style={{ color: "black" }}>Compliances</h4>
                <p style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <button type="button">
                  <Link to="/Compliances"> Read More</Link>
                </button>
              </div>
              <div class="col p-3">
                <img src="\image\compliances.jpg" alt="err" class="img-fluid" />
              </div>
            </div>

            <div class="row">
              <div class="col p-3">
                <img
                  src="\image\Audit And Assurance Services.jpg"
                  alt="err"
                  class="img-fluid"
                />
              </div>
              <div class="col p-3">
                <p style={{ color: "blue" }}>03.</p>
                <h4 style={{ color: "black" }}>Audit And Assurance Services</h4>
                <p style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
                <button type="button">
                  <Link to="/Audit"> Read More</Link>
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col p-3">
                <p style={{ color: "blue" }}>04.</p>
                <h4 style={{ color: "black" }}>
                  Outsourced Accounting And Book Keeping Services
                </h4>
                <p style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
                <button type="button">
                  <Link to="/Outsource"> Read More</Link>
                </button>
              </div>
              <div class="col p-3">
                <img
                  src="\image\Outsourced Accounting And Book Keeping Services.jpg"
                  alt="err"
                  class="img-fluid"
                />
              </div>
            </div>

            <div class="row">
              <div class="col p-3">
                <img
                  src="\image\Financial Advisory And Management Consultancy.jpg"
                  alt="err"
                  class="img-fluid"
                />
              </div>
              <div class="col p-3">
                <p style={{ color: "blue" }}>05.</p>
                <h4 style={{ color: "black" }}>
                  Financial Advisory And Management Consultancy
                </h4>
                <p style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
                <button type="button">
                  <Link to="/Financial"> Read More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* selection */}
        <div class="container-fluid">
          <div class="container-fluid text-primary text-center">
            <h6>WHY CHOOSE ME</h6>
          </div>
          <div class="container-fluid text-dark text-center">
            <h1>Accurate Record Keeping</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div class="row">
            <div class="col-sm border rounded m-1">
              <i class="fa-solid fa-calendar-check"></i>
              <br />
              <h4>Always On Time</h4>
              <p>
                Click edit button to change this text. <br />
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div class="col-sm border rounded m-1">
              <i class="fa-sharp fa-solid fa-bag-shopping"></i>
              <h4>Hard Working</h4>
              <p>
                Click edit button to change this text.
                <br /> Lorem ipsum dolor sit amet
              </p>
            </div>
            <div class="col-sm border rounded m-1">
              <i class="fa-solid fa-clock"></i>
              <br />
              <h4>24/7 Availability</h4>
              <p>
                Click edit button to change this text.
                <br /> Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div class="container-fluid m-3">
          <div class="container-fluid text-primary text-center">
            <h6>TESTIMONIALS</h6>
          </div>
          <div class="container-fluid text-dark text-center">
            <h1>What My Clients Say?</h1>
          </div>
          <div class="row">
            <div class="col-sm border rounded m-3">
              <i class="fa-solid fa-quote-left" style={{ color: "blue" }}></i>
              <p>
                Click edit button to change this text. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <br />
              <h6>Amanda Lee</h6>
              <p>CEO & Founder Crix</p>
            </div>

            <div class="col-sm border rounded m-3">
              <i class="fa-solid fa-quote-left" style={{ color: "blue" }}></i>
              <p>
                Click edit button to change this text. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <br />
              <h6>Adam Cheise</h6>
              <p>Director at Dynamic</p>
            </div>

            <div class="col-sm border rounded m-3">
              <i class="fa-solid fa-quote-left" style={{ color: "blue" }}></i>
              <p>
                Click edit button to change this text. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <br />
              <h6>Catherine Gilbert</h6>
              <p>Director at Initech</p>
            </div>
          </div>
        </div>

        <div id="footerlogo" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner align-center">
            <div class="carousel-item active">
              <img src="\image\1.png" alt="err" class="d-block" />
            </div>
            <div class="carousel-item">
              <img src="\image\2.png" alt="err" class="d-block" />
            </div>
            <div class="carousel-item">
              <img src="\image\3.png" alt="err" class="d-block" />
            </div>
            <div class="carousel-item">
              <img src="\image\4.png" alt="err" class="d-block" />
            </div>
            <div class="carousel-item">
              <img src="\image\5.png" alt="err" class="d-block" />
            </div>
          </div>
        </div>
        {/* Quote */}
        <div class="container-fluid mt-3 bg-secondary">
          <div class="row">
            <div class="col-sm-6">
              <img
                src="\image\accountant.png"
                alt="ca"
                class="img-fluid"
                style={{ height: "400px", width: "400px" }}
              />
            </div>
            <div class="col-sm-6 p-5 text-dark center-block">
              <h6>FREE ESTIMATION</h6>
              <h1>Request A Quote</h1>
            </div>
          </div>
        </div>

        {/* footer */}
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid bg-primary text-white p-5 m-3">
          <h6 style={{ textAlign: "left" }}>GET IN TOUCH</h6>
          <h1 style={{ textAlign: "left" }}>Contact</h1>
        </div>
        <div class="container-fluid m-3">
          <div class="row">
            <div class="col-sm-6 p-3 text-dark">
              <h6>GET IN TOUCH</h6>
              <h4>Contact Details</h4>
              <h5>Address​</h5>
              <i
                class="fa-solid fa-location-dot"
                style={{ padding: "5px", color: "blue" }}
              ></i>
              <p>
                B-102, Trade Square, Mehra Compound, Sakinaka, <br />
                Andheri East, Mumbai 400072
              </p>
              <br />
              <h5>Phone Numbers​</h5>
              <i
                class="fa-solid fa-phone"
                style={{ padding: "5px", color: "blue" }}
              ></i>
              <p>+91 9987636927</p>

              <br />
              <h5>Email</h5>
              <i
                class="fa-solid fa-envelope"
                style={{
                  padding: "5px",
                  color: "blue",
                  width: "50px",
                  height: "50px",
                }}
              ></i>
              <p>vpaiyapilly@gmail.com</p>
              <br />
              <h4>Follow Us</h4>
              <i
                class="fa-brands fa-facebook"
                style={{ margin: "5px", color: "blue" }}
              ></i>
              <i
                class="fa-brands fa-twitter"
                style={{ margin: "5px", color: "blue" }}
              ></i>
              <i
                class="fa-brands fa-linkedin"
                style={{ margin: "5px", color: "blue" }}
              ></i>
              <i
                class="fa-solid fa-envelope"
                style={{ margin: "5px", color: "blue" }}
              ></i>
            </div>

            <div class="col-sm-6 p-3 text-dark">
              <h6>BUSINESS ENQUIRY</h6>
              <h4>Request A Quote</h4>
              <div class="container mt-3">
                <form action="/action_page.php">
                  <div class="mb-3 mt-3">
                    <input
                      type="email"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div class="mb-3 mt-3">
                    <label for="email">Organisation Name:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="ogname"
                      placeholder="Organisation Name"
                      name="ogname"
                      required
                    />
                  </div>
                  <div class="mb-3 mt-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                      required
                    />
                  </div>
                  <div class="mb-3 mt-3">
                    <input
                      type="email"
                      class="form-control"
                      id="ph"
                      placeholder="Phone Number"
                      name="ph"
                      required
                    />
                  </div>
                  <div class="mb-3 mt-3">
                    <label for="comment">Message:</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      placeholder="Messade"
                      name="text"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <iframe
              class="d-flex align-left"
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d30161.528992650332!2d72.8858137!3d19.0992696!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c9622c2e4495%3A0xe1a59688bb082ec1!2sSalian%20Paiyapilly%20%26%20Co%20-%20Chartered%20Accountants%20(CA%20firm)%20Sakinaka%20Andheri%20East%20Mumbai.%20B-102%2C%20Trade%20Square%20Mehra%20Compound%20next%20to%20DSK%20Madhuban%20Society%2C%20Saki%20Naka%20Andheri%20East%20Mumbai%2C%20Maharashtra%20400072!3m2!1d19.0992696!2d72.8858137!5e0!3m2!1sen!2sin!4v1668246653372!5m2!1sen!2sin"
              style={{
                width: "800px",
                height: "400px",
                border: "0 ",
                margin: "10px",
                float: "left",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

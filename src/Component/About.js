import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid bg-primary text-white p-5 m-3">
          <h6 style={{ textAlign: "left" }}>A FEW WORDS</h6>
          <h1 style={{ textAlign: "left" }}>About Us</h1>
        </div>
        <div class="container mt-3">
          <h6 style={{ color: "blue", textAlign: "left" }}>
            EXCEPTIONAL SERVICE
          </h6>
          <img
            src="\image\money.jpg"
            class="float-end img-fluid"
            alt="image"
            style={{ width: "250px", height: "250px" }}
          />
          <p style={{ textAlign: "left" }}>
            We are a Chartered Accountant Firm with over a decade of experience
            in Accounting, Direct and Indirect Taxation, Statutory, Concurrent
            and Internal Auditing and Consultancy Services for Banks, Companies,
            Partnership Firms, LLPs, Trusts, Associations and Individuals.
          </p>

          <p style={{ textAlign: "left" }}>
            We are a team of young, dynamic, and qualified professionals, with a
            flair for providing tailor made and personalized services for each
            client based on our interactions with them and our understanding of
            their requirements as well as the nature of their business.
          </p>

          <p style={{ textAlign: "left" }}>
            We are a Chartered Accountant Firm with over a decade of experience
            in Accounting, Direct and Indirect Taxation, Statutory, Concurrent
            and Internal Auditing and Consultancy Services for Banks, Companies,
            Partnership Firms, LLPs, Trusts, Associations and Individuals. We
            are a team of young, dynamic, and qualified professionals, with a
            flair for providing tailor made and personalized services for each
            client based on our interactions with them and our understanding of
            their requirements as well as the nature of their business.
          </p>
        </div>
      </div>
    );
  }
}
export default About;

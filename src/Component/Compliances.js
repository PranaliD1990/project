import React, { Component } from "react";

class Compliances extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid bg-primary text-white p-5 m-3">
          <h6 style={{ textAlign: "left" }}>SERVICES</h6>
          <h1 style={{ textAlign: "left" }}>Compliances</h1>
        </div>

        <div class="container-fluid bg-light m-3">
          <div class="row">
            <div class="col-sm-4" style={{ border: "blue" }}>
              <div class="container-fluid" style={{ textAlign: "left" }}>
                <div class="card" style={{ textAlign: "left" }}>
                  <div
                    class="card-body"
                    style={{
                      color: "white",
                      backgroundColor: "rgb(6, 6, 48)",
                    }}
                  >
                    ▶ Taxation
                  </div>
                </div>
                <br />

                <div class="card">
                  <div
                    class="card-body"
                    style={{ color: "white", backgroundColor: "rgb(6, 6, 48)" }}
                  >
                    ▶ Corporate Law - ROC Filings And MCA Compliances
                  </div>
                </div>
                <br />

                <div class="card">
                  <div
                    class="card-body"
                    style={{ color: "white", backgroundColor: "rgb(6, 6, 48)" }}
                  >
                    ▶ Other Compliances
                  </div>
                </div>
                <br />
              </div>
            </div>

            <div class="col-sm-8">
              <div class="card">
                <div class="card-body">
                  <h3 style={{ color: "blueviolet" }}>Taxation</h3>
                  <h6 style={{ textAlign: "left" }}>- Direct Taxation:</h6>
                  <p style={{ textAlign: "left" }}>
                    <ul>
                      <li>
                        Application and Obtaining Permanent Account Number (PAN)
                        and Tax Deduction Account Number (TAN)
                      </li>
                      <li>Income Tax Returns Preparation and Filing</li>
                      <li>
                        Computation of TDS, Reconciliation and Deposit of TDS
                      </li>
                      <li>TDS Returns Preparation and Filing</li>
                      <li>Preparation of TDS Certificates</li>
                      <li>Calculation for payment of Advanced Tax</li>
                    </ul>
                  </p>

                  <h6 style={{ textAlign: "left" }}>- Indirect Taxation:</h6>
                  <p style={{ textAlign: "left" }}>
                    <ul>
                      <li>GST Registration</li>
                      <li>GST Implementation</li>
                      <li>
                        Computation of TDS, Reconciliation and Deposit of TDS
                      </li>
                      <li>GST Compliances</li>
                      <li>GST Return Filing</li>
                    </ul>
                  </p>
                </div>
              </div>
              <br />

              <div class="card">
                <div class="card-body">
                  <h3 style={{ color: "blueviolet" }}>
                    Corporate Law - ROC Filings And MCA Compliances
                  </h3>

                  <p style={{ textAlign: "left" }}>
                    We undertake filing of various Returns based on the
                    information provided by the client such as DIR-3 KYC, Annual
                    Returns, Financial Statements, Appointment of Auditor,
                    Appointment/Resignation of Director, Change in Share Capital
                    or Share Holding, Changes in Memorandum of Association and
                    other compliances that may become applicable from time to
                    time.
                  </p>
                </div>
              </div>
              <br />

              <div class="card">
                <div class="card-body">
                  <h3 style={{ color: "blueviolet" }}>Other Compliances</h3>
                  <p style={{ textAlign: "left" }}>
                    We also offer services related to compliances related to
                    other Acts and Laws as generally applicable to our clients
                    such as:
                  </p>
                  <p style={{ textAlign: "left" }}>
                    <ul>
                      <li>Professional Tax Remittance and Returns filing</li>
                      <li>PF Act Compliance, Returns and Remittances</li>
                      <li>ESI Act Compliance, Remittances</li>
                    </ul>
                  </p>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compliances;

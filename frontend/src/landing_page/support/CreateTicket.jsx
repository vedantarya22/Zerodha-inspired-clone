import React from "react";
import "./Hero.css";

import AccordianItem from "./AccordianItem";
function CreateTicket() {
  const accordionId = "accordionExample";

  return (
    <div className="container mt-5 " style={{ width: "95%" }}>
      <div className="row">
        <div className="col-8">
          <div class="accordion" id="accordionExample">
            <AccordianItem
              id="one"
              icon={<span class="material-symbols-outlined">add_circle</span>}
              title="Account Opening"
              items={[
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
              ]}
            />
            <br />
            <AccordianItem
              id="two"
              icon={
                <span class="material-symbols-outlined">account_circle</span>
              }
              title="Your Zerodha Account"
              items={[
                "Your Profile",
                "Accoutn modification",
                "Client Master Report (CMR) and Depository Participant(DP)",
                "Nomination",
                "Transfer and conversion of securities",
              ]}
            />
            <br />
            <AccordianItem
              id="three"
              icon={<span class="material-symbols-outlined">family_link</span>}
              title="Kite"
              items={[
                "Your Profile",
                "Accoutn modification",
                "Client Master Report (CMR) and Depository Participant(DP)",
                "Nomination",
                "Transfer and conversion of securities",
              ]}
            />
            <br />

            <AccordianItem
              id="four"
              icon={
                <span class="material-symbols-outlined">
                  currency_rupee_circle
                </span>
              }
              title="Funds"
              items={[
                "Add money",
                "Withdraw money",
                "Add bank accounts",
                "eMandates",
              ]}
            />
            <br />

            <AccordianItem
              id="five"
              icon={<span class="material-symbols-outlined">data_usage</span>}
              title="Console"
              items={[
                "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments",
              ]}
            />
            <br />

            <AccordianItem
              id="six"
              icon={<span class="material-symbols-outlined">toll</span>}
              title="Coin"
              items={[
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Fixed Deposit (FD)",
                "Features on Coin",
                "Payments and Orders",
                "General",
              ]}
            />
          </div>
        </div>
        <div className="col-4 px-5">
          <div
            style={{
              backgroundColor: "#FFF4E6",
              borderLeft: "8px Solid #FF9100",
            }}
            className="p-3 "
          >
            <ul>
              <li>
                <a href="">Rights Entitlements listing in November 2025</a>
              </li>
              <li>
                <a href="">Surveillance measure on scrips - November 2025</a>
              </li>
            </ul>
          </div>
          <div>
            
          </div>
          <table className="mt-5 "  border="1" style={{width:"100%"}} >
            <thead className="">
              <tr>
                <td scope="col" style={{fontWeight:"500"}}>Quick links</td>
              </tr>
            </thead>
            <tbody>
              <ol>
                <tr>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li>
                      <td>Track account opening</td>
                    </li>
                  </a>
                </tr>
                <tr>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li>
                      <td>Track segment activation</td>
                    </li>
                  </a>
                </tr>
                <tr>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li>
                      <td>Intraday margins</td>
                    </li>
                  </a>
                </tr>
                <tr>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li>
                      <td>Kite user manual</td>
                    </li>
                  </a>
                </tr>
                <tr>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li>
                      <td>Learn how to create a ticket</td>
                    </li>
                  </a>
                </tr>
                
              </ol>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

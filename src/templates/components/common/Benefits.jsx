import React from "react";

// *************   Image   **********************************************
import InsightFul from "../../../assests/icons/insightful.svg";
import EasyCustomizable from "../../../assests/icons/EasyCustomizable.svg";
import Accessible from "../../../assests/icons/accessible.svg";
import Enduring from "../../../assests/icons/enduring.svg";
import CertifiedOnboarding from "../../../assests/icons/CertifiedOnboarding.svg";
import TimeCost from "../../../assests/icons/time-cost.svg";
// ***********************************************************************

function Benefits() {
  return (
    <div className="why-hire-us">
      <div className="container">
        <h3 className="ribbon">Benefits of Hiring Salesforce Developer</h3>
        <div className="benefits flex">
          <div className="items">
            <div>
              <img
                loading="lazy"
                height={"90%"}
                width={"90%"}
                src={InsightFul}
                alt={"InsightFul"}
              />
              <p>Insightful Assessment</p>
            </div>
          </div>
          <div className="items">
            <div>
              <img
                loading="lazy"
                height={"90%"}
                width={"90%"}
                src={EasyCustomizable}
                alt={"EasyCustomizable"}
              />
              <p>Easy Customization</p>
            </div>
          </div>
          <div className="items">
            <div>
              <img
                loading="lazy"
                height={"90%"}
                width={"90%"}
                src={Accessible}
                alt={"Accessible"}
              />
              <p>Accessible Updates</p>
            </div>
          </div>
          <div className="items">
            <div>
              <img
                loading="lazy"
                height={"90%"}
                width={"90%"}
                src={Enduring}
                alt={"Enduring"}
              />
              <p>Enduring Partnership</p>
            </div>
          </div>
          <div className="items">
            <div>
              <img
                loading="lazy"
                height={"90%"}
                width={"90%"}
                src={CertifiedOnboarding}
                alt={"CertifiedOnboarding"}
              />
              <p>Certified Onboarding</p>
            </div>
          </div>
          <div className="items">
            <div>
              <img
                loading="lazy"
                height={"90%"}
                width={"90%"}
                src={TimeCost}
                alt={"TimeCost"}
              />
              <p>Time & Cost Efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

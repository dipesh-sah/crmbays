import React from "react";
import { Link } from "react-router-dom";

function DevSolution() {
  return (
    <div className="dev-solutions">
      <div className="container">
        <h2 className="ribbon">
          Salesforce<br></br> <span>Development Solutions</span>
        </h2>
        <p className="dev-desc">
          CRMBAYS offers a comprehensive range of Salesforce development
          services to meet our clients' ever-changing business needs. Our team
          of Salesforce experts will work with you to design a solution for your
          unique company needs, leveraging our extensive knowledge of Visual
          force and Apex to extend and customize Salesforce.
        </p>
        <div className="solutions-desc">
          <div className="left">
            <p>
              Salesforce is a prominent and popular technology for automating
              everyday processes and improving customer support. CRMBAYS designs
              the floor of cloud computing to be comfortable and economical for
              you. Salesforce Lightning Force, Developer Console Workbench, and
              Salesforce Lightning Inspector, among other powerful developer
              tools from Salesforce, provide our customers with a dynamic
              environment to explore and expand their abilities.
            </p>
          </div>
          <div className="right">
            <ul>
              <li>
                <Link to={"/salesforce-admin-developer-support-services"}>
                  Admin &#38; Developer Support
                </Link>
              </li>
              <li>
                <Link to={"/salesforce-appexchange-services"}>AppExchange Services</Link>
              </li>
              <li>
                <Link to={"/system-integration-services-for-appexchange"}>
                  System Integration
                </Link>
              </li>
              <li>
                <Link to={"/salesforce-lightning-migration-services"}>
                  Lightning Migration
                </Link>
              </li>
              <li>
                <Link to={"/salesforce-lightning-implementation-services"}>
                  Lightning Implementation
                </Link>
              </li>
              <li>
                <Link to={"/salesforce-marketing-cloud-services"}>Marketing Cloud</Link>
              </li>
              <li>
                <Link to={"/salesforce-consulting-services"}>
                  Salesforce Consulting
                </Link>
              </li>
              <li>
                <Link to={"/salesforce-community-cloud-implementation-services"}>
                  Community Cloud
                </Link>
              </li>
              <li>
                <Link to={"/salesforce-data-migration-services"}>
                  Data Migration
                </Link>
              </li>
              <li>
                <Link to={"/salesforce-cpq-services"}>Salesforce CPQ</Link>
              </li>
              <li>
                <Link to={"/integrate-salesforce-and-pardot"}>
                  Salesforce Pardot
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/salesforce-einstein-development-and-consultancy-services"
                  }
                >
                  Salesforce Einstein
                </Link>
              </li>
            </ul>
            <Link to={"/contact"} className="btn">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevSolution;

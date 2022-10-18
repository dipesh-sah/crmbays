import React from "react";

// ****************   Image **************************
import Listening from "../../../assests/img/listening.webp";
import Configuring from "../../../assests/img/configuring.webp";
import Integrating from "../../../assests/img/integrating.webp";
import Migrating from "../../../assests/img/migrating.webp";
import Launching from "../../../assests/img/launching.webp";
import Support from "../../../assests/img/support.webp";
// ***************************************************

function WorkProcess() {
  return (
    <div className="work-process">
      <div className="container">
        <h3 className="ribbon">Our Methods of Operation</h3>
        <div className="content-area">
          <div className="box flex">
            <div className="left">
              <img
                loading="lazy"
                width={"90%"}
                height={"90%"}
                src={Listening}
                alt={"Listening"}
              />
            </div>
            <div className="right">
              <h4>Salesforce Project Discussion</h4>
              <p>
                When our Salesforce Consulting Partners examine your
                company&#39;s structure, they will point out any links to the
                world of work. We&#39;ll be able to provide a more effective
                solution for your company, such as a shorter sales cycle or
                adding customer support software. All answers will be developed
                and tailored to fit the specific requirements of the business in
                question.
              </p>
            </div>
          </div>
          <div className="box flex">
            <div className="left">
              <img
                loading="lazy"
                width={"90%"}
                height={"90%"}
                src={Configuring}
                alt={"Configuring"}
              />
            </div>
            <div className="right">
              <h4>Salesforce Configuration</h4>
              <p>
                Salesforce editions that are appropriate for your company&#39;s
                needs should be available. CRMBAYS will ensure that a prominent
                Salesforce feature version is available to meet all requirements
                in the configuration services. In addition, it is essential to
                agree on the team&#39;s skills before making a final decision.
              </p>
            </div>
          </div>
          <div className="box flex">
            <div className="left">
              <img
                loading="lazy"
                width={"90%"}
                height={"90%"}
                src={Integrating}
                alt={"Integrating"}
              />
            </div>
            <div className="right">
              <h4>Salesforce Integration</h4>
              <p>
                It&#39;s time to integrate the procedure after deciding on a
                well-known solution for your company. Your team will benefit
                from CRMBAYS&#39;s ease of integration and quality assurance, as
                well as its assistance in learning the process and adapting. As
                part of Salesforce Implementation Services, valuable data will
                be transformed into a new configuration.
              </p>
            </div>
          </div>
          <div className="box flex">
            <div className="left">
              <img
                loading="lazy"
                width={"90%"}
                height={"90%"}
                src={Migrating}
                alt={"Migrating"}
              />
            </div>
            <div className="right">
              <h4>Salesforce Migration</h4>
              <p>
                Using Salesforce Migration Services, data acquired from numerous
                sources and imported into the Salesforce platform is moved
                without interruption. With the aid of Tooling APIs, our
                outstanding Salesforce Implementation Consultants will ensure a
                smooth transfer.
              </p>
            </div>
          </div>
          <div className="box flex">
            <div className="left">
              <img
                loading="lazy"
                width={"90%"}
                height={"90%"}
                src={Launching}
                alt={"Launching"}
              />
            </div>
            <div className="right">
              <h4>Salesforce Project Lunching</h4>
              <p>
                Using our Salesforce project engagements and managed services,
                you&#39;ll be able to focus on your core business as we help you
                successfully adopt Salesforce, advance your current usage,
                provide great technical expertise, and provide comprehensive
                operational support.
              </p>
            </div>
          </div>
          <div className="box flex">
            <div className="left">
              <img
                loading="lazy"
                width={"90%"}
                height={"90%"}
                src={Support}
                alt={"Support"}
              />
            </div>
            <div className="right">
              <h4>Salesforce Support</h4>
              <p>
                Expertise in the Salesforce Lightning architecture and all of
                its components is available to our Salesforce team. To help you
                make the most of the Salesforce platform, we perform everything
                from Lightning conversions to activating new capabilities and
                creating custom dashboards. For the long-term benefit of our
                customers, we are dedicated to learning about their businesses
                and utilizing our Salesforce expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;

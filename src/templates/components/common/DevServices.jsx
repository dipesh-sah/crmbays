import React from "react";
import SalesForece1 from "../../../assests/img/Salesforce.svg";
import SalesForece2 from "../../../assests/img/salesforce2.svg";
const Carousel = () => {
  const _items = [
    {
      carousel: {
        title: "Salesforce Consulting",
        desc: `CRMBAYS &#39;s top-of-the-line Salesforce consulting &amp; CRM services may help you take your business to the next level. You must provide clients with only the best services to transform your company. When it comes to salesforce management, CRMBAYS is here to help. We offer a wide range of services for creating and executing sales teams.`,
        image: SalesForece1,
      },
    },
    {
      carousel: {
        title: "Salesforce Integration",
        desc: `To deliver a single, integrated experience for users, Salesforce integration merges data and functionality from Salesforce with those of another application. You can use it to provide your employees with the best of both worlds. Syncing data between two systems and switching between them while completing specific tasks is a common problem for Salesforce users. With the help of Salesforce integration, they can put an end to this issue and work from a single location.`,
        image: SalesForece2,
      },
    },
    {
      carousel: {
        title: "Salesforce Customization",
        desc: `The term &ldquo;customization&rdquo; in the context of Salesforce denotes adding additional features or functionalities that aren't provided by default in the program. External tools for generating business-specific functionalities are incorporated into the process, including creating custom code. Salesforce customization is available if you need a specific feature that cannot be obtained through standard settings. It suggests the use of code to alter your solution. When you have a lot of data, complicated business logic, and the basic Salesforce capabilities won't cut it, you'll have to turn to customization.`,
        image: SalesForece2,
      },
    },
  ];

  return (
    <div className="dev-services">
      <div className="container">
        <h2 className="ribbon txt_center">Salesforce Development Services</h2>
        <div className="slider-content flex">
          {_items.map((currElem, index) => {
            return (
              <div key={index} className="salesforce txt_white">
                <div className="wrapper">
                  <div className="services-img">
                    <img
                      src={currElem.carousel.image}
                      loading="lazy"
                      alt="Salesforce"
                      height={"100%"}
                      width={"100%"}
                    />
                  </div>
                  <div className="services-content">
                    <p>{currElem.carousel.title}</p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: currElem.carousel.desc,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

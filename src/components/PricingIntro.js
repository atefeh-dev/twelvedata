/** @format */

import React from "react";
import "../styles/pricingInfo.css";

const PricingIntro = () => {
  return (
    <div className="wrapper intro medium pricing-intro">
      <div className="container pt-5">
        <section className="row">
          <div className="col col-12 text-center description">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>
                <strong>Pricing</strong>
              </h1>
              <h2>Always know ahead what you will pay.</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default PricingIntro;

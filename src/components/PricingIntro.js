/** @format */

import React from "react";
import "../styles/pricingInfo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceCard from "./PriceCard";

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
          <div className="col col-12">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="btn-group btn-group-toggle td-mb-3"
                data-toggle="buttons"
                data-code="period-selector">
                <label className="btn btn-outline-primary active">
                  <input
                    type="radio"
                    name="billing_period"
                    value="monthly"
                    autoComplete="off"
                  />
                  Monthly billing
                </label>
                <label className="btn btn-outline-primary">
                  <input
                    type="radio"
                    name="billing_period"
                    value="yearly"
                    autoComplete="off"
                  />
                  Annual billing
                </label>
              </div>
            </div>
            <div className="row pricing-cards">
              <div className="col col-lg-3 col-md-6 col-12 mb-4 mt-4">
                <PriceCard />
              </div>
              <div className="col col-lg-3 col-md-6 col-12 mb-4 mt-4">1</div>
              <div className="col col-lg-3 col-md-6 col-12 mb-4 mt-4">1</div>
              <div className="col col-lg-3 col-md-6 col-12 mb-4 mt-4">1</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default PricingIntro;

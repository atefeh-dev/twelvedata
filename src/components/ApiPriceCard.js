/** @format */

import React from "react";
import { useSelector } from "react-redux";

const ApiPriceCard = () => {
  const billingPeriodStore = useSelector((store) => store.billingPeriod);

  return (
    <div
      className="soft pricing-card__item  pricing-card__item_standart"
      data-code="pricing-card"
      data-category="enterprise"
      style={{
        paddingTop:
          billingPeriodStore.billingPeriod == "monthly" ? "40px" : "70px",
      }}>
      <div className="card__info" data-code="[card-info]">
        <div
          className={`card__label card__label_small card__label_green ${
            billingPeriodStore.billingPeriod === "monthly"
              ? "pricing-desc__free zero"
              : ""
          }`}
          data-code="common-profit">
          2 months for free
        </div>
        <div className="card__text-muted plans">API credits per minute</div>
        <div
          className="card__speed plans-top"
          data-category="4"
          data-code="quota-categories">
          <form className="d-flex justify-content-between dropdown-select">
            <label
              className="quota-selector-text  active  radio"
              data-code="quota-selector">
              <input
                type="radio"
                data-code="quota"
                data-quota="10946"
                name="quota"
                value="monthly-10946"
                data-category="4"
                autoComplete="off"
                style={{ display: "none" }}
              />
              10946
            </label>
            <label
              className="quota-selector-text  radio"
              data-code="quota-selector">
              <input
                type="radio"
                data-code="quota"
                data-quota="4181"
                name="quota"
                value="monthly-4181"
                data-category="4"
                autoComplete="off"
                style={{ display: "none" }}
              />
              4181
            </label>
            <label
              className="quota-selector-text  radio"
              data-code="quota-selector">
              <input
                type="radio"
                data-code="quota"
                data-quota="2584"
                name="quota"
                value="monthly-2584"
                data-category="4"
                autoComplete="off"
                style={{ display: "none" }}
              />
              2584
            </label>
          </form>
        </div>
        <div className="card__title">Enterprise</div>
        <div className="card__price d-flex align-items-start justify-content-center">
          <span className="card__price_currency">$</span>
          <span data-code="amount">999</span>
        </div>
        <div
          className={`card__price_year ${
            billingPeriodStore.billingPeriod === "monthly" ? "zero" : ""
          }`}
          data-code="price-year">
          $<span data-code="amount-yearly">11988</span> / year
        </div>
        <div
          className={`card__saving ${
            billingPeriodStore.billingPeriod === "monthly" ? "zero" : ""
          }`}
          data-code="rate-profit">
          Save $<span data-code="rate-profit-value">0</span> / year
        </div>
        <a
          className="btn btn-primary btn-block card__subscribe "
          href="https://twelvedata.com/subscribe/plan/monthly-10946"
          data-code="subscribe-text">
          Subscribe
        </a>
      </div>
      <div className="card__text">
        <ul className="list__wrap list__wrap_light">
          <li>
            Аll <strong>Pro</strong> features
          </li>
          <li>
            <span
              data-code="plan-ws"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Complete access to WebSocket with 10,000 WS credits">
              10,000 WS credits
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Access to Level C international exchanges">
              Level C stocks
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Guaranteed uptime SLA 99.95%">
              99.95% Uptime SLA
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Company key executives, institutional and fund holders">
              All fundamentals
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Direct chat with our tech team via private Slack channel">
              Ultimate support
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ApiPriceCard;

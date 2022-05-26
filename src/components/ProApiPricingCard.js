/** @format */

import React from "react";
import "../styles/pricecard.css";
import { useSelector } from "react-redux";

const ProApiPricingCard = () => {
  const billingPeriodStore = useSelector((store) => store.billingPeriod);

  return (
    <div
      className="soft pricing-card__item pricing-card__item_active pricing-card__item_standart"
      data-code="pricing-card"
      data-category="pro"
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
        <div className="card__label card__label_small card__label_dark">
          Most popular
        </div>
        <div className="card__text-muted plans">API credits per minute</div>
        <div
          className="card__speed plans-top"
          data-category="3"
          data-code="quota-categories">
          <form className="d-flex justify-content-between dropdown-select">
            <label
              className="quota-selector-text  active  radio"
              data-code="quota-selector">
              <input
                type="radio"
                data-code="quota"
                data-quota="1597"
                name="quota"
                value="monthly-1597"
                data-category="3"
                autoComplete="off"
                style={{ display: "none" }}
              />
              1597
            </label>
            <label
              className="quota-selector-text  radio"
              data-code="quota-selector">
              <input
                type="radio"
                data-code="quota"
                data-quota="987"
                name="quota"
                value="monthly-987"
                data-category="3"
                autoComplete="off"
                style={{ display: "none" }}
              />
              987
            </label>
            <label
              className="quota-selector-text  radio"
              data-code="quota-selector">
              <input
                type="radio"
                data-code="quota"
                data-quota="610"
                name="quota"
                value="monthly-610"
                data-category="3"
                autoComplete="off"
                style={{ display: "none" }}
              />
              610
            </label>
          </form>
        </div>
        <div className="card__title">Pro</div>
        <div className="card__price d-flex align-items-start justify-content-center">
          <span className="card__price_currency">$</span>
          <span data-code="amount">229</span>
        </div>
        <div
          className={`card__price_year ${
            billingPeriodStore.billingPeriod === "monthly" ? "zero" : ""
          }`}
          data-code="price-year">
          $<span data-code="amount-yearly">2,748</span> / year
        </div>
        <div
          className={`card__saving ${
            billingPeriodStore.billingPeriod === "monthly" ? "zero" : ""
          }`}
          data-code="rate-profit">
          Save $<span data-code="rate-profit-value">0</span> / year
        </div>
        <a
          className="btn btn-primary btn-block card__subscribe"
          href="https://twelvedata.com/subscribe/plan/monthly-1597"
          data-code="subscribe-text">
          Subscribe
        </a>
      </div>
      <div className="card__text">
        <ul className="list__wrap list__wrap_light">
          <li>
            All <strong>Grow</strong> features
          </li>
          <li>
            <span
              data-code="plan-ws"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Complete access to WebSocket with 1,500 WS credits">
              1,500 WS credits
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Access to Level B international exchanges">
              Level B stocks, ETFs, indices
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Company statistics, insider transactions, income statements, balance sheets, cash flows, and options">
              Essential fundamentals
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="The data could be displayed for third parties and redistributed">
              Commercial usage
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Chat and email support within a few hours">
              Premium support
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Extended hours data for US equities available from 1 min to 30 min interval">
              Pre-/post-market data
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProApiPricingCard;

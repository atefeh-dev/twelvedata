/** @format */

import React from "react";
import "../styles/pricecard.css";
const PriceCard = () => {
  return (
    <div
      className="soft pricing-card__item pricing-card__item_custom"
      data-code="pricing-card">
      <div className="card__info">
        <div
          className="card__label card__label_small card__label_green pricing-desc__free zero"
          data-code="common-profit">
          2 months for free
        </div>
        <div className="card__text-muted unlimited">
          Unlimited opportunities
        </div>
        <div className="plans-top-custom"></div>
        <div className="card__title custom">Custom plan</div>
        <div className="d-flex align-items-center justify-content-center">
          <span className="card__price_currency__text">starting from</span>
        </div>
        <div className="card__price d-flex align-items-start justify-content-center">
          <span className="card__price_currency">$</span>
          <span data-code="custom-amount">1,999</span>
        </div>
        <div className="card__price_year zero" data-code="price-year">
          $<span data-code="amount-yearly">19,999</span> / year
        </div>
        <div className="card__saving zero" data-code="rate-profit">
          Save $<span data-code="rate-profit-value">3,998</span> / year
        </div>
        <a
          className="btn btn-primary btn-block card__subscribe custom"
          href="https://twelvedata.com/contact/sales?source=pricing&amp;plan=custom&amp;period=monthly"
          data-code="custom-subscribe">
          Talk to sales
        </a>
      </div>
      <div className="card__text">
        <ul className="list__wrap list__wrap_dark">
          <li>
            All <strong>Enterprise</strong> features
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Get up to an unlimited amount of API credits">
              Extended API credits
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Get up to an unlimited amount of WebSocket credits">
              Extended WS credits
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Get help via preferred communication channels in real-time">
              Flexible support
            </span>
          </li>
          <li>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Get personalized pricing based on your needs and service usage">
              Volume pricing solutions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;

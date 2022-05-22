/** @format */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/nav.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand logo" href="https://twelvedata.com">
          <span class="twelve">twelve</span>data
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse navbarSupportedContent collapse"
          id="navbarNav">
          <ul className="navbar-nav mr-auto ml-auto items">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Products
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Developers
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true">
                Pricing
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto buttons">
            <li class="nav-item">
              <a class="nav-link action" href="https://twelvedata.com/login">
                Sign in{" "}
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.75 10L5.25 5.5L0.75 1"
                    stroke="#1D1D1F"
                    stroke-width="2"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

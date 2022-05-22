/** @format */

import React from "react";
import "../styles/nav.css";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      role="navigation"
      itemscope=""
      itemtype="https://www.schema.org/SiteNavigationElement">
      <div className="container">
        <a className="navbar-brand logo" href="https://twelvedata.com">
          <span className="twelve">twelve</span>data
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto items">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarProducts"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Products
              </a>
              <div
                className="dropdown-menu products"
                aria-labelledby="navbarProducts">
                <div className="menu-inner soft">
                  <div className="row">
                    <div className="col col-12 col-xl-8">
                      <span className="submenu-header">
                        <a href="https://twelvedata.com/market-data">
                          Market Data
                        </a>
                      </span>
                      <div className="row">
                        <div className="col col-md-6 col-sm-6 col-12">
                          <a
                            className="dropdown-item stocks"
                            href="https://twelvedata.com/stocks">
                            <div className="submenu-item-image">
                              <svg
                                width="68"
                                height="68"
                                viewBox="0 0 68 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip250)">
                                  <rect
                                    width="68"
                                    height="68"
                                    rx="34"
                                    fill="#D9DEE8"
                                    className="colored"></rect>
                                  <path
                                    d="M-2.5 39H7.91511C7.97108 39 8.02643 38.9883 8.07757 38.9655L12.3457 37.0686C12.4444 37.0247 12.5565 37.0226 12.6567 37.0627L17.3046 38.9219C17.4269 38.9708 17.5655 38.9563 17.6751 38.8833L26.2455 33.1697C26.3957 33.0695 26.5944 33.0824 26.7304 33.2012L33.7293 39.3113C33.9318 39.4881 34.2475 39.4188 34.3574 39.1736L40.6935 25.0387C40.8481 24.6939 41.3505 24.7359 41.4456 25.1016L47.1975 47.2158C47.281 47.5366 47.6961 47.6225 47.9 47.3612L54.3041 39.1539C54.3799 39.0568 54.4963 39 54.6195 39H60.5666C60.6323 39 60.697 38.9838 60.755 38.9528L66.7207 35.7673C66.8384 35.7044 66.9798 35.7044 67.0975 35.7673L73.0632 38.9528C73.1212 38.9838 73.1859 39 73.2516 39H95"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"></path>
                                  <rect
                                    x="40"
                                    y="-7"
                                    width="2"
                                    height="94"
                                    fill="white"></rect>
                                  <circle
                                    cx="41"
                                    cy="26"
                                    r="6"
                                    fill="white"
                                    stroke="#D9DEE8"
                                    stroke-width="2"></circle>
                                </g>
                                <defs>
                                  <clipPath id="clip250">
                                    <rect
                                      width="68"
                                      height="68"
                                      rx="34"
                                      fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <span className="submenu-item">Stock</span>
                            <span className="submenu-item-headline">
                              US &amp; global coverage
                            </span>
                          </a>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-12">
                          <a
                            className="dropdown-item forex"
                            href="https://twelvedata.com/forex">
                            <div className="submenu-item-image">
                              <svg
                                width="68"
                                height="68"
                                viewBox="0 0 68 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                  width="68"
                                  height="68"
                                  rx="34"
                                  fill="#D9DEE8"
                                  className="colored"></rect>
                                <circle
                                  cx="34"
                                  cy="35"
                                  r="21"
                                  stroke="white"
                                  stroke-width="2"></circle>
                                <circle
                                  cx="19"
                                  cy="20"
                                  r="9"
                                  fill="#D9DEE8"
                                  stroke="white"
                                  stroke-width="2"
                                  className="colored"></circle>
                                <circle
                                  cx="19"
                                  cy="47"
                                  r="9"
                                  fill="#D9DEE8"
                                  stroke="white"
                                  stroke-width="2"
                                  className="colored"></circle>
                                <circle
                                  cx="49"
                                  cy="20"
                                  r="9"
                                  fill="#D9DEE8"
                                  stroke="white"
                                  stroke-width="2"
                                  className="colored"></circle>
                                <circle
                                  cx="49"
                                  cy="47"
                                  r="9"
                                  fill="#D9DEE8"
                                  stroke="white"
                                  stroke-width="2"
                                  className="colored"></circle>
                                <path
                                  d="M50.3462 47.5788H51.9962V48.4918H49.9392V49.0968H51.9962V50.0098H49.9392V50.9998H48.1572V50.0098H46.1002V49.0968H48.1572V48.4918H46.1002V47.5788H47.7612L44.8462 43.2998H46.7492L49.1032 46.7428L51.4792 43.2998H53.2612L50.3462 47.5788Z"
                                  fill="white"></path>
                                <path
                                  d="M18.2231 49.57H21.9961V51H15.3301V49.57H16.4301V47.678H15.3301V46.611H16.4301V46.325C16.4301 45.3423 16.7417 44.5723 17.3651 44.015C17.9957 43.4503 18.8757 43.168 20.0051 43.168C20.8851 43.168 21.6221 43.3366 22.2161 43.674L21.6771 45.082C21.2371 44.818 20.6871 44.686 20.0271 44.686C19.4404 44.686 18.9931 44.8216 18.6851 45.093C18.3771 45.3643 18.2231 45.764 18.2231 46.292V46.611H20.8631V47.678H18.2231V49.57Z"
                                  fill="white"></path>
                                <path
                                  d="M21.7101 21.7455C21.7101 22.3468 21.4901 22.8638 21.0501 23.2965C20.6101 23.7218 19.9758 23.9858 19.1471 24.0885V25.3205H18.0471V24.1215C17.5044 24.0921 16.9874 23.9968 16.4961 23.8355C16.0048 23.6741 15.6088 23.4761 15.3081 23.2415L15.9131 21.8995C16.1918 22.1048 16.5181 22.2771 16.8921 22.4165C17.2661 22.5558 17.6511 22.6438 18.0471 22.6805V20.8435C17.5264 20.7188 17.0864 20.5795 16.7271 20.4255C16.3678 20.2715 16.0671 20.0478 15.8251 19.7545C15.5831 19.4538 15.4621 19.0578 15.4621 18.5665C15.4621 17.9578 15.6821 17.4371 16.1221 17.0045C16.5694 16.5645 17.2111 16.2968 18.0471 16.2015V14.9805H19.1471V16.1795C20.0491 16.2528 20.7934 16.4765 21.3801 16.8505L20.8301 18.2035C20.2801 17.8881 19.7191 17.6975 19.1471 17.6315V19.5015C19.6604 19.6188 20.0931 19.7545 20.4451 19.9085C20.8044 20.0551 21.1051 20.2788 21.3471 20.5795C21.5891 20.8728 21.7101 21.2615 21.7101 21.7455ZM17.2331 18.4785C17.2331 18.6618 17.3028 18.8121 17.4421 18.9295C17.5814 19.0468 17.7831 19.1458 18.0471 19.2265V17.6645C17.7684 17.7305 17.5631 17.8368 17.4311 17.9835C17.2991 18.1228 17.2331 18.2878 17.2331 18.4785ZM19.1471 22.6365C19.4111 22.5778 19.6091 22.4825 19.7411 22.3505C19.8731 22.2185 19.9391 22.0608 19.9391 21.8775C19.9391 21.6941 19.8694 21.5438 19.7301 21.4265C19.5981 21.3091 19.4038 21.2065 19.1471 21.1185V22.6365Z"
                                  fill="white"></path>
                                <path
                                  d="M49.6541 22.614C50.4241 22.614 51.0731 22.3096 51.6011 21.701L52.7341 22.757C52.3674 23.2043 51.9127 23.5453 51.3701 23.78C50.8347 24.0146 50.2334 24.132 49.5661 24.132C48.9281 24.132 48.3341 24.0183 47.7841 23.791C47.2414 23.5636 46.7794 23.241 46.3981 22.823C46.0167 22.405 45.7417 21.921 45.5731 21.371H44.3301V20.447H45.4081C45.4007 20.381 45.3971 20.282 45.3971 20.15C45.3971 20.018 45.4007 19.919 45.4081 19.853H44.3301V18.929H45.5731C45.7417 18.379 46.0167 17.895 46.3981 17.477C46.7794 17.059 47.2414 16.7363 47.7841 16.509C48.3341 16.2816 48.9281 16.168 49.5661 16.168C50.2334 16.168 50.8347 16.2853 51.3701 16.52C51.9127 16.7546 52.3674 17.092 52.7341 17.532L51.6011 18.588C51.0657 17.9866 50.4167 17.686 49.6541 17.686C49.1701 17.686 48.7374 17.796 48.3561 18.016C47.9747 18.236 47.6814 18.5403 47.4761 18.929H50.2591V19.853H47.2011C47.1937 19.919 47.1901 20.018 47.1901 20.15C47.1901 20.282 47.1937 20.381 47.2011 20.447H50.2591V21.371H47.4761C47.6814 21.7596 47.9747 22.064 48.3561 22.284C48.7374 22.504 49.1701 22.614 49.6541 22.614Z"
                                  fill="white"></path>
                              </svg>
                            </div>
                            <span className="submenu-item">Forex</span>
                            <span className="submenu-item-headline">
                              Physical currency
                            </span>
                          </a>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-12">
                          <a
                            className="dropdown-item crypto"
                            href="https://twelvedata.com/cryptocurrency">
                            <div className="submenu-item-image">
                              <svg
                                width="68"
                                height="68"
                                viewBox="0 0 68 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                  width="68"
                                  height="68"
                                  rx="34"
                                  fill="#D9DEE8"
                                  className="colored"></rect>
                                <path
                                  d="M35.0581 8.5V27.3487L50.9892 34.4675L35.0581 8.5Z"
                                  fill="white"
                                  fill-opacity="0.602"></path>
                                <path
                                  d="M35.0582 8.5L19.125 34.4675L35.0582 27.3487V8.5Z"
                                  fill="white"></path>
                                <path
                                  d="M35.0581 46.6826V59.49L50.9999 37.4346L35.0581 46.6826Z"
                                  fill="white"
                                  fill-opacity="0.602"></path>
                                <path
                                  d="M35.0582 59.49V46.6804L19.125 37.4346L35.0582 59.49Z"
                                  fill="white"></path>
                                <path
                                  d="M35.0581 43.7172L50.9892 34.467L35.0581 27.3525V43.7172Z"
                                  fill="white"
                                  fill-opacity="0.2"></path>
                                <path
                                  d="M19.125 34.467L35.0582 43.7172V27.3525L19.125 34.467Z"
                                  fill="white"
                                  fill-opacity="0.602"></path>
                              </svg>
                            </div>
                            <span className="submenu-item">Crypto</span>
                            <span className="submenu-item-headline">
                              Digital currency
                            </span>
                          </a>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-12">
                          <a
                            className="dropdown-item etf"
                            href="https://twelvedata.com/etf">
                            <div className="submenu-item-image">
                              <svg
                                width="68"
                                height="68"
                                viewBox="0 0 68 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                  width="68"
                                  height="68"
                                  rx="34"
                                  fill="#D9DEE8"
                                  className="colored"></rect>
                                <path
                                  d="M34.0348 51.9961C38.3698 51.9964 42.5581 50.4261 45.8244 47.576L33.1255 34.8771C33.0055 34.7575 32.9103 34.6154 32.8454 34.4589C32.7804 34.3024 32.7469 34.1347 32.7469 33.9652V16C28.0883 16.3301 23.7398 18.4559 20.6179 21.9294C17.496 25.4028 15.8445 29.9526 16.0115 34.6199C16.1785 39.2872 18.151 43.7073 21.5131 46.9488C24.8753 50.1902 29.3646 51.9998 34.0348 51.9961Z"
                                  fill="white"></path>
                                <path
                                  d="M35.3228 16V32.6773H52.0001C51.6863 28.358 49.8285 24.296 46.7663 21.2338C43.7041 18.1715 39.642 16.3137 35.3228 16Z"
                                  fill="white"></path>
                                <path
                                  d="M37.144 35.2539L47.6458 45.7556C50.1982 42.8202 51.7266 39.1342 52.0002 35.2539H37.144Z"
                                  fill="white"></path>
                              </svg>
                            </div>
                            <span className="submenu-item">ETF</span>
                            <span className="submenu-item-headline">
                              Exchange-traded fund
                            </span>
                          </a>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-12">
                          <a
                            className="dropdown-item indices"
                            href="https://twelvedata.com/indices">
                            <div className="submenu-item-image">
                              <svg
                                width="68"
                                height="68"
                                viewBox="0 0 68 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip251)">
                                  <rect
                                    width="68"
                                    height="68"
                                    rx="34"
                                    fill="white"></rect>
                                  <path
                                    d="M35.1525 9.31743C35.1525 11.1163 35.0907 11.7163 34.6924 12.1925C33.9146 13.1203 32.7732 11.6188 30.4023 11.6188C27.7781 11.6188 25.6504 13.7457 25.6504 16.3699C25.6504 18.9941 27.7772 21.1218 30.4006 21.1218C32.7732 21.1218 33.9137 19.6212 34.6916 20.5482C35.0898 21.0244 35.1517 21.6243 35.1517 23.4232V32.7398V32.7406V32.7398L43.0812 32.7406C44.2437 32.7406 44.4073 32.6288 44.5047 32.4042C44.7038 31.9433 44.2963 31.1917 44.2963 29.4597C44.2963 25.811 48.1466 22.8987 51.525 22.8987C54.9 22.8987 58.7478 25.6636 58.7478 29.4597C58.7478 31.1908 58.3393 31.9424 58.5385 32.4042C58.6359 32.6271 58.8011 32.7406 59.9637 32.7406H67.8923V0H35.1525V9.31743Z"
                                    fill="#D9DEE8"
                                    className="colored"></path>
                                  <path
                                    d="M9.42387 32.7415C11.2219 32.7415 11.8219 32.8033 12.2989 33.2016C13.2268 33.9795 11.7253 35.1208 11.7253 37.4917C11.7253 40.1159 13.8521 42.2436 16.4763 42.2436C19.1006 42.2436 21.2274 40.1168 21.2274 37.4934C21.2274 35.1208 19.7268 33.9803 20.6538 33.2024C21.1308 32.8042 21.7307 32.7423 23.5288 32.7423H32.8445H32.8462H32.8445L32.8462 24.8129C32.8462 23.6503 32.7335 23.4868 32.509 23.3893C32.048 23.1902 31.2964 23.5978 29.5645 23.5978C25.9158 23.5978 23.0043 19.7474 23.0043 16.369C23.0043 12.9941 25.7683 9.14626 29.5645 9.14626C31.2956 9.14626 32.0472 9.55468 32.509 9.35556C32.7318 9.25811 32.8454 9.09288 32.8454 7.93032V0H0.106445V32.7415H9.42387Z"
                                    fill="#D9DEE8"
                                    className="colored"></path>
                                  <path
                                    d="M32.8479 58.682C32.8479 56.8848 32.9098 56.284 33.308 55.8069C34.0859 54.88 35.2264 56.3815 37.5982 56.3815C40.2215 56.3815 42.3492 54.2546 42.3492 51.6304C42.3492 49.0061 40.2224 46.8793 37.5998 46.8793C35.2264 46.8793 34.0859 48.38 33.308 47.4521C32.9098 46.9751 32.8479 46.376 32.8479 44.5771V35.2605V35.2588V35.2605L24.9185 35.2588C23.7559 35.2588 23.5924 35.3715 23.4949 35.596C23.2958 36.0578 23.7034 36.8094 23.7034 38.5406C23.7034 42.1901 19.853 45.1007 16.4746 45.1007C13.0997 45.1007 9.25186 42.3367 9.25186 38.5406C9.25186 36.8094 9.66028 36.0578 9.46115 35.596C9.36371 35.374 9.19848 35.2605 8.03592 35.2605H0.106445V67.9994H32.8479V58.682Z"
                                    fill="#D9DEE8"
                                    className="colored"></path>
                                  <path
                                    d="M58.5765 35.2581C56.7785 35.2581 56.1785 35.1971 55.7015 34.798C54.7736 34.021 56.2751 32.8796 56.2751 30.5088C56.2751 27.8845 54.1483 25.7568 51.5241 25.7568C48.8998 25.7568 46.773 27.8837 46.773 30.5071C46.773 32.8796 48.2736 34.0202 47.3466 34.798C46.8696 35.1971 46.2697 35.2581 44.4716 35.2581H35.155H35.1533H35.155L35.1533 43.1885C35.1533 44.3502 35.266 44.5137 35.4906 44.612C35.9515 44.8103 36.7031 44.4036 38.4351 44.4036C42.0838 44.4036 44.9953 48.253 44.9953 51.6323C44.9953 55.0072 42.2312 58.8551 38.4351 58.8551C36.704 58.8551 35.9524 58.4466 35.4906 58.6458C35.2677 58.7432 35.1542 58.9084 35.1542 60.071L35.155 68.0005H67.894V35.2581H58.5765Z"
                                    fill="#D9DEE8"
                                    className="colored"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip251">
                                    <rect
                                      width="68"
                                      height="68"
                                      rx="34"
                                      fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <span className="submenu-item">Indices</span>
                            <span className="submenu-item-headline">
                              Index fund
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 col-xl-4">
                      <span className="submenu-header">
                        <a href="https://twelvedata.com/spreadsheets">
                          Spreadsheets
                        </a>
                      </span>
                      <div className="row">
                        <div className="col col-xl-12 col-md-6 col-sm-6 col-12">
                          <a
                            className="dropdown-item excel"
                            href="https://twelvedata.com/excel">
                            <div className="submenu-item-image">
                              <svg
                                width="68"
                                height="68"
                                viewBox="0 0 68 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                  width="68"
                                  height="68"
                                  rx="34"
                                  fill="#D9DEE8"
                                  className="colored"></rect>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M42.335 41.887H37.283L33.837 37.013L30.216 41.887H25.142L31.437 33.97L26.354 27.046H31.479L33.86 30.811L36.397 27.046H41.612L36.283 33.97L42.335 41.887ZM49 48.652H19V20H49V48.652ZM21.882 45.77H46.113V22.884H21.882"
                                  fill="white"></path>
                              </svg>
                            </div>
                            <span className="submenu-item">Excel</span>
                            <span className="submenu-item-headline">
                              Automatic refreshes
                            </span>
                          </a>
                        </div>
                        <div className="col col-xl-12 col-md-6 col-sm-6 col-12">
                          <a
                            className="dropdown-item google-sheets"
                            href="https://twelvedata.com/google-sheets">
                            <div className="submenu-item-image">
                              <svg
                                width="68"
                                height="68"
                                viewBox="0 0 68 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                  width="68"
                                  height="68"
                                  rx="34"
                                  fill="#0F9D58"></rect>
                                <path
                                  d="M18 20V49H50V20H18ZM32 45H22V40H32V45ZM32 37H22V32H32V37ZM32 29H22V24H32V29ZM46 45H36V40H46V45ZM46 37H36V32H46V37ZM46 29H36V24H46V29Z"
                                  fill="#F1F1F1"></path>
                              </svg>
                            </div>
                            <span className="submenu-item">Google Sheets</span>
                            <span className="submenu-item-headline">
                              Real-time data and work
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDevelopers"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Developers
              </a>
              <div
                className="dropdown-menu developers"
                aria-labelledby="navbarDevelopers">
                <div className="menu-inner soft">
                  <div className="row">
                    <div className="col">
                      <a
                        className="dropdown-item"
                        href="https://twelvedata.com/docs">
                        <div className="submenu-item-image">
                          <svg
                            width="52"
                            height="41"
                            viewBox="0 0 52 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M47.7664 35.2327V0C41.8633 0.491345 36.1202 1.5625 30.628 3.84055L28.2445 4.82303L27.3569 39.7007C33.8599 37.0174 38.577 35.982 47.7664 35.2327Z"
                              fill="#8EDE9F"
                              className="colored-light"></path>
                            <path
                              d="M46.5634 35.343V0.112305L45.2094 0.225006C39.7791 0.670648 34.4528 1.9594 29.425 4.0448L27.0415 5.02728V40.1186L28.7772 39.4024C33.9801 37.2534 39.4888 35.9237 45.1046 35.4609L46.5634 35.343Z"
                              fill="#2CC97E"
                              className="colored"></path>
                            <path
                              d="M52.3077 5.31934H49.6456V36.153C49.6474 36.6124 49.2925 36.9961 48.8311 37.034L46.5585 37.2189C45.9025 37.2727 45.2483 37.3394 44.5966 37.4189C44.3852 37.4443 44.175 37.4779 43.9649 37.5071C43.5255 37.5652 43.087 37.6241 42.6499 37.693C42.3951 37.7334 42.1421 37.7807 41.8882 37.825C41.4969 37.893 41.1048 37.9605 40.7144 38.0371C40.4479 38.09 40.1819 38.1493 39.9102 38.2066C39.5385 38.2848 39.1667 38.3649 38.7976 38.4522C38.5207 38.5176 38.2447 38.5868 37.9696 38.6565C37.6104 38.7447 37.2529 38.8398 36.8959 38.9387C36.6182 39.0144 36.3404 39.0944 36.0636 39.1753C35.7087 39.2794 35.359 39.3852 35.0085 39.4962C34.7342 39.5844 34.4595 39.6725 34.1861 39.7603C33.8352 39.8777 33.486 39.999 33.138 40.1242C32.872 40.2201 32.6055 40.3165 32.3334 40.4176C32.2117 40.4636 32.0908 40.5126 31.9695 40.5595H52.3077V5.31934Z"
                              fill="#8EDE9F"
                              className="colored-light"></path>
                            <path
                              d="M7.09936 0.225006L5.74536 0.112305V35.3456L7.32034 35.4785C12.9326 35.9444 18.4366 37.2822 23.6308 39.4429L25.2673 40.1186V5.02728L22.8864 4.04566C17.8582 1.95983 12.531 0.670648 7.09936 0.225006Z"
                              fill="#2CC97E"
                              className="colored"></path>
                            <path
                              d="M0 5.31934V40.5578H20.3525C20.2433 40.5152 20.1341 40.4696 20.0241 40.4292C19.7702 40.3333 19.5141 40.2416 19.2585 40.1492C18.898 40.0192 18.5379 39.8928 18.1748 39.7719C17.9123 39.6837 17.6488 39.5981 17.385 39.5147C17.0249 39.3972 16.6636 39.2867 16.3018 39.1835C16.0353 39.106 15.7693 39.0282 15.5032 38.9542C15.1384 38.854 14.7727 38.7589 14.4062 38.6655C14.1401 38.5976 13.8737 38.5296 13.6016 38.4664C13.2298 38.3782 12.8559 38.2973 12.4824 38.2178C12.2164 38.1605 11.9499 38.1025 11.6839 38.0496C11.2969 37.9739 10.9083 37.9059 10.5196 37.8384C10.2649 37.794 10.0101 37.7502 9.75489 37.705C9.32594 37.6375 8.89569 37.5803 8.46544 37.5226C8.24794 37.4938 8.03216 37.4594 7.81509 37.4349C7.1643 37.3566 6.51351 37.2899 5.86272 37.2348L3.47405 37.034C3.01347 36.9948 2.66035 36.6115 2.66208 36.153V5.31934H0Z"
                              fill="#8EDE9F"
                              className="colored-light"></path>
                          </svg>
                        </div>
                        <span className="submenu-item">Documentation</span>
                        <span className="submenu-item-headline">
                          Start integrating Twelve Data’s products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-md-6">
                      <span className="submenu-list-title">Resources</span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/docs#websocket">
                            WebSocket
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/docs#batch-requests">
                            Batch requests
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/docs#technical-indicators">
                            Technical indicators
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/request-builder">
                            Request builder
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-md-6">
                      <span className="submenu-list-title">Guides</span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://support.twelvedata.com/en/articles/5335783-trial">
                            Free trial
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://support.twelvedata.com/en/articles/5194454-historical-data">
                            Historical data
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://support.twelvedata.com/en/articles/5195429-pre-post-market-data">
                            Extended hours data
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://support.twelvedata.com/en/collections/2999512-faqs">
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="menu-inner medium">
                  <div className="row">
                    <div className="col col-sm-6">
                      <ul className="list-unstyled bold-items">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://support.twelvedata.com/">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M18.8796 23.3718H18.5895L15.5952 23.1598C14.617 23.0891 13.3077 23.0519 11.9129 23.0519C10.5181 23.0519 9.20879 23.0891 8.23056 23.1598L5.21401 23.3607C4.12196 23.4589 3.04552 23.0471 2.2979 22.2447C1.63322 21.5067 1.30367 20.5265 1.38661 19.5366L1.60235 16.5235C1.74741 14.0691 1.74741 11.6088 1.60235 9.15442L1.38661 6.14503C1.30292 5.14623 1.63991 4.15786 2.3165 3.41834C3.06412 2.61596 4.14056 2.20417 5.23261 2.30238L8.22684 2.53301C9.20507 2.60369 10.5143 2.64089 11.9092 2.64089C13.304 2.64089 14.6133 2.60369 15.5915 2.53301L18.6043 2.32098C19.6964 2.22277 20.7728 2.63456 21.5205 3.43694C22.1851 4.17497 22.5147 5.15516 22.4317 6.14503L22.216 9.15814C22.0709 11.6125 22.0709 14.0729 22.216 16.5272L22.4317 19.5366C22.5217 20.541 22.1859 21.5372 21.5056 22.2819C20.8215 22.9969 19.869 23.3923 18.8796 23.3718ZM11.9092 22.2968C13.3226 22.2968 14.6505 22.3377 15.6287 22.4084L18.6229 22.6204C20.1427 22.7834 21.5063 21.683 21.6692 20.1634C21.6901 19.9674 21.6901 19.7699 21.6692 19.5738L21.4721 16.5607C21.3252 14.0717 21.3252 11.5764 21.4721 9.08746L21.6878 6.09295C21.8422 4.57226 20.7349 3.21412 19.2143 3.05975C19.0239 3.0404 18.832 3.04078 18.6415 3.06124L15.6287 3.27327C14.6319 3.34395 13.3077 3.38487 11.9092 3.38487C10.5106 3.38487 9.16788 3.34395 8.18964 3.27327L5.17682 3.06124C4.315 2.97679 3.46137 3.29038 2.85955 3.91309C2.31612 4.50418 2.04609 5.29652 2.11564 6.09667L2.34625 9.12094C2.49206 11.5988 2.49206 14.0829 2.34625 16.5607L2.13052 19.5738C2.06096 20.374 2.331 21.1663 2.87443 21.7574C3.47439 22.3842 4.32802 22.7023 5.1917 22.6204L8.18964 22.4084C9.16788 22.334 10.4958 22.2968 11.9092 22.2968Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                                <path
                                  d="M11.9088 1.68066C5.74595 1.68066 0.750244 6.67685 0.750244 12.8403C0.750244 19.0038 5.74595 24 11.9088 24C18.0717 24 23.0675 19.0038 23.0675 12.8403C23.0675 6.67685 18.0717 1.68066 11.9088 1.68066ZM11.9088 18.7922C8.6219 18.7922 5.95759 16.1276 5.95759 12.8403C5.95759 9.55307 8.6219 6.88851 11.9088 6.88851C15.1958 6.88851 17.8601 9.55307 17.8601 12.8403C17.8601 16.1276 15.1958 18.7922 11.9088 18.7922Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                                <path
                                  d="M17.8602 12.8405C17.8602 13.7813 17.6355 14.7083 17.2056 15.5449L22.4985 16.3595C23.2569 14.0759 23.2569 11.6088 22.4985 9.3252L17.2056 10.1361C17.6355 10.9727 17.8598 11.8997 17.8602 12.8405Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M15.4275 23.4311L14.6129 18.1377C12.9161 19.0115 10.9016 19.0115 9.20471 18.1377L8.39014 23.4311C10.6747 24.1903 13.143 24.1903 15.4275 23.4311Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M5.95717 12.8403C5.95717 11.9379 6.16324 11.0473 6.55974 10.2364L1.21849 9.63379C0.590257 11.7266 0.590257 13.9578 1.21849 16.0506L6.55602 15.4443C6.16063 14.6333 5.95606 13.7424 5.95717 12.8403Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M8.39014 2.25009L9.20471 7.54349C10.9019 6.6708 12.9157 6.6708 14.6129 7.54349L15.4275 2.25009C13.143 1.49086 10.6747 1.49086 8.39014 2.25009Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                              </svg>
                            </div>
                            Support
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-sm-6">
                      <ul className="list-unstyled bold-items">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.statuspage.io"
                            target="_blank">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="5"
                                  fill="#2CC97E"></circle>
                              </svg>
                            </div>
                            System status
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarCompany"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Company
              </a>
              <div
                className="dropdown-menu company"
                aria-labelledby="navbarCompany">
                <div className="menu-inner soft">
                  <div className="row">
                    <div className="col col-sm-6 col-12">
                      <ul className="list-unstyled bold-items">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/about">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M5.22164 4.22164C0.926121 8.51715 0.926121 15.4828 5.22164 19.7784C9.51715 24.0739 16.4828 24.0739 20.7784 19.7784C25.0739 15.4828 25.0739 8.51715 20.7784 4.22164C16.4828 -0.0738786 9.51715 -0.0738786 5.22164 4.22164ZM13.4412 5.61478C14.3699 5.61478 15.1129 6.381 15.1129 7.30976C15.1129 8.23852 14.3467 9.00475 13.4412 9.00475C12.5124 9.00475 11.7462 8.23852 11.7462 7.28654C11.7462 6.35778 12.5124 5.61478 13.4412 5.61478ZM15.8327 16.9689C15.7863 17.1082 15.6934 17.2707 15.6005 17.3636C14.9968 17.9905 14.2538 18.362 13.3715 18.362C12.9536 18.362 12.5588 18.362 12.1409 18.2923C11.4675 18.1995 10.6084 17.3636 10.7245 16.4813C10.8174 15.8776 10.9103 15.2739 11.0032 14.6702C11.1889 13.6253 11.3747 12.5573 11.5604 11.5124C11.5604 11.4427 11.5836 11.3731 11.5836 11.3034C11.5836 10.8623 11.4443 10.6997 11.0032 10.6533C10.8174 10.6301 10.6317 10.6069 10.4459 10.5604C10.2369 10.4908 10.1208 10.305 10.1441 10.1425C10.1673 9.95673 10.2834 9.84063 10.5156 9.7942C10.6317 9.77098 10.771 9.77098 10.9103 9.77098C11.4211 9.77098 11.9319 9.77098 12.466 9.77098C13.0232 9.77098 13.5573 9.77098 14.1145 9.77098C14.5092 9.77098 14.7414 9.95673 14.7414 10.3515C14.7414 10.6765 14.695 11.0016 14.6253 11.3266C14.4164 12.534 14.1842 13.7182 13.9752 14.9256C13.9055 15.3203 13.8127 15.715 13.7662 16.1098C13.743 16.2955 13.7662 16.5045 13.8127 16.6902C13.8823 16.9456 14.0681 17.085 14.3235 17.0617C14.5325 17.0385 14.7414 16.9689 14.9504 16.876C15.1129 16.8063 15.2522 16.6902 15.4148 16.6438C15.6934 16.5509 15.9024 16.7135 15.8327 16.9689Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M3.22164 4.22164C-1.07388 8.51715 -1.07388 15.4828 3.22164 19.7784C7.51715 24.0739 14.4828 24.0739 18.7784 19.7784C23.0739 15.4828 23.0739 8.51715 18.7784 4.22164C14.4828 -0.0738786 7.51715 -0.0738786 3.22164 4.22164ZM11.4412 5.61478C12.3699 5.61478 13.1129 6.381 13.1129 7.30976C13.1129 8.23852 12.3467 9.00475 11.4412 9.00475C10.5124 9.00475 9.74617 8.23852 9.74617 7.28654C9.74617 6.35778 10.5124 5.61478 11.4412 5.61478ZM13.8327 16.9689C13.7863 17.1082 13.6934 17.2707 13.6005 17.3636C12.9968 17.9905 12.2538 18.362 11.3715 18.362C10.9536 18.362 10.5588 18.362 10.1409 18.2923C9.46755 18.1995 8.60844 17.3636 8.72454 16.4813C8.81741 15.8776 8.91029 15.2739 9.00317 14.6702C9.18892 13.6253 9.37467 12.5573 9.56042 11.5124C9.56042 11.4427 9.58364 11.3731 9.58364 11.3034C9.58364 10.8623 9.44433 10.6997 9.00317 10.6533C8.81741 10.6301 8.63166 10.6069 8.44591 10.5604C8.23694 10.4908 8.12084 10.305 8.14406 10.1425C8.16728 9.95673 8.28338 9.84063 8.51557 9.7942C8.63166 9.77098 8.77098 9.77098 8.91029 9.77098C9.42111 9.77098 9.93193 9.77098 10.466 9.77098C11.0232 9.77098 11.5573 9.77098 12.1145 9.77098C12.5092 9.77098 12.7414 9.95673 12.7414 10.3515C12.7414 10.6765 12.695 11.0016 12.6253 11.3266C12.4164 12.534 12.1842 13.7182 11.9752 14.9256C11.9055 15.3203 11.8127 15.715 11.7662 16.1098C11.743 16.2955 11.7662 16.5045 11.8127 16.6902C11.8823 16.9456 12.0681 17.085 12.3235 17.0617C12.5325 17.0385 12.7414 16.9689 12.9504 16.876C13.1129 16.8063 13.2522 16.6902 13.4148 16.6438C13.6934 16.5509 13.9024 16.7135 13.8327 16.9689Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                              </svg>
                            </div>
                            About Twelve Data
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/expertise">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M12.0839 1.45858C12.2339 0.998497 12.8848 0.998497 13.0347 1.45858L15.2938 8.38983H22.5864C23.0701 8.38983 23.272 9.00828 22.8814 9.29359L16.9718 13.6102L19.2289 20.5354C19.379 20.996 18.8518 21.3796 18.4597 21.0949L12.5593 16.8107L6.65895 21.0949C6.26688 21.3796 5.73964 20.996 5.88979 20.5354L8.14689 13.6102L2.23729 9.29359C1.84668 9.00828 2.0485 8.38983 2.53221 8.38983H9.82486L12.0839 1.45858Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M10.0839 1.45858C10.2339 0.998497 10.8848 0.998497 11.0347 1.45858L13.2938 8.38983H20.5864C21.0701 8.38983 21.272 9.00828 20.8814 9.29359L14.9718 13.6102L17.2289 20.5354C17.379 20.996 16.8518 21.3796 16.4597 21.0949L10.5593 16.8107L4.65895 21.0949C4.26688 21.3796 3.73964 20.996 3.88979 20.5354L6.14689 13.6102L0.23729 9.29359C-0.153319 9.00828 0.0484957 8.38983 0.53221 8.38983H7.82486L10.0839 1.45858Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                              </svg>
                            </div>
                            Expertise
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/careers">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M22.1667 5.58305H17.5833V4.66636C17.5833 3.65526 16.7611 2.83301 15.75 2.83301H10.25C9.2389 2.83301 8.41665 3.65522 8.41665 4.66636V5.58301H3.83335C2.82221 5.58305 2 6.40526 2 7.41636V10.1664C2 11.1775 2.82221 11.9997 3.83335 11.9997H11.1667V11.5414C11.1667 11.288 11.3717 11.083 11.625 11.083H14.375C14.6284 11.083 14.8334 11.288 14.8334 11.5414V11.9997H22.1667C23.1778 11.9997 24 11.1775 24 10.1664V7.41636C24 6.40526 23.1778 5.58305 22.1667 5.58305ZM15.75 5.58305H10.25V4.66636H15.75V5.58305Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M23.7458 12.4937C23.5896 12.4163 23.4029 12.4342 23.265 12.5389C22.9392 12.7856 22.5596 12.9158 22.1666 12.9158H14.8333V14.2908C14.8333 14.5441 14.6283 14.7491 14.375 14.7491H11.625C11.3717 14.7491 11.1667 14.5441 11.1667 14.2908V12.9158H3.83335C3.44036 12.9158 3.06081 12.7856 2.73494 12.5389C2.59662 12.4333 2.41044 12.4154 2.2542 12.4937C2.09848 12.5712 2 12.73 2 12.9042V19.3325C2 20.3436 2.82221 21.1659 3.83335 21.1659H22.1667C23.1778 21.1659 24 20.3436 24 19.3325V12.9042C24 12.73 23.9015 12.5712 23.7458 12.4937Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M20.1667 5.58305H15.5833V4.66636C15.5833 3.65526 14.7611 2.83301 13.75 2.83301H8.25C7.2389 2.83301 6.41665 3.65522 6.41665 4.66636V5.58301H1.83335C0.822207 5.58305 0 6.40526 0 7.41636V10.1664C0 11.1775 0.822207 11.9997 1.83335 11.9997H9.1667V11.5414C9.1667 11.288 9.3717 11.083 9.62504 11.083H12.375C12.6284 11.083 12.8334 11.288 12.8334 11.5414V11.9997H20.1667C21.1778 11.9997 22 11.1775 22 10.1664V7.41636C22 6.40526 21.1778 5.58305 20.1667 5.58305ZM13.75 5.58305H8.25V4.66636H13.75V5.58305Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                                <path
                                  d="M21.7458 12.4937C21.5896 12.4163 21.4029 12.4342 21.265 12.5389C20.9392 12.7856 20.5596 12.9158 20.1666 12.9158H12.8333V14.2908C12.8333 14.5441 12.6283 14.7491 12.375 14.7491H9.625C9.37166 14.7491 9.16665 14.5441 9.16665 14.2908V12.9158H1.83335C1.44036 12.9158 1.06081 12.7856 0.734937 12.5389C0.596621 12.4333 0.410437 12.4154 0.254203 12.4937C0.0984844 12.5712 0 12.73 0 12.9042V19.3325C0 20.3436 0.822207 21.1659 1.83335 21.1659H20.1667C21.1778 21.1659 22 20.3436 22 19.3325V12.9042C22 12.73 21.9015 12.5712 21.7458 12.4937Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                              </svg>
                            </div>
                            Careers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-sm-6 col-12">
                      <ul className="list-unstyled bold-items">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/customers">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.8419 10.1756C8.06054 11.5968 9.15874 13.4056 10.9626 14.0417C11.703 14.3001 12.513 14.3051 13.2534 14.0367C15.0274 13.3957 16.1604 11.5919 16.384 10.1756C16.6225 10.1558 16.9356 9.82283 17.2735 8.62525C17.7356 6.99038 17.2436 6.74689 16.8262 6.78664C16.9057 6.56302 16.9654 6.33444 17.0051 6.1158C17.7108 1.87706 15.6237 1.73295 15.6237 1.73295C15.6237 1.73295 15.2758 1.06708 14.3665 0.565186C13.7553 0.202433 12.9055 -0.0758426 11.7875 0.0185724C11.4247 0.03348 11.0818 0.108018 10.7588 0.212372C10.3464 0.35151 9.96872 0.555247 9.62585 0.793769C9.20843 1.05714 8.8109 1.38511 8.46305 1.7578C7.91147 2.32429 7.41952 3.05476 7.20584 3.96413C7.02695 4.64491 7.0667 5.35551 7.21578 6.12076C7.25553 6.34438 7.31516 6.56799 7.39467 6.79161C6.97726 6.75185 6.4853 6.99535 6.94744 8.63022C7.29032 9.82283 7.60338 10.1558 7.8419 10.1756Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M20.3093 15.7364C17.7701 15.0904 14.8306 13.3202 14.8306 13.3202L14.2306 15.3602L13.7947 19.6919L13.7897 19.677L13.5264 20.492L12.6766 18.0819C14.7637 15.1699 12.2542 15.1997 12.1151 15.2047C11.976 15.1997 9.46651 15.1699 11.5536 18.0819L10.7038 20.492L10.4405 19.677L10.4355 19.6919L10.1324 18.7329L8.23123 13.2002C8.23123 13.2002 7.03063 14.0402 4.27063 15.6002C2.37736 16.0822 1.93318 18.4049 2.00772 19.4832C2.00772 19.4832 2.11704 20.9491 2.22636 21.5951C2.22636 21.5951 5.92346 23.9952 12.1151 24.0002C18.3067 24.0002 22.0038 21.5951 22.0038 21.5951C22.1132 20.9491 22.2225 19.4832 22.2225 19.4832C22.292 18.4049 22.2026 16.2184 20.3093 15.7364Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M5.85142 10.1756C6.07007 11.5968 7.16826 13.4056 8.97208 14.0417C9.7125 14.3001 10.5225 14.3051 11.2629 14.0367C13.0369 13.3957 14.1699 11.5919 14.3935 10.1756C14.632 10.1558 14.9451 9.82283 15.283 8.62525C15.7451 6.99038 15.2532 6.74689 14.8358 6.78664C14.9153 6.56302 14.9749 6.33444 15.0146 6.1158C15.7203 1.87706 13.6332 1.73295 13.6332 1.73295C13.6332 1.73295 13.2854 1.06708 12.376 0.565186C11.7648 0.202433 10.915 -0.0758426 9.79697 0.0185724C9.43422 0.03348 9.09135 0.108018 8.76835 0.212372C8.3559 0.35151 7.97824 0.555247 7.63537 0.793769C7.21795 1.05714 6.82042 1.38511 6.47257 1.7578C5.92099 2.32429 5.42904 3.05476 5.21536 3.96413C5.03647 4.64491 5.07622 5.35551 5.2253 6.12076C5.26505 6.34438 5.32468 6.56799 5.40419 6.79161C4.98678 6.75185 4.49483 6.99535 4.95696 8.63022C5.29984 9.82283 5.6129 10.1558 5.85142 10.1756Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                                <path
                                  d="M18.3188 15.7367C15.7795 15.0907 13.7173 13.6396 13.7173 13.6396L12.1073 18.7331L11.8042 19.6921L11.7992 19.6772L11.5358 20.4922L10.6861 18.0821C12.7732 15.1702 10.2637 15.2 10.1246 15.2049C9.98543 15.2 7.47597 15.1702 9.56304 18.0821L8.71331 20.4922L8.44994 19.6772L8.44497 19.6921L8.14185 18.7331L6.52686 13.6396C6.52686 13.6396 4.46463 15.0907 1.92537 15.7367C0.0320954 16.2187 -0.0573504 18.4051 0.0171878 19.4834C0.0171878 19.4834 0.126511 20.9494 0.235833 21.5954C0.235833 21.5954 3.93293 23.9955 10.1246 24.0005C16.3162 24.0005 20.0133 21.5954 20.0133 21.5954C20.1226 20.9494 20.2319 19.4834 20.2319 19.4834C20.3015 18.4051 20.2121 16.2187 18.3188 15.7367Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                              </svg>
                            </div>
                            Customers
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/education">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0.918457 6.7516L2.19737 7.50383C2.50735 7.2409 2.88757 7.0741 3.29101 7.02377L12.3305 5.9133C12.5612 5.88495 12.7711 6.04887 12.7995 6.27955C12.8278 6.51044 12.6639 6.72037 12.433 6.74872L3.39371 7.8594C3.25773 7.87707 3.12544 7.91692 3.0024 7.97752L12.378 13.5034L23.8377 6.7516L12.378 0L0.918457 6.7516Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                                <path
                                  d="M12.1648 14.3542L3.9646 9.52344V13.9031C3.9646 15.0612 4.96579 16.1871 6.71142 16.9919C8.50058 17.7592 10.4317 18.1402 12.3784 18.11C14.3249 18.1404 16.256 17.7594 18.0452 16.9919C19.791 16.1871 20.7922 15.0612 20.7922 13.9031V9.52344L12.5923 14.3542C12.4604 14.4318 12.2967 14.4318 12.1648 14.3542Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                                <path
                                  d="M2.70261 23.1589L1.86123 18.5312L0.178467 24.0002L2.70261 23.1589Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M3.12319 17.2685C3.12237 16.7353 2.78508 16.2606 2.28181 16.0839V9.11149C2.28304 8.93442 2.32166 8.75961 2.3954 8.59857C2.5166 8.32721 2.72962 8.10742 2.99707 7.97759L2.19512 7.50391C1.97718 7.68878 1.79888 7.91618 1.67152 8.17192C1.52177 8.46258 1.44269 8.78447 1.44043 9.11149V16.0839C0.836916 16.299 0.49079 16.9325 0.636019 17.5565C0.781453 18.1806 1.37182 18.5961 2.0082 18.5224C2.64457 18.4489 3.12442 17.9092 3.12319 17.2685Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                              </svg>
                            </div>
                            Education
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/brand-assets">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="9"
                                  fill="#2CC97E"
                                  className="colored"></circle>
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="11.3077"
                                  fill="#8EDE9F"
                                  stroke-width="1.38462"
                                  className="colored-light"></circle>
                                <path
                                  d="M8.99943 7.32272V16.692H6.83112V9.06272H4.95728V7.32272H8.99943Z"
                                  fill="white"></path>
                                <path
                                  d="M17.6272 14.9252V16.692H10.5467V15.2866L14.1606 11.8735C14.5443 11.5076 14.803 11.1953 14.9369 10.9366C15.0707 10.6689 15.1376 10.4056 15.1376 10.1469C15.1376 9.77211 15.0083 9.48657 14.7495 9.29026C14.4996 9.08503 14.1293 8.98242 13.6386 8.98242C13.2281 8.98242 12.8578 9.06272 12.5276 9.22334C12.1975 9.37503 11.9209 9.60703 11.6978 9.91934L10.1184 8.90211C10.4843 8.3578 10.9884 7.93396 11.6309 7.63057C12.2733 7.31826 13.0095 7.16211 13.8393 7.16211C14.5353 7.16211 15.1421 7.27811 15.6596 7.51011C16.1861 7.73319 16.5921 8.05442 16.8776 8.4738C17.1721 8.88426 17.3193 9.37057 17.3193 9.93272C17.3193 10.4413 17.2123 10.9187 16.9981 11.3649C16.7839 11.811 16.369 12.3196 15.7533 12.8907L13.5984 14.9252H17.6272Z"
                                  fill="white"></path>
                              </svg>
                            </div>
                            Brand assets
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="menu-inner medium">
                  <div className="row">
                    <div className="col col-12">
                      <ul className="list-unstyled bold-items">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://twelvedata.com/blog">
                            <div className="item-image">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M23.7445 16.1032C23.7377 14.5416 23.7329 13.4132 22.9648 12.4205C22.0947 11.2967 20.7527 11.1063 19.6648 11.0739C19.848 10.2887 19.901 9.41818 19.8162 8.47716C19.793 5.34326 17.4612 3.09062 14.2248 3.00131L14.1782 3L9.22814 3.00394L9.17495 3.00372C7.24978 3.00372 5.72803 3.57854 4.65173 4.71197C3.98563 5.41308 3.10087 6.63779 3.00718 8.61812L3.00324 16.6034C2.99361 16.7542 3.00871 16.9065 3.00674 17.063C3.00674 19.3349 3.37032 20.9703 4.50573 22.1788C5.64025 23.3873 7.31785 24 9.49125 24C9.53831 24 9.58581 23.9998 9.63331 23.9991H17.1954H17.2134C19.1523 23.9829 20.7908 23.3429 21.9515 22.1484C23.1102 20.9561 23.734 19.2572 23.7552 17.2362C23.755 17.2362 23.7458 16.4226 23.7445 16.1032ZM9.62959 7.25901L13.8591 7.25398C14.8559 7.26974 15.6514 8.16261 15.6352 9.15945C15.6194 10.1464 14.8145 10.8666 13.831 10.8666C13.8214 10.8666 9.57246 10.8684 9.57246 10.8684C8.57561 10.8524 7.78059 10.0315 7.79657 9.03512C7.81233 8.03828 8.63143 7.24938 9.62959 7.25901ZM17.5794 19.1395H9.12066C8.12404 19.1395 7.31566 18.3315 7.31566 17.3345C7.31566 16.3376 8.12404 15.5295 9.12066 15.5295H17.5796C18.5766 15.5295 19.3846 16.3376 19.3846 17.3345C19.3846 18.3315 18.5764 19.1395 17.5794 19.1395Z"
                                  fill="#8EDE9F"
                                  className="colored-light"></path>
                                <path
                                  d="M20.7445 16.1032C20.7377 14.5416 20.7329 13.4132 19.9648 12.4205C19.0947 11.2967 17.7527 11.1063 16.6648 11.0739C16.848 10.2887 16.901 9.41818 16.8162 8.47716C16.793 5.34326 14.4612 3.09062 11.2248 3.00131L11.1782 3L6.22814 3.00394L6.17495 3.00372C4.24978 3.00372 2.72803 3.57854 1.65173 4.71197C0.985634 5.41308 0.100866 6.63779 0.00717982 8.61812L0.00323974 16.6034C-0.00639158 16.7542 0.00871207 16.9065 0.00674203 17.063C0.00674203 19.3349 0.370324 20.9703 1.50573 22.1788C2.64025 23.3873 4.31785 24 6.49125 24C6.53831 24 6.58581 23.9998 6.63331 23.9991H14.1954H14.2134C16.1523 23.9829 17.7908 23.3429 18.9515 22.1484C20.1102 20.9561 20.734 19.2572 20.7552 17.2362C20.755 17.2362 20.7458 16.4226 20.7445 16.1032ZM6.62959 7.25901L10.8591 7.25398C11.8559 7.26974 12.6514 8.16261 12.6352 9.15945C12.6194 10.1464 11.8145 10.8666 10.831 10.8666C10.8214 10.8666 6.57246 10.8684 6.57246 10.8684C5.57561 10.8524 4.78059 10.0315 4.79657 9.03512C4.81233 8.03828 5.63143 7.24938 6.62959 7.25901ZM14.5794 19.1395H6.12066C5.12404 19.1395 4.31566 18.3315 4.31566 17.3345C4.31566 16.3376 5.12404 15.5295 6.12066 15.5295H14.5796C15.5766 15.5295 16.3846 16.3376 16.3846 17.3345C16.3846 18.3315 15.5764 19.1395 14.5794 19.1395Z"
                                  fill="#2CC97E"
                                  className="colored"></path>
                              </svg>
                            </div>
                            From the blog
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item article-link"
                            href="https://twelvedata.com/blog/war-in-ukraine-standing-in-solidarity">
                            War in Ukraine: Standing in Solidarity{" "}
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
                            </svg>{" "}
                          </a>
                          <a
                            className="dropdown-item article-link"
                            href="https://twelvedata.com/blog/niuton-success-story-in-algorithmic-trading">
                            Niuton: Success Story in Algorithmic Trading{" "}
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
                            </svg>{" "}
                          </a>
                          <a
                            className="dropdown-item article-link"
                            href="https://twelvedata.com/blog/api3-alliance-officially-announced-with-twelve-data-as-a-founding-member">
                            API3 Alliance Officially Announced with Twelve Data
                            as a Founding Member{" "}
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
                            </svg>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item" role="presentation" itemprop="name">
              <a
                itemprop="url"
                className="nav-link"
                href="https://twelvedata.com/pricing">
                Pricing
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto buttons">
            <li className="nav-item">
              <a
                className="nav-link action"
                href="https://twelvedata.com/login">
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
export default Navbar;

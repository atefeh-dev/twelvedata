/** @format */
import React from "react";
const ProductDropDown = () => {
  return (
    <div className="dropdown-menu products" aria-labelledby="navbarProducts">
      <div className="menu-inner soft">
        <div className="row">
          <div className="col col-12 col-xl-8">
            <span className="submenu-header">
              <a href="https://twelvedata.com/market-data">Market Data</a>
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
                          strokeWidth="2"
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
                          strokeWidth="2"></circle>
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
                  <span class="submenu-item">Crypto</span>
                  <span class="submenu-item-headline">Digital currency</span>
                </a>
              </div>
              <div class="col col-md-6 col-sm-6 col-12">
                <a class="dropdown-item etf" href="https://twelvedata.com/etf">
                  <div class="submenu-item-image">
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
                        class="colored"></rect>
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
                  <span class="submenu-item">ETF</span>
                  <span class="submenu-item-headline">
                    Exchange-traded fund
                  </span>
                </a>
              </div>
              <div class="col col-md-6 col-sm-6 col-12">
                <a
                  class="dropdown-item indices"
                  href="https://twelvedata.com/indices">
                  <div class="submenu-item-image">
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
                          class="colored"></path>
                        <path
                          d="M9.42387 32.7415C11.2219 32.7415 11.8219 32.8033 12.2989 33.2016C13.2268 33.9795 11.7253 35.1208 11.7253 37.4917C11.7253 40.1159 13.8521 42.2436 16.4763 42.2436C19.1006 42.2436 21.2274 40.1168 21.2274 37.4934C21.2274 35.1208 19.7268 33.9803 20.6538 33.2024C21.1308 32.8042 21.7307 32.7423 23.5288 32.7423H32.8445H32.8462H32.8445L32.8462 24.8129C32.8462 23.6503 32.7335 23.4868 32.509 23.3893C32.048 23.1902 31.2964 23.5978 29.5645 23.5978C25.9158 23.5978 23.0043 19.7474 23.0043 16.369C23.0043 12.9941 25.7683 9.14626 29.5645 9.14626C31.2956 9.14626 32.0472 9.55468 32.509 9.35556C32.7318 9.25811 32.8454 9.09288 32.8454 7.93032V0H0.106445V32.7415H9.42387Z"
                          fill="#D9DEE8"
                          class="colored"></path>
                        <path
                          d="M32.8479 58.682C32.8479 56.8848 32.9098 56.284 33.308 55.8069C34.0859 54.88 35.2264 56.3815 37.5982 56.3815C40.2215 56.3815 42.3492 54.2546 42.3492 51.6304C42.3492 49.0061 40.2224 46.8793 37.5998 46.8793C35.2264 46.8793 34.0859 48.38 33.308 47.4521C32.9098 46.9751 32.8479 46.376 32.8479 44.5771V35.2605V35.2588V35.2605L24.9185 35.2588C23.7559 35.2588 23.5924 35.3715 23.4949 35.596C23.2958 36.0578 23.7034 36.8094 23.7034 38.5406C23.7034 42.1901 19.853 45.1007 16.4746 45.1007C13.0997 45.1007 9.25186 42.3367 9.25186 38.5406C9.25186 36.8094 9.66028 36.0578 9.46115 35.596C9.36371 35.374 9.19848 35.2605 8.03592 35.2605H0.106445V67.9994H32.8479V58.682Z"
                          fill="#D9DEE8"
                          class="colored"></path>
                        <path
                          d="M58.5765 35.2581C56.7785 35.2581 56.1785 35.1971 55.7015 34.798C54.7736 34.021 56.2751 32.8796 56.2751 30.5088C56.2751 27.8845 54.1483 25.7568 51.5241 25.7568C48.8998 25.7568 46.773 27.8837 46.773 30.5071C46.773 32.8796 48.2736 34.0202 47.3466 34.798C46.8696 35.1971 46.2697 35.2581 44.4716 35.2581H35.155H35.1533H35.155L35.1533 43.1885C35.1533 44.3502 35.266 44.5137 35.4906 44.612C35.9515 44.8103 36.7031 44.4036 38.4351 44.4036C42.0838 44.4036 44.9953 48.253 44.9953 51.6323C44.9953 55.0072 42.2312 58.8551 38.4351 58.8551C36.704 58.8551 35.9524 58.4466 35.4906 58.6458C35.2677 58.7432 35.1542 58.9084 35.1542 60.071L35.155 68.0005H67.894V35.2581H58.5765Z"
                          fill="#D9DEE8"
                          class="colored"></path>
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
                  <span class="submenu-item">Indices</span>
                  <span class="submenu-item-headline">Index fund</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col col-12 col-xl-4">
            <span class="submenu-header">
              <a href="https://twelvedata.com/spreadsheets">Spreadsheets</a>
            </span>
            <div class="row">
              <div class="col col-xl-12 col-md-6 col-sm-6 col-12">
                <a
                  class="dropdown-item excel"
                  href="https://twelvedata.com/excel">
                  <div class="submenu-item-image">
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
                        class="colored"></rect>
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M42.335 41.887H37.283L33.837 37.013L30.216 41.887H25.142L31.437 33.97L26.354 27.046H31.479L33.86 30.811L36.397 27.046H41.612L36.283 33.97L42.335 41.887ZM49 48.652H19V20H49V48.652ZM21.882 45.77H46.113V22.884H21.882"
                        fill="white"></path>
                    </svg>
                  </div>
                  <span class="submenu-item">Excel</span>
                  <span class="submenu-item-headline">Automatic refreshes</span>
                </a>
              </div>
              <div class="col col-xl-12 col-md-6 col-sm-6 col-12">
                <a
                  class="dropdown-item google-sheets"
                  href="https://twelvedata.com/google-sheets">
                  <div class="submenu-item-image">
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
                  <span class="submenu-item">Google Sheets</span>
                  <span class="submenu-item-headline">
                    Real-time data and work
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDropDown;

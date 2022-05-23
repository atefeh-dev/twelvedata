/** @format */

import RateLine from "./RateLine";
import "../styles/App.css";
import Navbar from "./NavBar";
import PricingIntro from "./PricingIntro";

const App = () => {
  return (
    <div>
      <RateLine />
      <Navbar />
      <PricingIntro />
    </div>
  );
};
export default App;

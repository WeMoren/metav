import React from "react";
import Mbtoken from "../assets/images/mbtoken.png";
import Metamask from "../assets/images/metamask.png";
import Opensea from "../assets/images/opensea.png";
import Yatch from "../assets/images/yatch.png";
import Dogface from "../assets/images/dogface-white.png";
import Coin from "../assets/images/coin.png";

const Places = () => {
  return (
    <div className="places">
      <div className="bridge-images-lg">
        <img className="bridge-img" src={Mbtoken} alt="Mbtoken" />
        <img className="bridge-img" src={Metamask} alt="Metamask" />
        <img className="bridge-img" src={Opensea} alt="Opensea" />
      </div>

      <div className="bridge-images-sm">
        <img src={Yatch} alt="yatch" className="bridge-img" />
        <img src={Dogface} alt="Dogface" className="bridge-img" />
        <img src={Coin} alt="Coin" className="bridge-img" />
      </div>
    </div>
  );
};

export default Places;

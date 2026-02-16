import React from "react";
import Metamask from "../assets/images/dogface.png";
import WalletConnect from "../assets/images/bluetooth.png";
import { X } from "lucide-react";
const Modal = ({ open, setOpenModal }) => {
  if (!open) return null;
  return (
    <div className="modal-wrapper" onClick={() => setOpenModal(false)}>
      <div className="madal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Connect Wallet</h3>
        <X onClick={() => setOpenModal(false)} className="close" />

        <hr />

        <div className="wallets">
          <p>Choose your prefered wallet</p>
          <div className="metamask-cont">
            <img src={Metamask} alt="metamask" className="metamask" />
            <h6>Metamask</h6>
            <span className="forward">{">"}</span>
          </div>

          <div className="walletconnect-cont">
            <img
              src={WalletConnect}
              alt="walletconnect"
              className="walletconnect"
            />
            <h6>WalletConnect</h6>
            <span className="forward">{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

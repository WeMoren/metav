import React from "react";
import { X } from "lucide-react";
const Modal = ({ open, setOpenModal }) => {
  if (!open) return null;
  return (
    <div className="modal-wrapper" onClick={() => setOpenModal(false)}>
      <div className="madal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-heading">
          <h3>Connect Wallet</h3>
          <X onClick={() => setOpenModal(false)} className="close" />
          <hr />

          <div className="wallets">
            <p>Choose your prefered wa</p>
            <div className="metamask">
              <img src="../assets/images/metamask.png" alt="" />
              <h6>Metamask</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

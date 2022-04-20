import React from "react";
import "./modal.css";
import buyWhite from "../../assets/icons/buy-white.svg";

export default function Modal({ title, content, close }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-close" onClick={() => close(false)}>
          &times;
        </div>
        <div className="modal-title">{title}</div>
        <div className="modal-content">
          {content}
          <img src={buyWhite} alt="imagen de bolsa de compra" />
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  );
}
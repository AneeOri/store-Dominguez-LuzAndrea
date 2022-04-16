import React from "react";
import "./modal.css";

export default function Modal({ title, content, close }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-close" onClick={() => close(false)}>
          &times;
        </div>
        <div className="modal-title">{title}</div>
        <div className="modal-content">{content}</div>
        <div className="modal-footer">
          <button className="btn" onClick={() => close(false)}>
           close
          </button>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import "./ExitButton.css";

export default function ExitButton({ onClose }) {
  return (
    <div className="exit-button" onClick={onClose}>
      X
    </div>
  );
}

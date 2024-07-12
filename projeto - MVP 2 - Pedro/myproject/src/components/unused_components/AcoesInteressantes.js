import React, { Children } from "react";
import "./Home.css";
import "./AcoesInteressantes.css";

export default function AcoesInteressantes({ children, onSelect, isSelected }) {
  return (
    <li className="acao-item">
      <button
        className={`acao-button ${isSelected ? "active" : ""}`}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}

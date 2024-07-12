import React, { useState, useEffect } from "react";
import "./Carteira.css";

export default function Carteira({ usuario }) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("/DadosCarteira.json")
      .then((response) => response.json())
      .then((dadosJson) => setDados(dadosJson))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  return (
    <div className="comparar-container">
      <div className="titulo-carteira">Carteira do {usuario}</div>
      <table id="myTable">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

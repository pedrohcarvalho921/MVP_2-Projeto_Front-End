import React, { useState, useEffect } from "react";
import "./Carteira.css";

export default function Transacoes({ usuario }) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("/DadosTransacoes.json")
      .then((response) => response.json())
      .then((dadosJson) => setDados(dadosJson))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  return (
    <div className="comparar-container">
      <div className="titulo-carteira">Transações passadas do {usuario}</div>
      <table id="myTable">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.valor}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

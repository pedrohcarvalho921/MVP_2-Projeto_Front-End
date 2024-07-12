import React from "react";
import "./Common.css";
import dadosAltasBaixas from "../../data/dadosAltasBaixas.json";

export default function Baixas() {
  return (
    <section className="container-acoes">
      <h4 className="container-titulo">Maiores Baixas:</h4>
      <div className="card-container">
        {dadosAltasBaixas.MaioresBaixas.map((acao, index) => (
          <div className="card" key={`baixa-${index}`}>
            <h3>{acao.Ticker}</h3>
            <p>Variação: {acao.Variacao}</p>
            <p>Preço: {acao.Preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import "./Common.css";
import dadosAltasBaixas from "../../data/dadosAltasBaixas.json";
import "./Altas.css";

export default function Altas() {
  return (
    <section className="container-acoes">
      <h4 className="container-titulo">Maiores Altas:</h4>
      <div className="card-container">
        {dadosAltasBaixas.MaioresAltas.map((acao, index) => (
          <div className="card" key={`alta-${index}`}>
            <h3>{acao.Ticker}</h3>
            <p>Variação: {acao.Variacao}</p>
            <p>Preço: {acao.Preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

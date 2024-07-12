import React from "react";
import "./Common.css";
import dadosMoedas from "../../data/Dadosmoedas.json";

export default function Moedas() {
  return (
    <section className="container-acoes">
      <h4 className="container-titulo">Moedas:</h4>
      <div className="card-container">
        {/* Mapeando os dados das moedas */}
        {Object.entries(dadosMoedas.Moedas).map(
          ([nomeMoeda, infoMoeda], index) => (
            <div className="card" key={`moeda-${index}`}>
              <h3>{nomeMoeda}</h3>
              <p>Variação: {infoMoeda.Variacao}</p>
              <p>Compra: {infoMoeda.Compra}</p>
              <p>Venda: {infoMoeda.Venda}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

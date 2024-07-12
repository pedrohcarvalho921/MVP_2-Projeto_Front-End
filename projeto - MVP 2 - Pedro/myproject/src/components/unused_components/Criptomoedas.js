import React from "react";
import "./Common.css";
import dadosMoedas from "../../data/Dadosmoedas.json";

export default function Criptomoedas() {
  return (
    <section className="container-acoes">
      <h4 className="container-titulo">Criptomoedas:</h4>
      <div className="card-container">
        {Object.entries(dadosMoedas.Criptoativos).map(
          ([CriptoativosMoeda, infoCriptoativos], index) => (
            <div className="card" key={`moeda-${index}`}>
              <h3>{CriptoativosMoeda}</h3>
              <p>Variação: {infoCriptoativos.Variacao}</p>
              <p>Compra: {infoCriptoativos.Compra}</p>
              <p>Venda: {infoCriptoativos.Venda}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

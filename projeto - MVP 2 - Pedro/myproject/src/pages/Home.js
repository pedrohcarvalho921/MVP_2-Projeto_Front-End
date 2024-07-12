import React from "react";
import "./Home.css";
import { useState } from "react";
import dadosSetores from "../data/dadosAcoesInteressantes.json";
import GraficoHome from "./GraficoHome";

export default function Home({ usuario }) {
  const [selectedStock, setSelectedStock] = useState("bancos");
  const [acoes, setAcoes] = useState(dadosSetores["bancos"]);

  function handleSelect(setor) {
    setSelectedStock(setor);
    setAcoes(dadosSetores[setor]);
  }

  return (
    <div className="Home">
      <div className="welcome-card">
        <h1>Bem-vindo, {usuario}!</h1>
      </div>
      <div className="Home2">
        <GraficoHome />
        <section className="container-acoes">
          <h4 className="container-titulo">
            Ações mais interessantes para estudar:
          </h4>
          <div className="buttons-container">
            <button onClick={() => handleSelect("bancos")}>Bancos</button>
            <button onClick={() => handleSelect("energia")}>Energia</button>
            <button onClick={() => handleSelect("commodities")}>
              Commodities
            </button>
          </div>
          <div className="card-container">
            {acoes.map((acao, index) => (
              <div className="card" key={index}>
                <h3>{acao.nome}</h3>
                <p>Ticker: {acao.ticker}</p>
                <p>Valor Atual: R$ {acao.valorAtual}</p>
                <img>{acao.imagem}</img>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

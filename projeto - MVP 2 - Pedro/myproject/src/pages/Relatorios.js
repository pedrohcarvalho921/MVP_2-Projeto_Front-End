import "./Relatorios.css";

import React, { useState } from "react";

export default function Relatorios() {
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const anos = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  const [mesSelecionado, setMesSelecionado] = useState(meses[0]);
  const [anoSelecionado, setAnoSelecionado] = useState(anos[0]);
  const [formatoRelatorio, setFormatoRelatorio] = useState("");
  const [tipoRelatorio, setTipoRelatorio] = useState("Mensal");
  const [relatorioGerado, setRelatorioGerado] = useState(false);

  const handleMesChange = (event) => {
    setMesSelecionado(event.target.value);
  };

  const handleAnoChange = (event) => {
    setAnoSelecionado(event.target.value);
  };

  const handleFormatoChange = (event) => {
    setFormatoRelatorio(event.target.value);
  };

  const handleTipoRelatorioChange = (event) => {
    setTipoRelatorio(event.target.value);
    if (event.target.value === "Anual") {
      setMesSelecionado("");
    }
  };

  const gerarRelatorio = () => {
    if (
      !anoSelecionado ||
      (tipoRelatorio === "Mensal" && !mesSelecionado) ||
      !formatoRelatorio
    ) {
      alert(
        "Por favor, selecione um tipo de arquivo antes de gerar o relatório."
      );
      return;
    }
    alert("Relatório gerado! Podemos enviar por e-mail?");
    setRelatorioGerado(true);
  };

  return (
    <div className="App2">
      <div className="card-relatorio">
        <div className="titulo-relatorios">Relatório Consolidado</div>
        <menu>
          <li style={{ listStyleType: "none" }} className="cARED">
            <div>Selecione o período que deseja visualizar:</div>
            <label>
              <input
                type="radio"
                name="tipoRelatorio"
                value="Mensal"
                checked={tipoRelatorio === "Mensal"}
                onChange={handleTipoRelatorioChange}
              />
              Mensal
            </label>
            <label>
              <input
                type="radio"
                name="tipoRelatorio"
                value="Anual"
                checked={tipoRelatorio === "Anual"}
                onChange={handleTipoRelatorioChange}
              />
              Anual
            </label>
            {tipoRelatorio === "Mensal" && (
              <select onChange={handleMesChange} value={mesSelecionado}>
                {meses.map((mes, index) => (
                  <option key={index} value={mes}>
                    {mes}
                  </option>
                ))}
              </select>
            )}
            <select onChange={handleAnoChange} value={anoSelecionado}>
              {anos.map((ano, index) => (
                <option key={index} value={ano}>
                  {ano}
                </option>
              ))}
            </select>
            <div>Selecione o formato do relatório:</div>
            <label>
              <input
                type="radio"
                name="formatoRelatorio"
                value="PDF"
                checked={formatoRelatorio === "PDF"}
                onChange={handleFormatoChange}
              />
              Arquivo em PDF
            </label>
            <label>
              <input
                type="radio"
                name="formatoRelatorio"
                value="Excel"
                checked={formatoRelatorio === "Excel"}
                onChange={handleFormatoChange}
              />
              Arquivo em Excel
            </label>
            <button onClick={gerarRelatorio} disabled={relatorioGerado}>
              {relatorioGerado
                ? "Relatório gerado e enviado"
                : "Gerar Relatório"}
            </button>
          </li>
        </menu>
      </div>
    </div>
  );
}

import React from "react";
import "./Dashboard.css";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import revenueData from "../data/revenueData.json";
import PercentSetoresData from "../data/PercentuaisSetores.json";
import PatrimonioData from "../data/patrimonioData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.display = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function Dashboard() {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Ibovespa",
                data: revenueData.map((data) =>
                  Number(data.revenue.toFixed(2))
                ),
              },
              {
                label: "Carteira",
                data: revenueData.map((data) => data.cost),
              },
              {
                label: "CDI",
                data: revenueData.map((data) => Number(data.cdi.toFixed(2))),
              },
            ],
          }}
          options={{
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return value + "%";
                  },
                },
              },
            },
            plugins: {
              title: {
                text: "Rentabilidade da Carteira",
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || "";
                    if (label) {
                      label += ": ";
                    }
                    if (context.parsed.y !== null) {
                      label += context.parsed.y + "%";
                    }
                    return label;
                  },
                },
              },
            },
          }}
        />
      </div>
      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: PatrimonioData.map((data) => data.mes),
            datasets: [
              {
                label: "Valor Investido",
                data: PatrimonioData.map((data) => data.valorinvestido),
                borderRadius: 4,
              },
            ],
          }}
          options={{
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return "R$ " + value;
                  },
                },
              },
            },
            plugins: {
              title: {
                text: "Patrimônio Acumulado",
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || "";
                    if (label) {
                      label += ": ";
                    }
                    if (context.parsed.y !== null) {
                      label += "R$ " + context.parsed.y;
                    }
                    return label;
                  },
                },
              },
            },
          }}
        />
      </div>
      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: PercentSetoresData.map((data) => data.setor),
            datasets: [
              {
                label: "Ibovespa",
                data: PercentSetoresData.map((data) => Number(data.percentual)),
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Composição da Carteira",
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || "";
                    if (label) {
                      label += ": ";
                    }
                    if (context.parsed !== null) {
                      label += context.parsed + "%";
                    }
                    return label;
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

function RentabilidadeDashboard() {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Ibovespa",
                data: revenueData.map((data) =>
                  Number(data.revenue.toFixed(2))
                ),
              },
              {
                label: "Carteira",
                data: revenueData.map((data) => data.cost),
              },
              {
                label: "CDI",
                data: revenueData.map((data) => Number(data.cdi.toFixed(2))),
              },
            ],
          }}
          options={{
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return value + "%";
                  },
                },
              },
            },
            plugins: {
              title: {
                text: "Rentabilidade da Carteira",
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || "";
                    if (label) {
                      label += ": ";
                    }
                    if (context.parsed.y !== null) {
                      label += context.parsed.y + "%";
                    }
                    return label;
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

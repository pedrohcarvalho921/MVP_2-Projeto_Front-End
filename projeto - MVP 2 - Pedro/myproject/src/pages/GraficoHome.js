import React from "react";
import "./Dashboard.css";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./GraficoHome.css";

import PatrimonioData from "../data/patrimonioData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.display = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function GraficoHome() {
  return (
    <div className="dataCard2 revenueCard2">
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
  );
}

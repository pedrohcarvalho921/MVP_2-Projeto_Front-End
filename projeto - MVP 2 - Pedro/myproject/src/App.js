import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

// Componentes reutilizáveis
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

// Rotas da aplicação (dentro do componente Sidebar) - Olhar em cada um dos arquivos de pages para visualizar o conteúdo.
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Carteira from "./pages/Carteira";
import Comparar from "./pages/Comparar";
import Configuracoes from "./pages/Configuracoes";
import Relatorios from "./pages/Relatorios";
import Rentabilidade from "./pages/Rentabilidade";
import Transacoes from "./pages/Transacoes";

function App() {
  const nomeUsuarioAplicacao = "Pedro";

  return (
    <Router>
      <Header usuario={nomeUsuarioAplicacao} />
      <Sidebar />
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home usuario={nomeUsuarioAplicacao} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/carteira"
            element={<Carteira usuario={nomeUsuarioAplicacao} />}
          />
          <Route path="/comparar" element={<Comparar />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/rentabilidade" element={<Rentabilidade />} />
          <Route
            path="/transacoes"
            element={<Transacoes usuario={nomeUsuarioAplicacao} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import menu from "./assets/menu.png";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <br />
      <img
        src={menu}
        alt="Menu"
        style={{
          width: "52px",
          height: "auto",
          margin: "auto",
          display: "block",
        }}
      />
      <hr />
      <nav>
        <NavLink
          to="/"
          exact
          className="sidebar_routes"
          activeClassName="active"
        >
          Tela Inicial
        </NavLink>
        <NavLink
          to="/dashboard"
          className="sidebar_routes"
          activeClassName="active"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/carteira"
          className="sidebar_routes"
          activeClassName="active"
        >
          Carteira Cadastrada
        </NavLink>
        <NavLink
          to="/rentabilidade"
          className="sidebar_routes"
          activeClassName="active"
        >
          Rentabilidade
        </NavLink>
        <NavLink
          to="/transacoes"
          className="sidebar_routes"
          activeClassName="active"
        >
          Transações
        </NavLink>
        <NavLink
          to="/relatorios"
          className="sidebar_routes"
          activeClassName="active"
        >
          Relatórios
        </NavLink>
        <NavLink
          to="/comparar"
          className="sidebar_routes"
          activeClassName="active"
        >
          Comparar
        </NavLink>
        <NavLink
          to="/configuracoes"
          className="sidebar_routes"
          activeClassName="active"
        >
          Configurações
        </NavLink>
      </nav>
    </aside>
  );
}

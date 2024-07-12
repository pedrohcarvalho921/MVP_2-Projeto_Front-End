import "./Header.css";
import logout from "./assets/logout.svg";
import Settings from "./assets/Settings.png";
import User from "./assets/user.png";

export function Header({ usuario }) {
  return (
    <header className="headerStyle">
      <div className="appName">Corretora Online Full Stack PUC</div>
      <div className="parts">
        <img src={User} />
        <div className="UserName">{usuario}</div>
        <img src={Settings} />
        <img src={logout} />
      </div>
    </header>
  );
}

import "./Footer.css";
import Facebook from "./assets/Facebook.png";
import Instagram from "./assets/Instagram.png";
import Linkedin from "./assets/Linkedin.png";

export function Footer() {
  return (
    <footer className="footerStyle">
      <div className="footerRoute">Termos de uso</div>
      <div className="footerRoute">Privacidade</div>
      <div className="footerRoute">
        Corretora Online Full Stack PUC - CNPJ 111.1111.11111-0001-1
      </div>
      <div className="footerRoute">
        © 2023 - 2024. Todos direitos reservados
      </div>
      <div className="footerImages">
        <img src={Facebook} />
        <img src={Instagram} />
        <img src={Linkedin} />
      </div>
    </footer>
  );
}

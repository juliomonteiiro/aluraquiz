import footerStyles from "./footer.module.css";
import jm from "./../../../public/images/jm.png";

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
        <img src={jm.src} alt="Logo" className={footerStyles.logo} />
          <p>
            Criado por <br/>@juliomonteiiro
            </p>
        </footer>
  )
}

import { SiYoutube } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import {SiInstagram }from "react-icons/si";
import '../styles/components/Footer.css';
import Logo from '../assets/LogoBranca.svg';


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <a href="/"><img src={Logo} alt="Logotipo da Implaface" className="logo"/></a>
                <div className='footer-links'>
                    <a href="/contact"className="footer-link">Contato</a> 
                    <a href="/services"className="footer-link">Nossos Serviços</a> 
                    <a href="/about"className="footer-link">Sobre nós</a> 
                    <a href="/specialties"className="footer-link">Especialidades</a>
                </div>
                
                <div className="footer-social">
                    <a href="https://www.instagram.com/implaface/" title="Instagram"className="footer-icon"aria-label="Instagram" target="_blank" rel="noopener"><SiInstagram /></a>
                    <a href="https://pt-br.facebook.com/implaface" title="Facebook"className="footer-icon"aria-label="Facebook" target="_blank" rel="noopener"><SiFacebook /></a>
                    <a href="https://www.youtube.com/implaface" title="YouTube"className="footer-icon"aria-label="YouTube" target="_blank" rel="noopener"><SiYoutube /></a>
                </div>
                
            </div>
            <div className="footer-legal">
                <a href="" className="footer-link">Política de Privacidade</a> 
                <a href=""className="footer-link">Termos de Serviço</a> 
            </div>
            <div className="footer-bottom">
            <p className="footer-txt">&copy; 2025 Implaface. Todos os direitos reservados.</p>
            <p className="footer-txt">Évora WebDesign</p>
            </div>
                
        </footer>
    );
  }

  export default Footer;
  
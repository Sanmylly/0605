import './styles/components/Header.css';
import Logo from './assets/LogoBranca.svg';

function Header() {
    return (
        <header className="navbar">
          <nav className="nav">
            <div className="logo">
              <a href="/"><img src={Logo} alt="Logotipo da Implaface" /></a>  
            </div>
            <label htmlFor="drop" className="hamburger toggle">&#9776;</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li><a href="#contact"className='link'>Entre em Contato</a></li>
            </ul>
      </nav>
      
      
    </header>
    );
  }

  export default Header;
  
  
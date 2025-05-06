import '../styles/components/Home.css';
import foto from '../assets/IMG_7520.png';

function Home() {
    return ( 
    <div className="inicio">
    <section className="features">
        <h3>Os melhores tratamentos e  <br/>tecnologias à sua disposição</h3>
        <p>Na Implaface, oferecemos vários tratamentos de alta qualidade,<br/> focando sempre no bem-estar e satisfação dos nossos pacientes.<br/> Nossa missão é aumentar sua qualidade de vida, saúde e auto estima,<br/> com um atendimento personalizado e acolhedor.</p>
    </section>

            <img src= {foto} alt="" className='img' />

        
    </div>
    
    );
}

export default Home;
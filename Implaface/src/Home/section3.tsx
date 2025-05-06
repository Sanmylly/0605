import '../styles/components/s3.css';
import foto from '../assets/IMG_7471.png';

function Section3() {
    return ( 
    <div className="section">
    <section className="content">
        <h3>Estrutura climatizada, confortável <br/>e pensada para melhor te atender.</h3>
        <p>A estrutura da Implaface foi pensada para te oferecer bem-<br/> estar e acolhimento. Nossas clínicas possuem instalações <br/>completas para diagnosticar e tratar nossos pacientes sem <br/>necessidade de deslocamento: é a tecnologia usada ao seu <br/>favor e para seu conforto. </p>
    </section>
    
        <img src= {foto} alt="" className='img' />
    </div>
    
    );
}

export default Section3;
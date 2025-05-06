import '../styles/components/CTAHome.css';
import ContactButton from '../ContactButton';

function CTAHome1() {
  return (
    <section className="CTAHome1">
      <div className="box-cta">
        <p className="p1">
          Tem dúvidas sobre o tratamento? <br />
          Nossa equipe está pronta para te ajudar. <br />
          Fale conosco!
        </p>
        <p className="p2">
          É muito fácil agendar sua consulta: basta entrar em contato <br />
          e nosso time encontrará o melhor momento para sua visita!
        </p>
        <p className="p3" >
          <em>Vem pra Implaface!</em>
        </p>
        <ContactButton />
        
      </div>
    </section>
  );
}

export default CTAHome1;
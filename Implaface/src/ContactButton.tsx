import './styles/components/Buttons.css';

const ContactButton = () => {
  return (
      <a href="https://api.whatsapp.com/send?phone=5581995424847&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" target='_blank' rel="noopener noreferrer">
        <button className="button">
        Entre em contato
      </button>
      </a>
      
  );
}



export default ContactButton;
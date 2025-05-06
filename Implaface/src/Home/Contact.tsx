import '../styles/components/Contact.css';
function Contact (){
    return (
        <div className="contact-container" id='contact'>
            <h3 className='titleFAQ'>Fale Conosco</h3>
            <div className="contact">
                <p className='text'>Contato </p>
                <p className='text'>Telefone: (81) 3719-6559</p>
                <p className='text'>Email: contato@implaface.com</p>
            </div>
            <div className="map-container">
            <p className='text'>Nosso endereço em Caruaru:</p>
            <div className="map-responsive">
                
            <iframe title="Implaface Caruaru Localização" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.1097103644615!2d-35.968648614959264!3d-8.27259936189428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98bdcb4440bad%3A0xdc62b73c933ad2d7!2sImplaface!5e1!3m2!1spt-BR!2sbr!4v1739593696209!5m2!1spt-BR!2sbr"
width="10vw" height="4vh" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
            <div className="contact">
                <p className='text'>Contato </p>
                <p className='text'>Telefone: (11)93080-8280</p>
                <p className='text'>Email: contato@implaface.com</p>
            </div>
            <div  className="map-container">
                <p className='text'>Nosso endereço em São Paulo:</p>
            <div className="map-responsive">
            
            <iframe title="Implaface São Paulo Localização" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549.3438510388683!2d-46.67664912307717!3d-23.552925041234644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce578ed3e55f91%3A0x45e651470a2de01c!2sImplaface!5e1!3m2!1spt-BR!2sbr!4v1740524848665!5m2!1spt-BR!2sbr"
             width="10vw" height="4vh" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
             
            </div>
            
        </div>
       
    )
}

export default Contact;
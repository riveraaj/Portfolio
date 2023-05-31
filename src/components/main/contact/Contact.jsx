import '../../../../public/assets/css/contact.css'

export function Contact() {
    return (
        <section id="Contact">
            <div id="contact-header">
                <img src="./assets/images/contact.png" alt="Me in a computer" className="rounded img-fluid" />
                <h2>CONTACT ME</h2>
                <hr />
            </div>
            <div id="contact-info">
                <p>Have a question or want to work together?</p>
                <ul id="contact-info-contacts">
                    <li className="contact">jonathandavidr7@gmail.com</li>
                    <li className="contact">https://www.linkedin.com/in/jriveraaa/</li>
                </ul>
            </div>
            <div id="stop-nav"></div>
            <div id="toUp">
                <a href="#Home"><i className="fa-solid fa-arrow-up"></i></a>
            </div>
        </section>
    );
}
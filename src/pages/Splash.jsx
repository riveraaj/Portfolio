import '../../public/assets/css/splash.css'

export function Splash() {
    return (
        <section className="splash-container">
            <div className="avatar">
                <img src="./assets/images/nav-second.png" alt="Button Portfolio" />
            </div>
            <div className="content">
                <h1>Software Engineer</h1>
                <p>
                    <span><a href="https://www.instagram.com/__riveraa.j/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></span>
                    <span><a href="https://github.com/riveraaj" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>
                </p>
            </div>
        </section>
    );
}
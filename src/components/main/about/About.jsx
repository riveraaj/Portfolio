import '../../../../public/assets/css/about.css'

export function About() {
    return (
        <section id="About">
            <div id="about-header">
                <img src="./assets/images/overview.png" alt="Me closing an eye" className="img-fluid" />
                <h2>OVERVIEW</h2>
                <hr />
            </div>
            <div id="about-container-data">
                <p>
                    I&apos;m a
                    <strong>Software Engineer</strong> interested in performing tasks in the area of
                    <b>Front-End, Back-End, IT</b>
                    as a
                    <strong>Jr.developer</strong>.
                </p>
                <h3>Some Data</h3>
                <hr />
                <ul>
                    <li>I live in <strong>Costa Rica</strong></li>
                    <li>I&apos;m <strong>20</strong> years old</li>
                    <li>I studied at the <strong>Universidad Internacional de las Americas</strong></li>
                    <li>Participated in the <strong>Oracle One Program</strong></li>
                </ul>
                <p id="about-p-bottom">
                    I have carried out several projects, both commercial and my own, most of which are in my &nbsp;
                    <strong><a href="https://github.com/riveraaj" target="_blank"
                        rel="noopener noreferrer"><u>Github</u></a></strong>
                </p>
            </div>
        </section>
    )
}
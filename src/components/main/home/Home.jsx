import { ProfessionSpan } from "./ProfessionSpan";
import { iconSocialMediaList } from "../../../../public/assets/js/constants";
import { IconList } from "../IconList";
import '../../../../public/assets/css/home.css'

export function Home() {
    return (
        <section id="Home">
            <div id="home-header">
                <h1>
                    Jonathan Rivera
                    <ProfessionSpan id="frontend" classN="show">Front End</ProfessionSpan>
                    <ProfessionSpan id="backend" classN="hide">Back End</ProfessionSpan>
                    <ProfessionSpan id="software" classN="hide">Software</ProfessionSpan>
                    Developer
                </h1>
            </div>
            <div id="home-container-img-setup">
                <img src="./assets/images/setup.png" alt="Setup Gamer" className="img-fluid" />
            </div>
            <div id="home-container-social">
                <IconList iconsList={iconSocialMediaList} />
            </div>
        </section>
    )
}
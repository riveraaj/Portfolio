import '../../../../public/assets/css/skills.css'
import { skillsList } from '../../../../public/assets/js/constants';
import { Skill } from './Skill';

export function Skills() {
    return (
        <section id="Skills">
            <div id="skills-header">
                <h2>SKILLS</h2>
                <hr />
            </div>
            <div id="skills-container-general">
                {skillsList.map(skill => (
                    <Skill key={skill.id} description={skill.description} name={skill.name} skillsSet={skill.skillsSet} />
                ))}
            </div>
        </section>
    );
}
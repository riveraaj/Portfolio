export function Skill({ name, description, skillsSet }) {
    return (
        <div className="skills-general">
            <h3>{name}</h3>
            <p>{description}</p>
            <ul className="grid-skills">
                {skillsSet.map(skillSet => (
                    <li key={skillSet.id} className="skill">{skillSet.name}</li>
                ))}
            </ul>
        </div>
    )
}
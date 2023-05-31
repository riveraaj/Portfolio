import { ProjectItem } from "./ProjectItem";

export function ProjectsList({ projects }) {
    return (
        <ul id="grid-projects">
            {projects.map((project, index) => (
                <ProjectItem project={project} index={index} key={project.id} />
            ))}
        </ul>
    );
}
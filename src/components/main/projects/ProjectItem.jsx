import { ProjectImage } from "./ProjectImage";
import { ProjectDetails } from "./ProjectDetails"; 
import { ProjectModal } from "./ProjectModal"; 


export function ProjectItem({ project, index }) {
    const { id, title, image, technologies, description, githubLink } = project;
  
    return (
      <li className={`project hidden ${project.type} ${index !== 0 ? 'bottom-project' : ''}`} key={id}>
        <ProjectImage src={image} alt={title} />
        <ProjectDetails title={title} technologies={technologies} index={index}/>
        <ProjectModal id={index} title={title} image={image} description={description} githubLink={githubLink} />
      </li>
    );
  }
  

import { projects } from '../../../../public/assets/js/constants'
import { ProjectsList } from './ProjectsList';
import { ProjectsHeader } from './ProjectsHeader'
import { useFilterNavProject } from '../../../hooks/useFilterNavProject';
import '../../../../public/assets/css/project.css';

export function Projects() {
    const {activeFilter, handleFilterClick} = useFilterNavProject()

    return (
        <section id="Projects">
            <ProjectsHeader activeFilter={activeFilter} handleFilterClick={handleFilterClick} />
            <ProjectsList projects={projects} />
        </section>
    );
}
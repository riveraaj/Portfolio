import { useEffect, useState } from 'react';
import { filterProjects } from '../../../utils/navProjectHelper';
import { projects } from '../../../../public/assets/js/constants'
import { ProjectsList } from './ProjectsList';
import { ProjectsHeader } from './ProjectsHeader'
import '../../../../public/assets/css/project.css';

export function Projects() {

    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        filterProjects(filter);
    };

    useEffect(() => {
        const initialFilter = activeFilter;
        filterProjects(initialFilter);
    }, [activeFilter]);

    return (
        <section id="Projects">
            <ProjectsHeader activeFilter={activeFilter} handleFilterClick={handleFilterClick} />
            <ProjectsList projects={projects} />
        </section>
    );
}
import { useEffect, useState } from 'react';
import { filterProjects } from '../utils/navProjectHelper';

export function useFilterNavProject(){
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        filterProjects(filter);
    };

    useEffect(() => {
        const initialFilter = activeFilter;
        filterProjects(initialFilter);
    }, [activeFilter]);

    return { activeFilter, handleFilterClick}
}
export const filterProjects = (type) => {
    const projectElements = document.getElementsByClassName('project');
    for (let i = 0; i < projectElements.length; i++) {
        const project = projectElements[i];
        if (type === 'all' || project.classList.contains(type)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    }
};
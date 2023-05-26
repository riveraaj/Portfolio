export function ProjectsHeader({ activeFilter, handleFilterClick }) {
    return (
        <div id="projects-header">
            <h2>PROJECTS</h2>
            <hr />
            <nav id="nav-projects">
                <ul>
                    <li className={activeFilter === 'all' ? 'active' : ''} onClick={() => handleFilterClick('all')}>
                        ALL
                    </li>
                    <li className={activeFilter === 'web' ? 'active' : ''} onClick={() => handleFilterClick('web')}>
                        WEB
                    </li>
                    <li className={activeFilter === 'desktop' ? 'active' : ''} onClick={() => handleFilterClick('desktop')}>
                        DESKTOP
                    </li>
                    <li className={activeFilter === 'mobile' ? 'active' : ''} onClick={() => handleFilterClick('mobile')}>
                        MOBILE
                    </li>
                </ul>
            </nav>
        </div>
    );
}
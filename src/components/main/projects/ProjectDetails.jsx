export function ProjectDetails({ title, technologies, index }) {
    return (
        <div className="project-data">
            <h3>{title}</h3>
            <p>{technologies}</p>
            <button type="button" data-bs-toggle="modal" data-bs-target={`#projectModal-${index}`}>
                <i className="fa-solid fa-eye"></i>
            </button>
        </div>
    );
}

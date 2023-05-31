export function ProjectModal({ id, title, image, description, githubLink }) {
    return (
        <div className="modal fade" id={`projectModal-${id}`} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="card">
                        <img src={image} alt={title} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <div className="button-modal-card">
                                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

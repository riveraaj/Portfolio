export function NavDesktop({ linkList }) {
    return (
        <nav id="nav-desktop">
            <a href="#Home">
                <img src="../../../public/assets/images/nav-second.png" alt="Go Home" />
            </a>;
            <div className="container">
                <ul>
                    {linkList.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    );
}
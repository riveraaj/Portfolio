export function NavMobileTablet({ linkList }) {
    return (
        <nav id="nav-mobile-tablet">
            <div className="container">
                <ul>
                    {linkList.map(link => (
                        <li key={link.id}>
                            <a href={link.href}>
                                <i className={link.classIcon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
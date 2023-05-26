export function IconList({ iconsList }) {
    return (
        <ul>
            {iconsList.map(iconList => (
                <li key={iconList.id}>
                    <a href={iconList.href} className={iconList.hrefClass} rel="noopener noreferrer" target={iconList.external ? "_blank" : ""}>
                        <i className={iconList.classIcon}></i>
                    </a>
                </li>
            ))}
        </ul>
    )
}
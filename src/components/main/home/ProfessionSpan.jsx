export function ProfessionSpan({ id, classN, children }) {
    return (
        <span id={id} className={classN} >
            {children}
        </span>
    )
}
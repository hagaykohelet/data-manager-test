import "../css/Table.css"

function Table(props) {
    const { name, organization, attacksCount, status, relationToIsraelSummary, imageUrl } = props
    return (
        <div className="one-row">
            <td className="name">
                <div className="name-img">{name}
                    <img src={imageUrl} alt="null" />
                </div></td>

            <td className="organization">{organization}</td>
            <td className="attack">{attacksCount}</td>
            <td className="status">{status}</td>
            <td className="summary">{relationToIsraelSummary}</td>
        </div>
    )
}

export default Table
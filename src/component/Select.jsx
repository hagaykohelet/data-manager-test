
function Select(props) {
  return (
    <>
    <select onChange={props.onChange}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Quiet">Quiet</option>
        <option value="Dead">Dead</option>
        <option value="Israeli Agent">Israeli Agent</option>
    </select>
    <button onClick={props.onClick}>submit</button>
</>
  )
}

export default Select
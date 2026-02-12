function Inputs(props) {
    const {type, placeholder, onClick, onChange, buttonText} = props
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={onChange}/>
        <button onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default Inputs
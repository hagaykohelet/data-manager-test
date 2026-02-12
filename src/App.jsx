import './App.css'
import data from "./db/data.json"
import Table from './component/Table'
import Inputs from './component/Inputs'
import Select from './component/Select'
import { useState } from 'react'
function App() {
  const [name, setName] = useState("")
  const [numberAttack, setAttack] = useState(0)
  const [status, setStatus] = useState("")
  const [terrorist, setTerrorist] = useState(data)

  function handleStatus(v) {
    setStatus(v.target.value)
  }

  function SearchByStatus() {
    if (status === "All") {
      setTerrorist(data)
    }
    else {

      setTerrorist(data.filter(item => item.status === status.toLowerCase()))
    }
  }




  function handleName(e) {
    setName(e.target.value)
  }


  function searchMostDangerous() {
      let dangerous = data[0]
      console.log(dangerous);
    for (let item of data) {
      if(item.attacksCount > dangerous.attacksCount && item.imageUrl !== null && item.status == "active"){
        dangerous = item
      }
    }
    
    setTerrorist([dangerous])
  }

  function searchByName() {
    setTerrorist(data.filter(item => item.name === name))

  }


  function handleNumberAttack(n) {
    setAttack(n.target.value)
  }

  function searchByAttacks() {
    setTerrorist(data.filter(item => item.attacksCount == numberAttack))
  }




  return (
    <>

      <h1>Threat Actor Database</h1>
      <Inputs type="text" placeholder='search by Name ...' onChange={handleName} onClick={searchByName} buttonText="search" />
      <Inputs type="number" placeholder='search by Attacks' onChange={handleNumberAttack} onClick={searchByAttacks} buttonText="search" />
      <Select onChange={handleStatus} onClick={SearchByStatus} />
      <button onClick={searchMostDangerous}>Find Most Dangerous</button>
      <table>
        <tr className='title'>
          <th>name</th>
          <th>organization</th>
          <th>attacksCount</th>
          <th>status</th>
          <th>relationToIsraelSummary</th>
        </tr>
        <tr>
          {terrorist.map((item) => {
            return (
              <Table name={item.name} imageUrl={item.imageUrl} organization={item.organization} attacksCount={item.attacksCount} status={item.status} relationToIsraelSummary={item.relationToIsraelSummary} />
            )
          })}
        </tr>
      </table>
    </>
  )
}

export default App

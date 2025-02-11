import './App.css'
import PerssonCard from './components/PersonCard'
import ListPerson from './components/PersonList'

function App() {
  const card = [
    {firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"},
    {firstName: "John", lastName: "Smith", age: 88, hairColor: "Yellow"},
    {firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Red"},
    {firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown"}
]

  return (
    <div className="App">
      <ListPerson card={card}/>
    </div>
  )
}

export default App

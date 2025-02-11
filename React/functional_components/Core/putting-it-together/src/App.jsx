import './App.css'
import PresonList from './components/PersonList'

function App() {

  const persons = [
    {firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"},
    {firstName: "John", lastName: "Smith", age: 88, hairColor: "Yellow"},
    {firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Red"},
    {firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown"}
]

  return (
    <div className="App">
      <PresonList persons={persons}/>
    </div>
  )
}

export default App

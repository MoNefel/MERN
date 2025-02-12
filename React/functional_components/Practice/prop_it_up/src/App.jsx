import './App.css' // Importing the CSS file for styling
import PerssonCard from './components/PersonCard' // Importing the PerssonCard component
import ListPerson from './components/PersonList' // Importing the ListPerson component

function App() {
  // Defining an array of card objects with person details
  const card = [
    {firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"},
    {firstName: "John", lastName: "Smith", age: 88, hairColor: "Yellow"},
    {firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Red"},
    {firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown"}
  ]

  return (
    <div className="App">
      {/* Rendering the ListPerson component and passing the card array as a prop */}
      <ListPerson card={card}/>
    </div>
  )
}

// Exporting the App component as the default export
export default App

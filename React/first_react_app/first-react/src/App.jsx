import './App.css'
import Bench from './components/Bench'
import Form from './components/Form'
import Header from './components/Header'
import Player from './components/Player'
import Team from './components/Team'


const App = () => {

console.log('Hellooo')

  return (
<div className='w-50 mx-auto'>
  <Form/>
{/* <Header/>
<Team/>
<Player name={"Med Akez"} position={"Forward"} number={55} points={32} />
<Player name={"Akamensi"} position={"backward"} number={22} points={33} />
<Bench/> */}
</div>
  )
}

export default App

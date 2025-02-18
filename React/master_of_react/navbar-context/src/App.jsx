import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar';
import FormWrapper from "./components/FormWrapper";
import { createContext } from 'react';


const UserContext = createContext()
export { UserContext }

function App() {
  
  const [name, setName] = useState("Bob Smith");
  

  return (
    <UserContext.Provider value={{
      name,
      setName
    }}>
      <NavBar/>
      <FormWrapper/>
    </UserContext.Provider>
  );
}

export default App

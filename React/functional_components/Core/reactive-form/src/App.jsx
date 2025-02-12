import { useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])
  const [firstName, setFirstName] = useState('')
  const [firstError, setFirstError] = useState("");
  const [lastName, setLastName] = useState('')
  const [lastError, setLastError] = useState("");
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
    if(e.target.value.length < 2) {
      setTitleError("First name needs to be 2 characters or longer!");
     }else {
        setTitleError("");
     }

    setLastName(e.target.value);
    if(e.target.value.length < 2) {
      setLastError("Last name needs to be 2 characters or longer!");
     }else {
      setLastError("");
     }

    setEmail(e.target.value);
    if(e.target.value.length < 8) {
      setEmailError("Email needs to be 8 characters or longer!");
     }else {
      setEmailError("");
     }

    setPassword(e.target.value);
    if(e.target.value.length < 8) {
      setPasswordError("Password needs to be 8 characters or longer!");
     }else {
      setPasswordError("");
     }

    setConfirmPassword(e.target.value);
    if(e.target.value != password) {
      setConfirmPasswordError("Confirm Password does not match!");
     }else {
      setConfirmPasswordError("");
     }

     const newUser = { firstName, lastName, email, password, confirmPassword }
      setUsers([...users, newUser])
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setIsSubmitted(true)

}

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newUser = { firstName, lastName, email, password, confirmPassword }
  //   setUsers([...users, newUser])
  //   setFirstName('')
  //   setLastName('')
  //   setEmail('')
  //   setPassword('')
  //   setConfirmPassword('')

  //   setIsSubmitted(true)
  // }

  return (
    <>
      {
      isSubmitted 
      ? <h1>Thank you for submitting the form!</h1> 
      : <h1>Welcome, Please submit the form</h1>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button >Submit</button>
      </form>
    </>
  )
}

export default App

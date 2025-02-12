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

    // Validate First Name
    if (firstName.length < 2) {
      setFirstError('First name needs to be 2 characters or longer!');
    } else {
      setFirstError('');
    }

    // Validate Last Name
    if (lastName.length < 2) {
      setLastError('Last name needs to be 2 characters or longer!');
    } else {
      setLastError('');
    }

    // Validate Email
    if (email.length < 8) {
      setEmailError('Email needs to be 8 characters or longer!');
    } else {
      setEmailError('');
    }

    // Validate Password
    if (password.length < 8) {
      setPasswordError('Password needs to be 8 characters or longer!');
    } else {
      setPasswordError('');
    }

    // Validate Confirm Password
    if (confirmPassword !== password) {
      setConfirmPasswordError('Confirm Password does not match!');
    } else {
      setConfirmPasswordError('');
    }

    // Check if all validations pass
    if (
      firstName.length >= 2 &&
      lastName.length >= 2 &&
      email.length >= 8 &&
      password.length >= 8 &&
      confirmPassword === password
    ) {
      const newUser = { firstName, lastName, email, password, confirmPassword };
      setUsers([...users, newUser]);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsSubmitted(true);
    }
  };  

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
          {firstError && <p className="error">{firstError}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          {lastError && <p className="error">{lastError}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <p className="error">{passwordError}</p>}
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button >Submit</button>
      </form>
      <div>
        <h1>Users</h1>
        <div>
          {users.map((user, i) => (
            <div key={i}>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

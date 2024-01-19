import { useState } from 'react'

import RegistrationPage from './components/RegistrationPage'

function App() {
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const updateName = event => setName(event.target.value)
  const updateBirthdate = event => setBirthdate(event.target.value)

  const registerPerson = event => {
    event.preventDefault()

    const newPerson = { name, birthdate }
    // TODO: implement axios for creating person in backend
    registrationService.createPerson(newPerson)
      .then(registeredPerson => {
        // add to state
        // clear input fields
        // show notification?
      })
      .catch(error => {
        // show error notification?
      })

  }

  return (
    <div>
      <RegistrationPage
        name={name}
        birthdate={birthdate}
        handleNameChange={updateName}
        handleBirthdateChange={updateBirthdate}
        handleSubmit={registerPerson}
      />
    </div>
  )
}

export default App

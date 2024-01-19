import { useState } from 'react'

import RegistrationPage from './components/RegistrationPage'

function App() {
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const updateName = event => setName(event.target.value)
  const updateBirthdate = event => setBirthdate(event.target.value)

  return (
    <div>
      <RegistrationPage
        name={name}
        updateName={updateName}
        birthdate={birthdate}
        updateBirthdate={updateBirthdate}
      />
    </div>
  )
}

export default App

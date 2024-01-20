import { useEffect, useState } from 'react'

import peopleService from './services/people'
import RegistrationPage from './components/RegistrationPage'
import ViewingPage from './components/ViewingPage'

function App() {
  const [people, setPeople] = useState([])
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  useEffect(() => {
    peopleService.getAllPeople()
      .then(people => setPeople(people))
  }, [])

  // input onChange handlers
  const updateName = event => setName(event.target.value)
  const updateBirthdate = event => setBirthdate(event.target.value)

  const registerPerson = event => {
    event.preventDefault()

    const newPerson = { name, birthdate }
    peopleService.createPerson(newPerson)
      .then(registeredPerson => {
        setPeople(people.concat(registeredPerson))
        // clear input fields
        setName('')
        setBirthdate('')
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

      <ViewingPage data={people} />
    </div>
  )
}

export default App

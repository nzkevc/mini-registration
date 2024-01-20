import { useEffect, useState } from 'react'

import peopleService from './services/people'
import RegistrationPage from './components/RegistrationPage'
import ViewingPage from './components/ViewingPage'

function App() {
  const [people, setPeople] = useState([])
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [view, setView] = useState('registration')

  useEffect(() => {
    peopleService.getAllPeople()
      .then(people => setPeople(people))
  }, [])

  // input onChange handlers
  const updateName = event => setName(event.target.value)
  const updateBirthdate = event => setBirthdate(event.target.value)

  const changeView = () => setView(view === 'registration' ? 'viewing' : 'registration')

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
      {view === 'registration' ?
        <RegistrationPage
          name={name}
          birthdate={birthdate}
          handleNameChange={updateName}
          handleBirthdateChange={updateBirthdate}
          handleSubmit={registerPerson}
        />
        :
        <ViewingPage data={people} />
      }
      {/* TODO: extract into own component? */}
      <button onClick={changeView}>change view</button>
    </div>
  )
}

export default App

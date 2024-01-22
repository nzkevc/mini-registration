import { useEffect, useState } from 'react'

import peopleService from './services/people'
import RegistrationPage from './components/RegistrationPage'
import ViewingPage from './components/ViewingPage'
import Notification from './components/Notification'


function App() {
  const [people, setPeople] = useState([])
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [view, setView] = useState('registration')
  const [alert, setAlert] = useState({ severity: null, message: 'Nothing to alert right now!' })

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
        // show success notification
        setAlert({ severity: 'success', message: `Successfully added ${registeredPerson.name} to server!` })
        setTimeout(() => {
          setAlert({ severity: null, message: 'Nothing to alert right now!' })
        }, 5000)
      })
      .catch(error => {
        setAlert({ severity: 'error', message: `${error.response.data.error}` })
        setTimeout(() => {
          setAlert({ severity: null, message: 'Nothing to alert right now!' })
        }, 5000)
      })
  }

  return (
    <div>
      <Notification alert={alert} />
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
      <button onClick={changeView}>change view</button>
    </div>
  )
}

export default App

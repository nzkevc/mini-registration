const RegistrationPage = ({ name, updateName, birthdate, updateBirthdate, addPerson }) => {

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>Name: <input value={name} onChange={updateName} /></div>
        <div>Birthdate: <input value={birthdate} onChange={updateBirthdate} /></div>
        <button type='submit'>submit</button>

        {/* TODO: implement switching pages */}
        <div></div>
      </form>
    </div>
  )
}

export default RegistrationPage
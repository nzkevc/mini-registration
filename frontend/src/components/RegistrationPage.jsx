const RegistrationPage = ({ name, handleNameChange, birthdate, handleBirthdateChange, handleSubmit }) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Name: <input value={name} onChange={handleNameChange} /></div>
        <div>Birthdate: <input value={birthdate} onChange={handleBirthdateChange} /></div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default RegistrationPage
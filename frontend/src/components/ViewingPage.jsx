const ViewingPage = ({ data }) => {

  return (
    <div>
      {data.map(entry => <p key={entry.id}>Name: {entry.name}<br /> Birthdate: {entry.birthdate}</p>)}
    </div>
  )
}

export default ViewingPage
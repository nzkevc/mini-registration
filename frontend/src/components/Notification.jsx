import Alert from '@mui/material/Alert'

const Notification = ({ alert }) => {

  return (
    <div>
      {
        alert.severity === 'error' ? <Alert severity="error">{alert.message}</Alert> :
          alert.severity === 'success' ? <Alert severity="success">{alert.message}</Alert> :
            null
      }
    </div>
  )
}

export default Notification
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegistrationPage = ({ name, handleNameChange, birthdate, handleBirthdateChange, handleSubmit }) => {

  return (
    <Box
      sx={{
        height: '80%',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Stack spacing={2} sx={{
        width: '35em',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TextField
          id='name-field'
          label="Name"
          variant="outlined"
          size='small'
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          id='birthdate-field'
          label="Birthdate"
          variant="outlined"
          size='small'
          value={birthdate}
          onChange={handleBirthdateChange}
        />
        <Button
          variant='contained'
          type='submit'
          sx={{ m: 1, width: '10em' }}
        >Submit</Button>
      </Stack>
    </Box>
  )
}

export default RegistrationPage
require('dotenv').config()
const express = require('express')
const Person = require('./models/person')

const app = express()

app.use(express.static('dist'))
app.use(express.json())

app.get('/api/people', (request, response) => {
  Person.find({})
    .then(people => response.json(people))
})

app.get('/api/people/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/people', (request, response, next) => {
  const body = request.body

  const newPerson = new Person({
    name: body.name,
    birthdate: body.birthdate,
  })

  newPerson.save()
    .then(savedPerson => response.json(savedPerson))
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  console.log(request.body)
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
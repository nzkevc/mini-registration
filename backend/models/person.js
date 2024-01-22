const mongoose = require('mongoose')

mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI

console.log(`connecting to ${url}`)
mongoose.connect(url)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(error => {
    console.log(`error connecting to mongo db: ${error.message}`)
  })


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
    validate: {
      validator: v => {
        return /^(3[01]|[12][0-9]|0?[1-9])(\/)(1[0-2]|0?[1-9])\2[0-9]{4}$/.test(v)
      },
      message: props => `${props.value} is invalid. Please enter the birthdate in the format: <dd/mm/yyyy>`
    }
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
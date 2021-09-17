require('dotenv').config()

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const dbConnectionURL = 'dbConnectionURL=mongodb+srv://admin:123@cluster0.igyyo.mongodb.net/zdrav_service?retryWrites=true&w=majority'

module.exports = {
  dbConnectionURL,
  options,
}

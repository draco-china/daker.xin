import { Nuxt, Builder } from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import api from './api'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)

// eslint-disable-next-line no-console
console.log('Server listening on ' + host + ':' + port)

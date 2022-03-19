import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ path: __dirname + '/../.env' })
}
const { NODE_ENV } = process.env

/**
 * Create & configure express server
 */

const app = express()


if (NODE_ENV === 'production') {
	app.use(
		cors({ origin: JSON.parse(process.env.CORS_ALLOWED_ORIGINS || '') })
	)
} else {
	app.use(cors({ origin: true }))
}
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (NODE_ENV !== 'production') {
	app.use(morgan('dev'))
}

const port: string | number = process.env.PORT || 5000

app.listen(port, () => console.log(`:: Listening > 0.0.0.0:${port}`))

export { app }

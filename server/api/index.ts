import express from "express"
import { app } from "../app"

const indexRouter = express.Router();

app.get('/api', async (req, res) => {
	res.status(200).json({})
})
app.use('/api', indexRouter)

export default indexRouter

import "./wordAPI"



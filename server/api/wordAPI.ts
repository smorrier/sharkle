import express from "express"
import indexRouter from ".";

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.status(200).json({ data: ['S', 'A', 'U', 'T', 'E'] })
	} catch(error) {
		res.status(500).json({ erorr: "Something went wrong while fetching today's word" })
	}
})

indexRouter.use('/word', router)
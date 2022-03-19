import axios from "../constants/axios"

const baseRoute = '/word/'
const wordAPI = {
	get: () => {
		return axios.get(`${baseRoute}`)
	}
}

export default wordAPI
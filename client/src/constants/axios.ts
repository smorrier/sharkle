import _axios from "axios";

const axios = _axios.create({
	baseURL: `http://localhost:5000/api/`,
})

export default axios
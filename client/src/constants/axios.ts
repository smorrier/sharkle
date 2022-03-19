import _axios from "axios";

const axios = _axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/api/`,
})

export default axios
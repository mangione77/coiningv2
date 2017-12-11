import axios from 'axios'

const Posts_ApiService = {}

Posts_ApiService.getPosts = (limit) => {
	return new Promise((resolve,reject) => {
		axios.get(`http://localhost:1337/api/news/${limit}`)
			.then(response => {
				resolve(response.data)
			})
			.catch(console.error)
	})
}

export default Posts_ApiService
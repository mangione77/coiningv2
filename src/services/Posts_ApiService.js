import axios from 'axios'

const Posts_ApiService = {}

Posts_ApiService.getPosts = (limit) => {
	return new Promise((resolve,reject) => {
		axios.get(`https://lit-beyond-48037.herokuapp.com/api/news/${limit}`)
			.then(response => {
				resolve(response.data)
			})
			.catch(console.error)
	})
}

export default Posts_ApiService
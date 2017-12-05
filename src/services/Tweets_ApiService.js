import axios from 'axios'

const Tweets_ApiService = {}

Tweets_ApiService.getTweetsOnQuery = (query) => {
	return new Promise((resolve,reject) => {
		axios.get(`http://localhost:1337/api/tweets/${query}`)
			.then(data => {
				resolve(data.data)
			})
			.catch(console.error)	
	})
	
}

Tweets_ApiService.getOnlyOneTweet = (query) => {
	return new Promise((resolve,reject) => {
		axios.get(`http://localhost:1337/api/tweets/${query}`)
			.then(response => {
				for (let i=0;i<response.data.data.length;i++) {
					resolve(response.data.data[i])
					break;
				}
			})
			.catch(console.error)
	})
} 

export default Tweets_ApiService
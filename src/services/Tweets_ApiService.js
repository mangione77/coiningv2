import axios from 'axios'

const Tweets_ApiService = {}

Tweets_ApiService.getTweetsOnQuery = (query,count) => {
	return new Promise((resolve,reject) => {
		axios.get(`https://lit-beyond-48037.herokuapp.com/api/tweets/${query}/${count}`)
			.then(data => {
				resolve(data.data)
			})
			.catch(console.error)	
	})
	
}

Tweets_ApiService.getOnlyOneTweet = (query) => {
	let count = 1
	return new Promise((resolve,reject) => {
		axios.get(`https://lit-beyond-48037.herokuapp.com/api/tweets/${query}/${count}`)
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
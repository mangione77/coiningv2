import axios from 'axios'

const Markets_ApiService = {}

Markets_ApiService.getMarketData = () => {
	return new Promise((resolve,reject) => {
		axios.get('http://localhost:1337/api/exchanges')
			.then(response => {
				resolve(response.data)
			})
			.catch(console.error)	
	})
}

export default Markets_ApiService
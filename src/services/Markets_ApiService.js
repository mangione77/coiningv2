import axios from 'axios'

const Markets_ApiService = {}

Markets_ApiService.getMarketData = () => {
	return new Promise((resolve,reject) => {
		axios.get('https://lit-beyond-48037.herokuapp.com/api/exchanges')
			.then(response => {
				resolve(response.data)
			})
			.catch(console.error)	
	})
}

export default Markets_ApiService
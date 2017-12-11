import axios from 'axios'

const HistoricalData_ApiService = {}

HistoricalData_ApiService.getMonth = () => {
	return new Promise ((resolve,reject) => {
		axios.get('http://localhost:1337/api/indexes/historical/month')
			.then(response => {
				resolve(response.data)
			})
			.catch(console.error)
	})

}

export default HistoricalData_ApiService
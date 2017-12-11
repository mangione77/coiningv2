import axios from 'axios'

const HistoricalData_ApiService = {}

HistoricalData_ApiService.getMonth = () => {
	return new Promise ((resolve,reject) => {
		axios.get('https://lit-beyond-48037.herokuapp.com/api/indexes/historical/month')
			.then(response => {
				resolve(response.data)
			})
			.catch(console.error)
	})

}

export default HistoricalData_ApiService
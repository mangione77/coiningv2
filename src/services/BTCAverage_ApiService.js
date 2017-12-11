import axios from 'axios'

const BTCAverage_ApiService = {}

// BTC AVERAGE

BTCAverage_ApiService.getBitcoinAveragePrice_EUR = () => {
	return new Promise((resolve,reject) => {
		axios.get('http://localhost:1337/api/indexes/btcaverage/eur')
			.then(response => {
				resolve(response.data)
			})
			.catch(err => {
				reject(err)
			})	
	})	
}

BTCAverage_ApiService.getBitcoinAveragePrice_USD = () => {
	return new Promise((resolve,reject) => {
		axios.get('http://localhost:1337/indexes/btcaverage/usd')
			.then(response => {
				resolve(response.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export default BTCAverage_ApiService
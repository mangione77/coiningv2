import axios from 'axios'

const BTCAverage_ApiService = {}

// BTC AVERAGE

BTCAverage_ApiService.getBitcoinAveragePrice_EUR = () => {
	return new Promise((resolve,reject) => {
		axios.get('https://lit-beyond-48037.herokuapp.com/api/indexes/btcaverage/eur')
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
		axios.get('https://lit-beyond-48037.herokuapp.com/indexes/btcaverage/usd')
			.then(response => {
				resolve(response.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export default BTCAverage_ApiService
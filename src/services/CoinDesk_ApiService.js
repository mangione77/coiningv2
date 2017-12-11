import axios from 'axios'

const CoinDesk_ApiService = {}

CoinDesk_ApiService.getLatestPriceEUR = () => {
	return new Promise((resolve,reject) => {
		axios.get('https://lit-beyond-48037.herokuapp.com/api/indexes/coindesk/eur')
			.then(response => {
				resolve(response.data)
			})
			.catch(console.error)	
	})
	
}

export default CoinDesk_ApiService
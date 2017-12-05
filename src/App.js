import React, { Component } from 'react';
import './App.css';

import BTCAverage_ApiService from './services/BTCAverage_ApiService'
import CoinDesk_ApiService from './services/CoinDesk_ApiService'
import Markets_ApiService from './services/Markets_ApiService'
import Tweets_ApiService from './services/Tweets_ApiService'

import Navbar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'

class App extends Component {
	constructor() {
		super()

		this.state = {
			btcAverage:parseFloat(Number),
			coindesk:parseFloat(Number),
			exchanges:[],
			tweetsOnQuery:[],
			navTweet:[]
		}
	}

	getBTCAverageEURLatestPrice = () => {
		BTCAverage_ApiService.getBitcoinAveragePrice_EUR()
			.then(response => {
				this.setState({
					btcAverage:response.data.averages.day
				})
			})
			.catch(console.error)
	}

	getCoindeskEURLatestPrice = () => {
		CoinDesk_ApiService.getLatestPriceEUR()
			.then(response => {
				this.setState({
					coindesk:response.data.rate_float
				})
			})
	}

	getExchangesData = () => {
		Markets_ApiService.getMarketData()
			.then(response => {
				this.setState({
					exchanges:response.data
				})
			})
			.catch(console.error)
	}

	getTweetsOnQuery = (query) => {
		Tweets_ApiService.getTweetsOnQuery(query)
			.then(response => {
				this.setState({
					tweetsOnQuery:response.data
				})
			})
			.catch(console.error)
	}

	getOnlyOneTweet = (query) => {
		Tweets_ApiService.getOnlyOneTweet(query)
			.then(response => {
				this.setState({
					navTweet:response
				})
			})
			.catch(console.error)
	}

	componentDidMount() {
		this.getBTCAverageEURLatestPrice()
		this.getCoindeskEURLatestPrice()
		this.getExchangesData()
		this.getOnlyOneTweet('criptomonedas')

	}


  render() {
    return (
      <div className="App">
      <Navbar btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} navTweet={this.state.navTweet} />
      <HomePage btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} exchanges={this.state.exchanges}/>
      <Footer />  
      </div>
    );
  }
}

export default App;
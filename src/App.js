import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import BTCAverage_ApiService from './services/BTCAverage_ApiService'
import CoinDesk_ApiService from './services/CoinDesk_ApiService'
import Markets_ApiService from './services/Markets_ApiService'
import Tweets_ApiService from './services/Tweets_ApiService'
import Posts_ApiService from './services/Posts_ApiService'

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
			navTweet:[],
			posts:[],
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

	getPosts = (limit) => {
		Posts_ApiService.getPosts(limit)
			.then(response => {
				this.setState({
					posts:response.data
				})
			})
	}

	getTweetsOnQuery = (query,count) => {
		Tweets_ApiService.getTweetsOnQuery(query,count)
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
		this.getTweetsOnQuery('criptomonedas','5')
		this.getPosts('5')
	}

	componentDidUpdate() {
		console.log(this.state.tweetsOnQuery)
	}


  render() {
    return (
    <BrowserRouter>
      <div className="App">
      <Route path="/" component={(props) => <Navbar {...props} btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} navTweet={this.state.navTweet} /> } />
      
      <Route exact path="/" component={(props) => <HomePage {...props} btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} 
      			exchanges={this.state.exchanges} posts={this.state.posts} getPosts={this.getPosts} 
      			getTweetsOnQuery={this.getTweetsOnQuery} tweetsOnQuery={this.state.tweetsOnQuery} initialCount={this.state.initialCount} /> } /> 
	
	  <Route path="/graficos" component={() => <h1>Graficos</h1>} />
      <Route path="/about" component={() => <h1>About</h1>} />
      			
      <Route path="/" component={(props) => <Footer btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} /> } />  
      </div>
    </BrowserRouter>  
    );
  }
}

export default App;

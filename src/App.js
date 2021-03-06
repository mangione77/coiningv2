import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import './App.css';
import swal from 'sweetalert2'

import BTCAverage_ApiService from './services/BTCAverage_ApiService'
import CoinDesk_ApiService from './services/CoinDesk_ApiService'
import Markets_ApiService from './services/Markets_ApiService'
import Tweets_ApiService from './services/Tweets_ApiService'
import Posts_ApiService from './services/Posts_ApiService'
import HistoricalData_ApiService from './services/HistoricalData_ApiService'

import Navbar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import Graficos from './pages/Graficos'
import About from './pages/About'

class App extends Component {
	constructor() {
		super()

		this.state = {
			btcAverage:parseFloat(Number),
			coindesk:parseFloat(Number),
			endpoint:'http://localhost:4001/',
			exchanges:[],
			tweetsOnQuery:[],
			navTweet:false,
			posts:[],
			historicalData:[],
			initialCount:5,
			increase:5,
			tweetCount:5,
			tweetIncrease:5,
			currentQuery: 'criptomonedas',
			maxTweets:30,
			maxPosts:80
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

	getHistoricalData = () => {
		HistoricalData_ApiService.getMonth()
			.then(response => {
				this.setState({
					historicalData:response.data
				})
			})
			.catch(console.error)
	}


	sumToInitialCount = () => {
		if (this.state.initialCount < this.state.maxPosts) {
			this.setState({
				initialCount:this.state.initialCount+this.state.increase
			}, () => {
				this.getPosts(this.state.initialCount)
			})
		}
		else {
			swal('¡Has llegado al límite de consultas!','Prueba otra vez más tarde','error')
		}
	}

	sumToTweetCount = () => {
		if (this.state.tweetCount < this.state.maxTweets) {	
		this.setState({
			tweetCount:this.state.tweetCount+this.state.tweetIncrease
		}, () => {
			this.getTweetsOnQuery(this.state.currentQuery,this.state.tweetCount)
		})
		}
		else {
			swal('¡Has llegado al límite de consultas!','Prueba otra vez más tarde','error')
		}
	}
 

	componentDidMount() {
		this.getBTCAverageEURLatestPrice()
		this.getCoindeskEURLatestPrice()
		this.getExchangesData()
		this.getTweetsOnQuery(this.state.currentQuery,this.state.tweetCount)
		this.getPosts(this.state.initialCount)
		this.getHistoricalData()
		const endpoint = this.state.endpoint
    	const socket = socketIOClient(endpoint)
      	socket.on('FromAPI', data => {
      		console.log(data)
      	this.setState({
        	navTweet:data
      	})
      })
	}

	componentDidUpdate() {
		console.log(this.state.navTweet)
	}


  render() {
    return (
    <BrowserRouter>
      <div className="App">
      <Route path="/" component={(props) => <Navbar {...props} btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} navTweet={this.state.navTweet} /> } />
      
      <Route exact path="/" component={(props) => <HomePage {...props} btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} 
      			exchanges={this.state.exchanges} posts={this.state.posts} getPosts={this.getPosts} 
      			getTweetsOnQuery={this.getTweetsOnQuery} tweetsOnQuery={this.state.tweetsOnQuery} sumToInitialCount={this.sumToInitialCount} 
      			sumToTweetCount={this.sumToTweetCount}	/> } /> 
	
	  <Route path="/graficos" component={(props) => <Graficos {...props} month={this.state.historicalData} />} />
      <Route path="/about" component={About} />
      			
      <Route path="/" component={(props) => <Footer btcAverage={this.state.btcAverage} coindesk={this.state.coindesk} /> } />  
      </div>
    </BrowserRouter>  
    );
  }
}

export default App;

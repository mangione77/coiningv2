import React, { Component } from 'react'
import swal from 'sweetalert2'
import Moment from 'react-moment'
import 'moment/locale/es'

class LatestTweets extends Component {
	constructor() {
		super()

		this.state = {
			initialCount:5,
			increase:5,
			max:30,
			current:'' || 'criptomonedas',
			default:'criptomonedas'
		}
	}

	tweetKeywordHandler = (event) => {
		event.preventDefault()
		let query = event.target.value
		this.setState({
			current:query,
			initialCount:5
		}, () => {
			let count = this.state.initialCount
			this.props.getTweetsOnQuery(query,count)			
		}) 

	}

	moreTweetsHandler = (event) => {
		event.preventDefault()
		this.props.sumToTweetCount()
		
	}


	render() {
		return (
			<div className="panel panel-default">
				 <div className="panel-heading">
				  <h3 className="panel-title">Últimos Tweets</h3>
					<div className="btn-group btn-group-sm latestnews--tweets" role="group" aria-label="Basic example">
					  <button type="button" className="btn btn-secondary" value="criptomonedas" onClick={this.tweetKeywordHandler}>Criptomonedas</button>
					  <button type="button" className="btn btn-secondary" value="bitcoin" onClick={this.tweetKeywordHandler}>Bitcoin</button>
					  <button type="button" className="btn btn-secondary" value="bitcoin exchanges" onClick={this.tweetKeywordHandler}>Bitcoin Cash</button>
					</div>
				  </div>
				  <div className="panel-body">
				    <ul className="list-group">
					{
						this.props.tweetsOnQuery.map(tweet => {
							return <li className="list-group-item latestnews--result" key={tweet.id}>
				   						<a href="google.com">{tweet.user.name}</a><em className="text-muted latestnews--link">@{tweet.user.screen_name}</em><br />
				   						<span className="text-overflow">{tweet.text}</span><br/>
				   						<em className="text-muted"><Moment fromNow locale="es">{tweet.created_at}</Moment></em>
				   					</li>
						})
					}
				    </ul>
				  </div>
				  <div className="panel-footer">
				  	<a className="btn btn-primary btn-block" onClick={this.moreTweetsHandler}>Más tweets</a>
				  </div>
				</div>
		)
	}
}

export default LatestTweets
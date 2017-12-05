import React, { Component } from 'react'

class LatestTweets extends Component {
	render() {
		return (
			<div className="panel panel-default">
				 <div className="panel-heading">
				  <h3 className="panel-title">Últimos Tweets</h3>
				  </div>
				  <div className="panel-body">
				    <ul className="list-group">
				   		<li className="list-group-item latestnews--result">
				   			<a href="google.com">Bitcoin mola mazo</a><em className="text-muted latestnews--link">@btcmolamazo</em><br />
				   			<span className="text-overflow">No tenéis ni zorra, el bitcoin es lo mejor que ha pasado...</span>
				   		</li>
				   		<li className="list-group-item latestnews--result">
				   			<a href="google.com">Trader de la ostia</a><em className="text-muted latestnews--link">@hagomoltapasta</em><br />
				   			<span className="text-overflow">Hago tanta pasta con BTC que me he mudado a las maldiv....</span>
				   		</li>
				    </ul>
				  </div>
				  <div className="panel-footer">
				  	<a className="btn btn-primary btn-block">Más tweets</a>
				  </div>
				</div>
		)
	}
}

export default LatestTweets
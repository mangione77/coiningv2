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
				   			<a href="google.com">Testing1</a><em className="text-muted latestnews--link">@testing1</em><br />
				   			<span className="text-overflow">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus at accusamus, voluptatum quia, dicta sunt delectus animi, recusandae debitis aliquid dolorem eum vel cum adipisci sit, libero minus! Molestiae, facere.</span>
				   		</li>
				   		<li className="list-group-item latestnews--result">
				   			<a href="google.com">Testing2</a><em className="text-muted latestnews--link">@testing2</em><br />
				   			<span className="text-overflow">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolorum adipisci harum minima optio, nesciunt quidem maiores eius debitis tempora nostrum dolor, beatae, animi exercitationem, quia ullam porro rem eaque?</span>
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
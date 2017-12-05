import React, { Component } from 'react'

class LatestNewsPanel extends Component {
	render() {
		return (
			<div className="panel panel-default">
				 <div className="panel-heading">
				  <h3 className="panel-title">Últimas noticias</h3>
				  </div>
				  <div className="panel-body">
				    <ul className="list-group">
				   		<li className="list-group-item latestnews--result">
				   			<a href="google.com">Notición</a><em className="text-muted latestnews--link">Google.com</em><br />
				   			<span className="text-overflow">Se esta cabando el bitcoin y la puta...</span>
				   		</li>
				   		<li className="list-group-item latestnews--result">
				   			<a href="google.com">Otra más</a><em className="text-muted latestnews--link">Coindesk.com</em><br />
				   			<span className="text-overflow">Que pasa en la casa</span>
				   		</li>
				    </ul>
				  </div>
				  <div className="panel-footer">
				  	<a className="btn btn-primary btn-block">Más noticias</a>
				  </div>
				</div>
		)
	}
}

export default LatestNewsPanel
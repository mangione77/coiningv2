import React, { Component } from 'react'

class LastPrice extends Component {

	render() {
		return (
			<div className="panel panel-default home--lastprice">
				  <h3 className="home--lastprice--title">Precio de 1 Bitcoin</h3>
				  <div className="panel-body home--lastprice--price">
				   {((this.props.btcAverage+this.props.coindesk)/2).toFixed(2)}€
				  </div>
				</div>
		)
	}
}

export default LastPrice
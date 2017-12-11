import React, { Component } from 'react'
import formatCurrency  from 'format-currency'

class IndexesList extends Component {
	render() {
		return (
			<div className="panel panel-default">
				 <div className="panel-heading">
				  <h3 className="panel-title">Índices</h3>
				  </div>
				  <div className="panel-body">
				    <table className="table">
				    	<tbody>
				    		<tr className="panel--result">
				    			<th><a href="https://bitcoinaverage.com/" target="_blank" rel="nofollow noopener noreferrer">Bitcoin Average</a></th>
				    			<td>{formatCurrency(parseFloat(this.props.btcAverage).toFixed(2))}€</td>
				    		</tr>
				    		<tr>
				    			<th><a href="https://www.coindesk.com/" target="_blank" rel="nofollow noopener noreferrer">CoinDesk</a></th>
				    			<td>{formatCurrency(parseFloat((this.props.coindesk).toFixed(2)))}€</td>
				    		</tr>	
				    	</tbody>
				    </table>
				  </div>
				</div>
		)
	}
}

export default IndexesList
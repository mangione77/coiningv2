import React, { Component } from 'react'
import formatCurrency  from 'format-currency'

class MercadosList extends Component {
	render() {
		return (
			<div className="panel panel-default">
				 <div className="panel-heading">
				  <h3 className="panel-title">Mercados</h3>
				  </div>
				  <div className="panel-body">
				    <table className="table">
				    	<tbody>
				    	{
				    		this.props.exchanges.map(exchange => {
				    			return <tr key={exchange.name}>
				    						<th><a href={exchange.url} target="_blank" rel="nofollow noopener noreferrer">{exchange.display_name}</a></th>
				    						<td>{formatCurrency(parseFloat(exchange.symbols.BTCEUR.last).toFixed(2))}€</td>
				    						<td>{formatCurrency(parseFloat(exchange.symbols.BTCEUR.volume).toFixed(2))}€</td>
				    					</tr>
				    		})
				    	}
				    	</tbody>
				    </table>
				  </div>
				</div>
		)
	}
}

export default MercadosList
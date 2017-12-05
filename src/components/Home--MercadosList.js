import React, { Component } from 'react'

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
				    						<td>{exchange.symbols.BTCEUR.last}€</td>
				    						<td>{parseFloat(exchange.symbols.BTCEUR.volume).toFixed(2)}€</td>
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
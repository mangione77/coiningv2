import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="container-fluid text-center footer">
					<hr />
					<p>El precio del Bitcoin:<span className="footer--price">{((this.props.btcAverage+this.props.coindesk)/2).toFixed(2)}€</span></p>
					<p>Coining te trae los últimos precios y noticias sobre las criptomonedas</p>
					<p>¡Se aceptan sugerencias!</p>
					<hr />
					<p>Made by: <a href="https://www.twitter.com/pml_777" target="_blank" rel="noopener noreferrer">Pablo Mangione</a></p>
				</footer>
			</div>
		)
	}
}

export default Footer
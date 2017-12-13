import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import formatCurrency  from 'format-currency'

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar--main">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNavbarCollapse" aria-expanded="false">
			        &#9776;
			      </button>
			      <NavLink to="/" className="navbar-brand">El Precio del Bitcoin</NavLink>
			    </div>
			    <div className="collapse navbar-collapse" id="mainNavbarCollapse">
			      <ul className="nav navbar-nav navbar-right">
			        <li className="navbar-link"><a>Último precio:{' ' +formatCurrency(parseFloat(((this.props.btcAverage+this.props.coindesk)/2).toFixed(2)))}€</a></li>
			        <li className="navbar-link"><a>Últimas noticias</a></li>
			        <li className="navbar-link"><NavLink to="/graficos" className="navbar-link">Gráficos</NavLink></li>
			        <li className="navbar-link"><NavLink to="/about">About</NavLink></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

export default NavBar
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import formatCurrency  from 'format-currency'

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar--main">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <NavLink to="/" className="navbar-brand">Coining</NavLink>
			    </div>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    <ul className="nav navbar-nav navbar-left">
			    {	
			    	this.props.navTweet.length !== 0 
			    	? <li className="navbar-link"><a>Trending:{(this.props.navTweet.text).slice(0,80)}...</a></li>
			    	: <li className="navbar-link"><a>Trending:</a></li>
			    }
			    </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li className="navbar-link"><a>Último precio:{' ' +formatCurrency(parseFloat(((this.props.btcAverage+this.props.coindesk)/2).toFixed(2)))}€</a></li>
			        <li className="navbar-link"><a>Últimas noticias</a></li>
			        <NavLink to="/graficos" className="navbar-link">Gráficos</NavLink>
			        <NavLink to="/about"><a>About</a></NavLink>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

export default NavBar
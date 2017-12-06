import React, { Component } from 'react'

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
			      <a className="navbar-brand">Coining</a>
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
			        <li className="navbar-link"><a>Último precio:{' ' +((this.props.btcAverage+this.props.coindesk)/2).toFixed(2)}€</a></li>
			        <li className="navbar-link"><a>Últimas noticias</a></li>
			        <li className="dropdown">
			          <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gráficos <span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a>Todas las monedas</a></li>
			            <li><a>Porcentaje de cambio</a></li>
			            <li><a>Valuación histórica</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a>About</a></li>
			          </ul>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

export default NavBar
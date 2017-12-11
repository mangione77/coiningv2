import React, { Component } from 'react'
import { PanelGroup, Panel } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'

class Options extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col lg={4} lgOffset={4}>
						<PanelGroup>
			              <Panel collapsible header="Sobre el sitio" className="header-about" eventKey="1">Coining te trae los últimos precios y noticias sobre Bitcoin.</Panel>
			              <Panel collapsible header="Twitter" className="header-about" eventKey="2"><i className="fa fa-twitter"></i><small><a href="https://twitter.com/elpreciodelbtc">@elpreciodelbtc</a></small><br/></Panel>
			              <Panel collapsible header="Github" className="header-about" eventKey="3"><i className="fa fa-github"></i><small><a href="https://github.com/mangione77/coiningv2">Github</a></small></Panel>
			            </PanelGroup>
            		</Col>
            	</Row>
            </Grid>
		)
	}
}

export default Options
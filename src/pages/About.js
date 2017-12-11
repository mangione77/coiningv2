import React, { Component } from 'react'
import Options from '../components/About--Options'
import { Grid, Row, Col } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'

class About extends Component {
	render() {
		return (
				<Grid>
					<Row>
					<Col lg={12}>
					<Jumbotron className="about-jumbotron">
						<h1>Sobre <a href="http://localhost:3000">elpreciodelbtc</a></h1>
					</Jumbotron>	
					</Col>
					<Col lg={6}>
						<Options />
					</Col>
					</Row>
				</Grid>
		)
	}
}

export default About
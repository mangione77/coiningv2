import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import MonthBTCData from '../components/Graficos--MonthData'

class Graficos extends Component {
	render() {
		return (
				<Grid>
					<Row>
						<Col lg={4} lg={12} sm={12}>
							<div className="panel panel-default">
							 <div className="panel-heading">
							  <h3 className="panel-title">Valuación histórica</h3>
							  </div>
							  <div className="panel-body panel-grafico">
							  	<MonthBTCData month={this.props.month}/>
							  </div>
							</div>
						</Col>
					</Row>
				</Grid>	
		)
	}
}

export default Graficos
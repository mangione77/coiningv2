import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import LastPrice from '../components/Home--LastPrice'
import IndexesList from '../components/Home--IndexesList'
import MercadosList from '../components/Home--MercadosList'
import LatestNewsPanel from '../components/Home--LatestNewsPanel'
import LatestTweets from '../components/Home--LatestTweets'

class HomePage extends Component {

	render() {
		return (
			<div className="container">
			<Grid>
				<Row>
					<Col lg={4} sm={6} xs={12}>
						<LastPrice btcAverage={this.props.btcAverage} coindesk={this.props.coindesk} />
						<IndexesList btcAverage={this.props.btcAverage} coindesk={this.props.coindesk} />
						<MercadosList exchanges={this.props.exchanges} />
					</Col>
					<Col lg={8} sm={6} xs={12}>
						<LatestNewsPanel posts={this.props.posts} getPosts={this.props.getPosts} />
						<LatestTweets />
					</Col>
				</Row>
			</Grid>
			</div>
		)
	}
}

export default HomePage
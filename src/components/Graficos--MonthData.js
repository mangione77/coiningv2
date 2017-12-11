import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class MonthBTCData extends Component {
	constructor(props) {
		super(props)

		this.timestamp = []
		this.price = []

		this.state = {
			chartData:{
				labels:[],
				datasets:[{
					label:'Valuation',
					data:[]
				}]
			}
		}
	}

	componentWillMount() {
		this.props.month.map(day => {
			let formattedDate = new Date(day.x*1000).toString().replace('(Hora de verano romance)', '').replace('(Hora estándar romance)', '').replace('GMT', '').replace('+0100', '').replace('+0200', '')
			this.timestamp.push(formattedDate)
			this.price.push(parseFloat(day.y))
			this.setState({
				chartData:{
					labels:this.timestamp,
					datasets:[{
						data:this.price,
						backgroundColor: [
			                'rgba(255, 99, 132, 0.2)'
            			],
            			borderColor: [
			                'rgba(255,99,132,1)'
            			],
            			borderWidth: 1
					}]
				},

			})
		})
	}

	render() {
		return (<div>
					<Line
						data={this.state.chartData}
						width={100}
						height={100}
						options={{
							mantainAspectRatio:false,
							title:{
								display:true,
								text:'Precios BTC (1 mes)'
							}
						}}
					/>
				</div>)
	}
}

export default MonthBTCData
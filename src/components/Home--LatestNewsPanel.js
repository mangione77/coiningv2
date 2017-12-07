import React, { Component } from 'react'
import swal from 'sweetalert2'

class LatestNewsPanel extends Component {
	constructor(props) {
		super() 
			this.state = {
				numberOfResults:5,
				increment:5,
				max:15
			}
		
	}

	getPosts = () => {
		this.props.getPosts(this.state.numberOfResults)
	}

	moreNewsHandler = (event) => {
		event.preventDefault()
		if (this.state.numberOfResults < this.state.max) {
		this.setState({
			numberOfResults:this.state.numberOfResults+this.state.increment
		}, () => {
			this.props.getPosts(this.state.numberOfResults)
		})
		}
		else {
			swal('Has llegado al límite de consultas', 'Prueba otra vez más tarde', 'error')
		}
	}

	componentDidMount() {
		this.getPosts()
	}

	render() {
		return (
			<div className="panel panel-default">
				 <div className="panel-heading">
				  <h3 className="panel-title">Últimas noticias</h3>
				  </div>
				  <div className="panel-body">
				    <ul className="list-group">
					{
						this.props.posts.map(post => {
							return 	<li className="list-group-item latestnews--result" key={post._id}>
				   			<a href={post.link} rel="noopener" target="_blank">{post.title}</a><em className="text-muted latestnews--link">{post.from}</em><br />
				   		</li>
						})
					}
				    </ul>
				  </div>
				  <div className="panel-footer">
				  	<button className="btn btn-primary btn-block" onClick={this.moreNewsHandler}>Más noticias</button>
				  </div>
				</div>
		)
	}		
}

export default LatestNewsPanel
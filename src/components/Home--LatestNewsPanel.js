import React, { Component } from 'react'
import Posts_ApiService from '../services/Posts_ApiService'

class LatestNewsPanel extends Component {
	constructor(props) {
		super() 
			this.state = {
				posts:[],
				numberOfResults:5,
				increment:5
			}
		
	}

	getPosts = () => {
		Posts_ApiService.getPosts(this.state.numberOfResults)
			.then(response => {
				this.setState({
					posts:response.data
				})
			})
	}

	moreNewsHandler = (event) => {
		event.preventDefault()
		this.setState({
			numberOfResults:this.state.numberOfResults+this.state.increment
		}, () => {
			this.getPosts(this.state.numberOfResults)
		})
	}

	componentDidMount() {
		this.getPosts(this.state.numberOfResults)
	}

	componentDidUpdate() {
		console.log(this.state.posts)
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
						this.state.posts.map(post => {
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
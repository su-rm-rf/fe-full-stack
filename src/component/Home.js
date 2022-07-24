import React, { Component } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = Object.assign({},this.props)
	}
	componentDidMount() {
	}
	render() {
		return (
			<div>
				<h2>this is home page</h2>
				<Link to='about/login'>login</Link>
			</div>
		)
	}
}
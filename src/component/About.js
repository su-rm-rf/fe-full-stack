import React, { Component } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

export default class About extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h3>this is about page</h3>
				
				<Outlet />
			</div>
		)
	}
}
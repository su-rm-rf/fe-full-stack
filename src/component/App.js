import React, { Component } from 'react'
import { Routes, Route, NavLink, useRoutes } from 'react-router-dom'

import withRouterWrap from '../util/withRouterWrap'

import Home from './Home'
import List from './List'
import Detail from './Detail'
import About from './About'
import Error from './Error'
import Login from './Login'


import Routers from './Routers'

import '../css/cs.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			routers: [
				{
					path: '/', element: Home, auth: false
				},
				{
					path: 'list', element: List, auth: false
				},
				{
					path: 'list/:id', element: Detail, auth: false
				},
				{
					path: 'about', element: About, auth: true
				},
				{
					path: '*', element: Error, auth: false
				}
			]
		}
	}
	componentDidMount() {
	}
	render () {
		console.log(Routers)
						// <Route index element={<Home />} />
						// {
						// 	this.state.routers.map((item, index) => {
						// 		return item.auth ? 
						// 			<Route key={index} path={item.path} element={<Login />} />
						// 		:	<Route key={index} path={item.path} element={<item.element />} />
						// 	})
						// }
		return (
			<div>
				<nav className="header">
					<NavLink to='/'>home</NavLink>
					<NavLink to='/list'>list</NavLink>
					<NavLink to='/about'>about</NavLink>
				</nav>
				<section className="body">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='list' element={<List />} />
						<Route path='list/:id' element={<Detail />} />
						<Route path='*' element={<Error />} />
						<Route path='about'>
							<Route index element={<About />} />
							<Route path='login' element={<Login />} />
						</Route>
					</Routes>
				</section>
				<footer className="footer">
					footer
				</footer>
			</div>
		)
	}
}

export default withRouterWrap(App)

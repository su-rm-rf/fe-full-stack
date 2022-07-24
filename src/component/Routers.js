// import React from 'react'
// import { useRoutes } from 'react-router-dom'

// import withRouterWrap from '../util/withRouterWrap'

import Home from './Home'
import List from './List'
import Detail from './Detail'
import About from './About'
import Error from './Error'
import Login from './Login'

// function Routers() {
// 	let routes = [
// 		{
// 			path: '/',
// 			element: Home,
// 			children: []
// 		}
// 	]

// 	let element = useRoutes(routes)

// 	console.log(element)

// 	return <div>${ element }</div>
// }

// // export default withRouterWrap(Routers)

// export default Routers

export default [
	{
		path: '/',
		element: Home,
		children: []
	}
]
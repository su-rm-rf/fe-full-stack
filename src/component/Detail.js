import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

import withRouterWrap from '../util/withRouterWrap'

import People from './People'

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pp: [
				{ id: '001', name: '张三', age: '26' },
				{ id: '002', name: '李四', age: '32' },
				{ id: '003', name: '王五', age: '29' }
			]
		}
	}
	render() {
		let id = this.props.router.params.id, sp = {}
		this.state.pp.map((p) => {
			if (p.id === id) sp = p
		})
		console.log(this.props)
		return <People {...this.props.router} {...sp} />
	}
}

export default withRouterWrap(Detail)

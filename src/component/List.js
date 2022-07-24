import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Detail from './Detail'

export default class List extends Component {
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
	componentDidMount() {
	}
	render() {
		return (
			<ul className="user-list">
				<li>
					<span>ID</span>
					<span>用户名</span>
					<span>年龄</span>
				</li>
				{
					this.state.pp.map(pp => {
						return (
							<li key={pp.id}>
								<span>
									<Link to={{ pathname:`/list/${pp.id}` }}>
										{pp.id}
									</Link>
								</span>
								<span>{pp.name}</span>
								<span>{pp.age}</span>
							</li>
						)
					})
				}
			</ul>
		)
	}
}


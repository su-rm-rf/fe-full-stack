import React, { Component } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default class People extends Component {
	constructor(props) {
		super(props)
		this.handle = this.handle.bind(this)
	}
	handle() {
		// console.log(this.props)
		this.props.navigate('/')
	}
	render() {
		const params = this.props
		return <div onClick={this.handle}>welcome! name: {params.name} age: {params.age}</div>
	}
}

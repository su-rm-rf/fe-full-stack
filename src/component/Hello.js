import React, { Component } from 'react'

export default class Hello extends Component {
	render(props) {
		return (
			<div>welcome ! name: {this.props.name} sex: {this.props.sex}</div>
		)
	}
}
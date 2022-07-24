import React, { Component } from 'react'

export default class Login extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h3>this is login page</h3>
				<div>
					<label>用户名：</label>
					<input type="text" />
				</div>
				<div>
					<label>密码：</label>
					<input type="password" />
				</div>
				<div>
					<button>登录</button>
				</div>
			</div>
		)
	}
}
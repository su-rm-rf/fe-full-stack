import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default Component => {
	return props => {
		const [
			location, 
			navigate, 
			params
		] = [
			useLocation(), 
			useNavigate(), 
			useParams()
		]
		
		return (
			<Component {...props} router={{ location, navigate, params }} />
		)
	}
}

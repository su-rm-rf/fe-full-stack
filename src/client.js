import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './util/reportWebVitals'

import App from './component/App'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)

reportWebVitals()

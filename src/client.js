import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './util/reportWebVitals'

import App from './component/App'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

reportWebVitals()

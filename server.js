import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.config.js'

const [compiler, devServerOptions] = [
	Webpack(webpackConfig),
	{
		...webpackConfig.devServer, open: !true
	}
]

const server = new WebpackDevServer(devServerOptions, compiler)

const runServer = async () => {
	console.log('Starting Server...')
	await server.start()
	console.log(`Server Started on http://localhost:${ webpackConfig.devServer.port }`)
}

// const stopServer = () => {
// 	server.stopCallback(() => {
// 		console.log('Server stopped.')
// 	})
// }
// setTimeout(stopServer, 10000)

runServer()

import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
import path from 'path'

const app = express(), port = 3001;

const compiler = webpack(webpackConfig)

if(process.env.NODE_ENV === 'dev') {
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}))
  app.use(webpackHotMiddleware(compiler))

  app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../app/src/index.html')))
}

app.listen(port, (err) => console.log(err || port && `listening on ${port}`))
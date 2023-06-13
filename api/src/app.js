import express from 'express'
import cors  from 'cors'
import config from './config'
import productsRoutes from './routes/products.routes'
import morgan from 'morgan'



const server = express()

//settings
server.set('port', config.port || 3000)

//middlewares

server.use(cors())
server.use(morgan('dev'));
server.use(express.json())
server.use(express.urlencoded({extended:false}))

server.use('/products', productsRoutes)

// export default app
module.exports = server
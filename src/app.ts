import express from 'express'
import cors from 'cors'

import productRoutes from './routes/products.routes'
import categoriesRoutes from './routes/categories.routes'
import transactionRoutes from './routes/transaction.routes'
import balanceRoutes from './routes/balance.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(productRoutes)
app.use(categoriesRoutes)
app.use(transactionRoutes)
app.use(balanceRoutes)



export default app
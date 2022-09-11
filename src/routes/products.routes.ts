import { Router } from 'express'

import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products.controller'

const route = Router()

route.get('/api/products', getProducts)
route.get('/api/product/:id', getProduct)
route.patch('/api/product/:id', updateProduct)
route.post('/api/product', createProduct)
route.delete('/api/product/:id', deleteProduct)


export default route
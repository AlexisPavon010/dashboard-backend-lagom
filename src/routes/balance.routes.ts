import { Router } from 'express'
import { getBalance, getBalances, createBalances, updateBalances, deleteBalances } from '../controllers/balance.controller'

const route = Router()

route.get('/api/balances', getBalances)
route.get('/api/balance/:id', getBalance)
route.post('/api/balance/:id', createBalances)
route.patch('/api/balance/:id', updateBalances)
route.delete('/api/balance/:id', deleteBalances)

export default route
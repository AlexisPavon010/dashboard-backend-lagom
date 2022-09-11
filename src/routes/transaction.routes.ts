import { Router } from 'express'
import { createTransaction, deleteTransaction, getTransaction, getTransactions, updateTransaction } from '../controllers/transaction.controller'

const route = Router()

route.get('/api/transactions', getTransactions)
route.get('/api/transaction/:id', getTransaction)
route.patch('/api/transaction/:id', updateTransaction)
route.post('/api/transaction', createTransaction)
route.delete('/api/transaction/:id', deleteTransaction)


export default route
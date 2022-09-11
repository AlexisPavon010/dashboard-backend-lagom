import { RequestHandler } from "express";

import TransactionModel from '../models/transactions'

export const getBalances: RequestHandler = async (req, res) => {
  try {
    const transactions = await TransactionModel.find({})

    function calculateBalances() {
      const efectivo = transactions.filter(({ transactionStatusId }) => transactionStatusId == 1)
      const credito = transactions.filter(({ transactionStatusId }) => transactionStatusId == 2)

      let totalSales = 0;
      efectivo.map(({ value }: any) => {
        totalSales = totalSales + value
      })
      return {
        sales: 0,
        spendings: totalSales,
        utility: totalSales,
      }
    }



    res.status(200).send({
      ok: true,
      balanceReport: calculateBalances()
    });
  } catch (error) {
    res.status(404).send({ ok: false, message: 'balances not found' });
  }
}

export const getBalance: RequestHandler = async (req, res) => {
  try {
    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error)
    res.status(404).send({ ok: false, message: 'balance not found' });
  }
}

export const createBalances: RequestHandler = async (req, res) => {
  try {
    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error)
    res.status(500).send({ ok: false, error: 'an error occurred' });
  }
}

export const updateBalances: RequestHandler = async (req, res) => {
  try {
    res.status(200).send({ ok: true, message: 'Balances updated successfully' });
  } catch (error) {
    console.log(error)
    res.status(404).send({ ok: false, message: 'balances not found' });
  }
}


export const deleteBalances: RequestHandler = async (req, res) => {
  try {
    res.status(200).send({ ok: true, message: 'Balances deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(404).send({ ok: false, message: 'balances not found' });
  }
}
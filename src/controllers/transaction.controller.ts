import { RequestHandler } from "express";

import TransactionModel from '../models/transactions'

export const getTransactions: RequestHandler = async (req, res) => {
  try {
    const transaction = await TransactionModel.find({}).sort({ 'createdAt': 'desc' });
    res.status(200).send({ ok: true, data: transaction });
  } catch (error) {
    console.log(error)
    res.status(404).send({ ok: false, error: 'product not found' });
  }
}

export const getTransaction: RequestHandler = async (req, res) => {
  try {
    const transaction = await TransactionModel.findById(req.params.id);
    res.status(200).send({ ok: true, data: transaction });
  } catch (error) {
    console.log(error)
    res.status(404).send({ ok: false, error: 'product not found' });
  }
}

export const createTransaction: RequestHandler = async (req, res) => {
  // paymentTypeId 1 efectivo
  // paymentTypeId 2 tarjeta
  // paymentTypeId 3 transferencia
  // paymentTypeId 4 otro
  // transactionStatusId 1 efectivo
  // transactionStatusId 2 a credito
  // transactionTypeId

  try {
    const transaction = new TransactionModel(req.body);
    await transaction.save()
    res.status(200).send({ ok: true, data: transaction });
  } catch (error) {
    console.log(error)
    res.status(500).send({ ok: false, error: 'an error occurred' });
  }
}

export const updateTransaction: RequestHandler = async (req, res) => {
  console.log(req.params.id)
  try {
    const transaction = await TransactionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send({ ok: true, data: transaction });
  } catch (error) {
    console.log(error)
    res.status(404).send({ ok: false, error: 'an error occurred' });
  }
}

export const deleteTransaction: RequestHandler = async (req, res) => {
  try {
    await TransactionModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ ok: true, message: 'transaction deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).send({ ok: false, error: 'an error occurred' });
  }
}

import { RequestHandler } from "express";

import categoryModel from '../models/categories'

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const category = new categoryModel(req.body)
    await category.save()
    console.log(category)
    res.status(201).send({ ok: true, message: 'category create successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ ok: false, message: 'an error occurred' });
  }
}


export const getCategories: RequestHandler = async (req, res) => {
  try {
    const categories = await categoryModel.find({})
    res.status(200).send({ ok: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ ok: false, message: 'an error occurred' })
  }
}

export const deletedCategory: RequestHandler = async (req, res) => {
  try {
    await categoryModel.findByIdAndDelete(req.params.id)
    res.status(200).send({ ok: true, message: 'caregory deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ ok: false, message: 'caregory not found' })
  }
}
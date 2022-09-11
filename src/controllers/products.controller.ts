import { RequestHandler } from "express";

import categorySchema from "../models/categories";
import ProducteModel from '../models/products'

export const getProducts: RequestHandler = async (req, res) => {
  const products = await ProducteModel.find()
  res.status(200).send(products);
}

export const getProduct: RequestHandler = (req, res) => {
  ProducteModel.findById(req.params.id)
    .then((products) => {
      res.status(200).send(products)
    })
    .catch((error) => {
      console.log(`<-----${error}----->`)
      res.status(400).send({ erorr: 'product not found' });
    })

}

export const updateProduct: RequestHandler = (req, res) => {
  ProducteModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((error) => {
      console.log(error)
      res.status(400).send({ erorr: 'product not found' });
    })
}

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const product = new ProducteModel(req.body)
    const category = await categorySchema.findById(product.category_id)
    category?.products?.push(product.id)
    await product.save()
    await category?.save()
    res.status(200).send(product);
  } catch (error) {
    console.log(error)
    res.status(404).send({ error: 'product not found' })
  }
}

export const deleteProduct: RequestHandler = (req, res) => {
  ProducteModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send({ message: 'product deleted successfully' })
    })
    .catch((error) => {
      console.log(error)
      res.status(404).send({ error: 'product not found' });
    })
}
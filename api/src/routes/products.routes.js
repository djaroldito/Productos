import { Router } from "express";
import { getProducts, createNewProduct, getProductById, deleteById, count, update } from "../controllers/products.controllers";

const router = Router()

router.get('/', getProducts)

router.get('/count', count)

router.post('/', createNewProduct )

router.get('/:id', getProductById )

router.delete('/:id', deleteById )

router.put('/:id', update )

export default router

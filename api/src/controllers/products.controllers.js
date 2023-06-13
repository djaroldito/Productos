import { json } from 'express'
import {getConection, sql} from '../database/conection.js'
import pepes from '../database/querys.js'

export const getProducts = async (req, res)=>{

    try {
        const pool = await getConection()
        const result = await pool.request()
        .query(pepes.getAllProduct)
        res.status(200).json(result.recordset)
    } catch (error) {
        res.status(500).json(error.message)
    }
  
}

export const createNewProduct = async (req, res)=>{
    try {
        const { name, description, imageURL } = req.body
        let { quantity } = req.body
         if (!quantity){quantity = 1}
     
         if(!name || !description){
             return res.status(400).json('faltan datos')
         }
     
        const pool = await getConection()
        await pool.request()
        .input('name', sql.VarChar, name)
        .input('imageURL', sql.VarChar, imageURL)
        .input('description', sql.Text, description)
        .input('quantity', sql.Int, quantity)
        .query(pepes.createProduct)
        res.status(200).json({name, description, imageURL, quantity})
        
    } catch (error) {
        res.status(500).json(error.message)
    }
  
}

export const getProductById = async (req,res)=> {
    const {id} = req.params
    const pool = await getConection()
   const result = await pool.request()
    .input('id',id)
    .query(pepes.getProductById)
    res.status(200).json(['el producto es:', result.recordsets[0]])
  }
   
export const deleteById = async (req,res) => {
    const {id} = req.params
    const pool = await getConection()
    const result = await pool.request()
    .input('id',id)
    .query(pepes.deleteById)
    res.status(200).json(result)
}

export const count = async (req, res)=>{
    const pool = await getConection()
    const result = await pool.request()
    .query(pepes.count)
    res.status(200).json(['total:', result.recordset[0]['']])
}

export const update = async (req, res) => {
    const { name, description, quantity } = req.body
    const { id } = req.params
    if (!name || !description || !quantity ){return res.status(400).json('faltan datos')}
        
    const pool = await getConection()
    await pool.request()
    .input('name', sql.VarChar, name)
    .input('description', sql.Text, description)
    .input('quantity', sql.Int, quantity)
    .input('id', sql.Int, id)
    .query(pepes.update)

    res.status(200).json({name, description, quantity})


}

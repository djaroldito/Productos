

export default {
    getAllProduct: 'SELECT * FROM products',
    createProduct: 'INSERT INTO products (name, description, quantity, imageURL) VALUES (@name, @description, @quantity, @imageURL)',
    getProductById: 'SELECT * FROM products WHERE Id = @Id ',
    deleteById: 'DELETE  FROM products WHERE Id = @Id',
    count: 'SELECT COUNT(*) FROM products',
    update: 'UPDATE products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id'
}
//DELETE  FROM products WHERE Id = 1;
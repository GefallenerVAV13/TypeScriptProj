import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Начальные данные для товаров
let products = [

];

// GET запрос для получения всех товаров
app.get('/api/products', (req, res) => {
    res.json(products);
});

// POST запрос для добавления нового товара
app.post('/api/products', (req, res) => {
    const { title, description, price } = req.body;
    if (!title || !description || !price) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const newProduct = { id: products.length + 1, title, description, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
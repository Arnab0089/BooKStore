import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { title, author, published_Year } = req.body;

        if (!title || !author || !published_Year) {
            return res.status(400).send('Bad Request');
        }
        const existingBook = await Book.findOne({ title, author, published_Year });
        if (existingBook) {
            return res.status(409).send('Book already exists');
        }

        const book = await Book.create({ title, author, published_Year });

        return res.status(201).send(book);

    } catch (error) {
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/', async (req, res) => {
    try{
        const books = await Book.find({});

        if(books.length===0){
            return res.status(404).send('No books found');
        }

        return res.status(200).json({
            count:books.length,
            data:books
        });
        
    }catch(error){
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to get a book by ID
router.get('/:id', async (req, res) => {
    try{
        const {id}=req.params;
        const books = await Book.findById(id);

        return res.status(200).json(books);
        
    }catch(error){
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.put('/:id', async (req, res) => {
    try{
        
        const { title, author, published_Year } = req.body;

        if (!title || !author || !published_Year) {
            return res.status(400).send('Bad Request');
        }

        const {id}=req.params;
        const result = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if(!result){
            return res.status(404).send('Book not found');
        }
        return res.status(200).send({message:'Book updated successfully',data:result});
    }
    catch(error){
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delets a book by ID
router.delete('/:id', async (req, res) => {
    try{
        const {id}=req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).send('Book not found');
        }
        return res.status(200).send({message:'Book deleted successfully'});
    }
    catch(error){
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;

        

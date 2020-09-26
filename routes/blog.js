const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const { json } = require('body-parser');

//insert
router.post('/', async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const blog = new Blog({
        title: title,
        content: content,
    });

    try {
        const crate_blog = await blog.save();
        res.json(crate_blog);
    } catch (error) {
        res.send('Error ' + error);
    }
});

//get all data
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.send('Error ' + error);
    }
});

//Get single data
router.get('/:id', async (req, res) => {
    try {
        const blogs = await Blog.findById(req.params.id);
        res.json(blogs);
    } catch (error) {
        res.send('Error ' + error);
    }
});
//update
router.patch('/:id', async (req, res) => {
    try {
        const blogs = await Blog.findById(req.params.id);
        blogs.content = req.body.content;
        const updated_blog = await blogs.save();
        res.json(updated_blog);
    } catch (error) {
        res.send('Error ' + error);
    }
});
//delet
router.delete('/:id', async (req, res) => {
    try {
        const blogs = await Blog.findById(req.params.id);
        const remove_blog = await blogs.remove();
        res.json(remove_blog);
    } catch (error) {
        res.send('Error ' + error);
    }
});

module.exports = router;

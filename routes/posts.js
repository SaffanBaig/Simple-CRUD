const express = require('express');
const Post = require('../models/Post');

const router = express.Router();



router.get('/', async (req,res) => {
  try{
    const posts = await Post.find();
    res.json(posts)
  }catch(err){
    res.json({message: error})
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try{
    const savedPost = await post.save();
    res.json(savedPost);
  }catch(error){
    res.json({message: error})
  }

});

router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch(error){
    res.json({message: error})
  }
})

router.delete('/:postId', async (req, res) => {
  try{
    const removedPost = await Post.remove({_id: req.params.postId})
    res.json(removedPost);
  }catch(error){
    res.json(error)
  }
})

router.patch('/:postId', async (req, res) => {
  try{
    const updatedPost = await Post.updateOne ({_id: req.params.postId}, {$set: {title: req.body.title}})
    res.json(removedPost);
  }catch(error){
    res.json(error)
    console.log("HELLO")
  }
  
})
module.exports = router;
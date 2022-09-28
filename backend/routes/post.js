const express = require('express');

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

// route créer un post
router.post('/',auth,multer,postCtrl.createPost );

// route modifier un post
router.put('/:id',auth,multer,postCtrl.modifyPost );

// route supprimer un post
router.delete('/:id',auth,postCtrl.deletePost);

// route affichage du feed post
router.get('/',auth,postCtrl.getAllPost );

// route affichage d'un post
router.get('/:id',auth,postCtrl.getOnePost);

// route liker/disliker un post
router.post('/:id/like', auth, postCtrl.likePost);


module.exports = router; // exporte le router
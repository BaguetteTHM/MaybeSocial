const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  delete postObject._userId;
  const post = new Post({
      ...postObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });

  post.save()
  .then(() => { res.status(201).json({message: 'Post enregistré !'})})
  .catch(error => { res.status(400).json( error )})
};

exports.modifyPost = (req, res, next) => {
  const postObject = req.file ? {
      ...JSON.parse(req.body.post),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };
  console.log(postObject);

  delete postObject._userId;
  Post.findOne({_id: req.params.id})
      .then((post) => {
            console.log(post);
          if (post.userId != req.auth.userId) {
              res.status(403).json({ message : 'Modification non autorisée'});
          } else {
              Post.updateOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
              .then(() => res.status(200).json({message : 'Post modifié!'}))
              .catch(error => res.status(401).json({ error }));
              console.log(post);
          }
      })
      .catch((error) => {
          res.status(400).json({ error });
      });
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id})
      .then(post => {
          if (post.userId != req.auth.userId) {
              res.status(403).json({message: 'Supression non autorisée'});
          } else {
              const filename = post.imageUrl.split('/images/')[1];
              fs.unlink(`images/${filename}`, () => {
                  Post.deleteOne({_id: req.params.id})
                      .then(() => { res.status(200).json({message: 'Post supprimé !'})})
                      .catch(error => res.status(401).json({ error }));
              });
          }
      })
      .catch( error => {
          res.status(500).json({ error });
      });
};

exports.getAllPost = (req, res, next) => {
    Post.find()
      .then(Post => res.status(200).json(Post))
      .catch(error => res.status(400).json({ error }));
};

exports.getOnePost =  (req, res, next) => {
    Post.findOne({ _id: req.params.id })
      .then(Post => res.status(200).json(Post))
      
      
      .catch(error => res.status(404).json({ error }));
}

exports.likePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            // user sans like/dislike pour le post selectionné
            if(post.usersDisliked.indexOf(req.body.userId) == -1 && post.usersLiked.indexOf(req.body.userId) == -1) {
                if(req.body.like == 1) { //user like
                    post.usersLiked.push(req.body.userId);
                    post.likes += req.body.like;
                } else if(req.body.like == -1) { // user dislike
                    post.usersDisliked.push(req.body.userId);
                    post.dislikes -= req.body.like;
                };
            };
            // user annule like
            if(post.usersLiked.indexOf(req.body.userId) != -1 && req.body.like == 0) {
                const likesUserIndex = post.usersLiked.findIndex(user => user === req.body.userId);
                post.usersLiked.splice(likesUserIndex, 1);
                post.likes -= 1;
            };
            // user annule dislike
            if(post.usersDisliked.indexOf(req.body.userId) != -1 && req.body.like == 0) {
                const likesUserIndex = post.usersDisliked.findIndex(user => user === req.body.userId);
                post.usersDisliked.splice(likesUserIndex, 1);
                post.dislikes -= 1;
            }
            post.save();
            res.status(201).json({ message: 'OK' });
        })
        .catch(error => res.status(500).json({ error }));
};
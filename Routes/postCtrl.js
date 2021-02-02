//Imports

var express = require('express');
let Post = require('../models/').Post;
let User = require('../models').User;

let router = express.Router();

//Création d'un post
router.post('/post', async (req, res) => {
    let userPseudo = req.body.userPseudo;
    let title = req.body.title;
    let content = req.body.content;
    const newPost = await Post.create({
        userPseudo: userPseudo,
        title: title,
        content: content,
    });
    res.json(newPost)
    console.log('Post crée !')
});
//Récupération de tous les posts
router.get('/posts', async (req, res) => {
    Post.findAll({
            attributes: ['id', 'title', 'content'],
        })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({
            error
        }));
});

//Modifier un post
router.put('/post/:id', async (req, res) => {
    Post.findOne({
            attributes: ['id', 'title', 'content'],
            where: {
                id: req.params.id,
            }
        })
        .then(function (Post) {
            Post.update({
                    id: req.params.id,
                    title: req.body.title,
                    content: req.body.content

                })
                .then(() => res.status(200).json({
                    message: 'Post modifié !'

                }))
                .catch(error => res.status(400).json({
                    error
                }));
        })

        .catch(function (error) {
            res.status(404).json({
                'error': 'Pb avec la fonction'
            })
        })
})

//Supprimer un post
router.delete('/post/:id', async (req, res) => {
    Post.findOne({
            attributes: ['id', 'title', 'content'],
            where: {
                id: req.params.id
            }
        })
        .then(function (Post) {
            Post.destroy({
                    _id: req.params.id
                })
                .then(() => res.status(200).json({
                    message: 'Post supprimé!'
                }))
                .catch(error => res.status(400).json({
                    error
                }));
        })

        .catch(error => res.status(500).json({
            error
        }));
})

module.exports = router;
//Imports

var express = require("express");
let Post = require("../models/").Post;
var sessionStorage = require("sessionstorage");

let router = express.Router();

//Création d'un post
router.post("/post", async (req, res) => {
    console.log(req.body);
    let userPseudo = req.body.userPseudo;
    let title = req.body.title;
    let content = req.body.content;
    const newPost = await Post.create({
        userPseudo: userPseudo,
        title: title,
        content: content,
    });
    res.json(newPost);
    console.log("Post crée !");
});

//Récupération d'un post
router.get("/posts/:id", async (req, res) => {
    Post.findOne({
            attributes: ["id", "userPseudo", "title", "content"],
            where: {
                id: req.params.id,
            },
        })
        .then((post) => res.status(200).json(post))
        .catch((error) =>
            res.status(400).json({
                error,
            })
        );
});
//Récupération de tous les posts
router.get("/posts", async (req, res) => {
    Post.findAll({
            attributes: ["id", "userPseudo", "title", "content"],
        })
        .then((posts) => res.status(200).json(posts))
        .catch((error) =>
            res.status(400).json({
                error,
            })
        );
});

//Modifier un post
router.put("/post/:id", async (req, res) => {
    Post.findOne({
            attributes: ["id", "userPseudo", "title", "content"],
            where: {
                id: req.params.id,
            },
        })
        .then(function (Post) {
            //if la valeur stockée en userCtrl = user.pseudo = Post.userPseudo
            // récupération de pseudoUser de la session if dataPseudo = Post.userPseudo
            var dataPseudo = sessionStorage.getItem('dataPseudo');
            if (dataPseudo === Post.userPseudo) {
                Post.update({
                        id: req.params.id,
                        title: req.body.title,
                        content: req.body.content,
                    })
                    .then(() =>
                        res.status(200).json({
                            message: "Post modifié !",
                        })
                    )
                    .catch((error) =>
                        res.status(400).json({
                            message: "Vous ne pouvez pas modifier ce post",
                        })
                    );
            } else {
                res.status(403).json({
                    message: 'Pas autorisé'
                })
            }
        })
        .catch(function (error) {
            res.status(404).json({
                error: "Pb avec la fonction",
            });
        });
});

//Supprimer un post
router.delete("/post/:id", async (req, res) => {
    Post.findOne({
            attributes: ["id", "userPseudo", "title", "content"],
            where: {
                id: req.params.id,
            },
        })
        .then(function (Post) {
            // récupération de pseudoUser de la session if dataPseudo = Post.userPseudo
            var dataPseudo = sessionStorage.getItem('dataPseudo');
            if (dataPseudo === Post.userPseudo) {
                Post.destroy({
                        _id: req.params.id,
                    })
                    .then(() =>
                        res.status(200).json({
                            message: "Post supprimé!",
                        })
                    )
                    .catch((error) =>
                        res.status(400).json({
                            error,
                        })
                    )
            } else {
                res.status(403).json({
                    message: 'Pas autorisé'
                })
            }
        })
        .catch((error) =>
            res.status(500).json({
                error,
            })
        );
});

module.exports = router;
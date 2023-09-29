const router = require('express').Router();
const { Review, Movie } = require('../models');

router.get('/', async (req, res) => {
    try {
        const reviewData = await Movie.findAll({
            include: [
                // {
                //     model: User,
                //     attributes: ['name'],
                // },
                {
                    model: Review,
                    attributes: ['review_txt'],
                },
            ],
        });


    const reviews = reviewData.map((review) => review.get({ plain: true }));

    console.log(reviews);

    res.render('homepage', {
        reviews,
        logged_in: req.session.logged_in
    });
} catch (err) {
    res.status(500).json(err);
}
});



router.get('/', async (req, res) => {
    res.render('homepage', { 
        logged_in: req.session.logged_in
    });
});

router.get('/login', async (req, res) => {
    res.render('login', {logged_in: req.session.logged_in});
}); 

module.exports = router;
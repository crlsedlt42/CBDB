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
const length = reviews.length;
console.log(length);
    console.log(reviews);

    res.render('homepage', {
        length,
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
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
}); 

module.exports = router;
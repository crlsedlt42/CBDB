const router = require('express').Router();
const Review = require('../../models/review');

router.post('/', async (req, res) => {
    try {
       const { review_txt, movie_id } = req.body;
       const user_id = req.session.user_id;
       const reviewData = await Review.create({ review_txt, movie_id, user_id: user_id });
       res.status(200).json(reviewData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
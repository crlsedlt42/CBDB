const router = require('express').Router();
const Movie = require('../../models/movie');


router.post('/', async (req, res) => {
    try {
        const movieData = await Movie.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(movieData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
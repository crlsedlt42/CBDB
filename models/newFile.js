const axios = require('axios');
const { app } = require('.');

//sample route 
app.get('/api/movies', async (req, res) => {
    try {
        const apiKey = preocess.env.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg2NDQ3ODdmZGFlNTJhYzMyOTgzODE5MWU1MWM2MCIsInN1YiI6IjY1MTIzNmUwMjZkYWMxMDE4ZTIzNTI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTbOgHDcG - pkjgq3Dx7pZhA4BXFSuWMLpfFfjjfsYq4;
        const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=328644787fdae52ac329838191e51c60';
        ;
        const response = await axios.get(eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg2NDQ3ODdmZGFlNTJhYzMyOTgzODE5MWU1MWM2MCIsInN1YiI6IjY1MTIzNmUwMjZkYWMxMDE4ZTIzNTI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTbOgHDcG - pkjgq3Dx7pZhA4BXFSuWMLpfFfjjfsYq4, {
            params: {
                api_key: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg2NDQ3ODdmZGFlNTJhYzMyOTgzODE5MWU1MWM2MCIsInN1YiI6IjY1MTIzNmUwMjZkYWMxMDE4ZTIzNTI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTbOgHDcG-pkjgq3Dx7pZhA4BXFSuWMLpfFfjjfsYq4',
                language: 'en-US',
                page: 1,
            }
        });

        const movies = response.data.results;
        res.json(movies);
    } catch (error) {
        console.log('Error getting movie data', error);
        res.status(500).json({ error, 'Internal Server Error':  });
    }
});

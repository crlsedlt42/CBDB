const postReview = async (event) => {
    event.preventDefault();
    const review_txt = document.querySelector('#review').value.trim();
    const movie_id = document.querySelector('#movie').value.trim();
    if (review_txt && movie_id) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ review_txt, movie_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to post review');
        }
    }
}

document.querySelector('.review-form').addEventListener('submit', postReview);
const url = 'http://0.0.0.0:5001/api/v1/places_search';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({})
})
.then(response => response.json())
.then(data => {
  const placesSection = document.querySelector('section.places');
  data.forEach(place => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${place.name}</h2>
      <p>${place.description}</p>
      <p>Price: ${place.price_by_night}</p>
    `;
    placesSection.appendChild(article);
  });
})
.catch(error => {
  console.log(error);
});

const url = 'http://0.0.0.0:5001/api/v1/places_search';
const searchButton = document.querySelector('button#search-button');
const amenitiesCheckboxes = document.querySelectorAll('input[name="amenities"]');
const placesSection = document.querySelector('section.places');

searchButton.addEventListener('click', () => {
  const amenities = Array.from(amenitiesCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amenities })
  })
  .then(response => response.json())
  .then(data => {
    placesSection.innerHTML = '';
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
});

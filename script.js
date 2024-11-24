const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `pls give proper height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `pls give proper weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }
});

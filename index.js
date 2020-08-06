'use strict';

function getDogImage() {
  var num = $("#number-images").val()
  fetch('https://dog.ceo/api/breeds/image/random/' + num)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
 
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    
    responseJson.message.map(url => {
    return `<img src=${url} class="results-img">`
    }).join('')
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
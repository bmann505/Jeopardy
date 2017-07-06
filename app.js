$(document).ready(function() {
  $titleOne = $('.title-one');
  $titleTwo = $('.title-two');
  $titleThree = $('.title-three');
  $titleFour = $('.title-four');
  $titleFive = $('.title-five');
  $titleSix = $('.title-six');

  getCategories();
})

var categoryArray = [];
var randomArray = [];

function getCategories() {
  $.get('https://opentdb.com/api_category.php')
    .then(function(data) {
      for (var i = 0; i < data.trivia_categories.length; i++) {
        categoryArray.push(data.trivia_categories[i].id)
      }
      while (randomArray.length < 6) {
        var randomNum = Math.floor(Math.random() * 24);
        if (randomArray.indexOf(categoryArray[randomNum]) == -1) {
          randomArray.push(categoryArray[randomNum]);
        }
      }
      var urlOne = 'https://opentdb.com/api.php?amount=6&category=' + randomArray[0] + '&type=multiple';
      var urlTwo = 'https://opentdb.com/api.php?amount=6&category=' + randomArray[1] + '&type=multiple';
      var urlThree = 'https://opentdb.com/api.php?amount=6&category=' + randomArray[2] + '&type=multiple';
      var urlFour = 'https://opentdb.com/api.php?amount=6&category=' + randomArray[3] + '&type=multiple';
      var urlFive = 'https://opentdb.com/api.php?amount=6&category=' + randomArray[4] + '&type=multiple';
      var urlSix = 'https://opentdb.com/api.php?amount=6&category=' + randomArray[5] + '&type=multiple';
      $.get(urlOne)
        .then(function(dataOne) {
          var titleOne = dataOne.results[0].category;
          $titleOne.text(titleOne.replace("Entertainment:", ""));
        })
      $.get(urlTwo)
        .then(function(dataTwo) {
          var titleTwo = dataTwo.results[0].category;
          $titleTwo.text(titleTwo.replace("Entertainment:", ""));
        })
      $.get(urlThree)
        .then(function(dataThree) {
          var titleThree = dataThree.results[0].category;
          $titleThree.text(titleThree.replace("Entertainment:", ""));
        })
      $.get(urlFour)
        .then(function(dataFour) {
          var titleFour = dataFour.results[0].category;
          $titleFour.text(titleFour.replace("Entertainment:", ""));
        })
      $.get(urlFive)
        .then(function(dataFive) {
          var titleFive = dataFive.results[0].category;
          $titleFive.text(titleFive.replace("Entertainment:", ""));
        })
      $.get(urlSix)
        .then(function(dataSix) {
          var titleSix = dataSix.results[0].category;
          $titleSix.text(titleSix.replace("Entertainment:", ""));
        })
    })
}

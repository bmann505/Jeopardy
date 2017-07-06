$(document).ready(function() {
  $('.modal').modal();

  //  getCategories();
})

var categoryArray = [];
var randomArray = [];

function getCategories() {
  while (randomArray.length < 6) {
    var randomNumber = Math.floor(Math.random() * 18418);
    if (randomArray.indexOf(randomNumber) == -1) {
      randomArray.push(randomNumber);
    }
  }
  $.get('http://jservice.io/api/category?id=' + randomArray[0])
    .then(function(dataOne) {
      console.log(dataOne);
      $('.title-one').text(dataOne.title);
      $('.question-one').text(dataOne.clues[0].question);
      $('.question-seven').text(dataOne.clues[1].question);
      $('.question-thirteen').text(dataOne.clues[2].question);
      $('.question-nineteen').text(dataOne.clues[3].question);
      $('.question-twentyfive').text(dataOne.clues[4].question);
    })
  $.get('http://jservice.io/api/category?id=' + randomArray[1])
    .then(function(dataTwo) {
      $('.title-two').text(dataTwo.title);
      $('.question-two').text(dataTwo.clues[0].question);
      $('.question-eight').text(dataTwo.clues[1].question);
      $('.question-fourteen').text(dataTwo.clues[2].question);
      $('.question-twenty').text(dataTwo.clues[3].question);
      $('.question-twentysix').text(dataTwo.clues[4].question);
    })
  $.get('http://jservice.io/api/category?id=' + randomArray[2])
    .then(function(dataThree) {
      $('.title-three').text(dataThree.title);
      $('.question-three').text(dataThree.clues[0].question);
      $('.question-nine').text(dataThree.clues[1].question);
      $('.question-fifteen').text(dataThree.clues[2].question);
      $('.question-twentyone').text(dataThree.clues[3].question);
      $('.question-twentyseven').text(dataThree.clues[4].question);

    })
  $.get('http://jservice.io/api/category?id=' + randomArray[3])
    .then(function(dataFour) {
      $('.title-four').text(dataFour.title);
    })
  $.get('http://jservice.io/api/category?id=' + randomArray[4])
    .then(function(dataFive) {
      $('.title-five').text(dataFive.title);
    })
  $.get('http://jservice.io/api/category?id=' + randomArray[5])
    .then(function(dataSix) {
      $('.title-six').text(dataSix.title);
    })
}
getCategories();

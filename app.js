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
      $('.question-four').text(dataFour.clues[0].question);
      $('.question-ten').text(dataFour.clues[1].question);
      $('.question-sixteen').text(dataFour.clues[2].question);
      $('.question-twentytwo').text(dataFour.clues[3].question);
      $('.question-twentyeight').text(dataFour.clues[4].question);
    })
  $.get('http://jservice.io/api/category?id=' + randomArray[4])
    .then(function(dataFive) {
      $('.title-five').text(dataFive.title);
      $('.question-five').text(dataFive.clues[0].question);
      $('.question-eleven').text(dataFive.clues[1].question);
      $('.question-seventeen').text(dataFive.clues[2].question);
      $('.question-twentythree').text(dataFive.clues[3].question);
      $('.question-twentynine').text(dataFive.clues[4].question);

    })
  $.get('http://jservice.io/api/category?id=' + randomArray[5])
    .then(function(dataSix) {
      $('.title-six').text(dataSix.title);
      $('.question-six').text(dataSix.clues[0].question);
      $('.question-twelve').text(dataSix.clues[1].question);
      $('.question-eighteen').text(dataSix.clues[2].question);
      $('.question-twentyfour').text(dataSix.clues[3].question);
      $('.question-thirty').text(dataSix.clues[4].question);
    })
}
getCategories();

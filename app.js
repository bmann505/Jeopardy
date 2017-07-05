$(document).ready(function() {


})

function getCategories() {
  $.get('https://opentdb.com/api_category.php')
    .then(function(data) {
      var categoryArray = [];
      var randomArray = [];
      for (var i = 0; i < data.trivia_categories.length; i++) {
        categoryArray.push(data.trivia_categories[i].id)
      }
      while (randomArray.length < 6) {
        var randomNum = Math.floor(Math.random() * 24);
        if (randomArray.indexOf(categoryArray[randomNum]) == -1) {
          randomArray.push(categoryArray[randomNum]);
        }
      }
    })
}

getCategories();

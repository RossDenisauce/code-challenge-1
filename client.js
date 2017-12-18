$(document).ready(start);

var counter = 0;

function start(){
  console.log('In DOM');
  $('#generateBtn').on('click', addDiv);
  $('body').on('click', '#swapBtn',swapButton);
}

function addDiv(){
  counter++;
  var newDiv = $('<div></div>');
  newDiv.append('<p>' + counter + '</p>');
  newDiv.append('<button id="swapBtn">Swap</button>');
  newDiv.append('<button id="deletebtn">Delete</button>');
  $('body').append(newDiv);
}

function swapButton(){
  //$(this).closest('div').css('background-color', 'yellow');
  $(this).closest('div').toggleClass('yellow');
}

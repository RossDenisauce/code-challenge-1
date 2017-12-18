$(document).ready(start);

var counter = 0;

function start(){
  console.log('In DOM');
  $('#generateBtn').on('click', addDiv);
}

function addDiv(){
  counter++;
  var newDiv = $('<div></div>');
  newDiv.append('<p>' + counter + '</p>');
  newDiv.append('<button class="newBtns">Swap</button>');
  newDiv.append('<button class="newBtns">Delete</button>');

  $('body').append(newDiv);
}

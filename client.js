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
  $('body').append(newDiv);
}

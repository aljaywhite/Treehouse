//Treehouse Js


/*for ( var counter = 0; counter < 10; counter +=1 ) {
	document.write( counter );
}
*/

/*var html = '';

for ( var i = 1; i <= 100; i += 1 ) {
	html += '<div>' + i + '</div>';
}
document.write(html); */

/*
var html = '';

var rgbColor;

function randomRGB(){
  return Math.floor(Math.random() * 256 );
}

function randomColor(){
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message){
document.write(message);
}

for (var i = 0; i <= 250; i +=1 ){
rgbColor = randomColor();
html += '<div style="background-color:' + rgbColor + '"></div>';
} 






print(html);*/

/*var list = prompt('Add item to list.');

var listItems = list + ' ';

var myCart = [];

myCart.unshift( listItems );


document.write( myCart);*/

//HTML LIST BUILD


/*

var playList = [
  [ 'I did it my way', 'Frank Sinatra' ],
  [ 'Respect', 'Aretha Franklin' ],
  [ 'Imagine', 'John Lennon' ],
  [ 'Born to Run', 'Bruce Springsteen' ],
  [ 'Louie Louie', 'The Kingsmen' ],
  [ 'Maybellene', 'Chuck Berry' ]
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
	var listHTML = '<ol>';
	for ( var i = 0; i < songs.length; i += 1 ) {
		listHTML += '<li>' + songs[i][0] +  ' by ' +  songs[i][1] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

printSongs(playList);
*/

var questions = [
 ['How many days are in a week?', 7],
 ['How many minutes are in an hour?', 60],
 ['How many inches are in a foot?', 12]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
};

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
};

html = "You got " + correctAnswers + " right!";
html += '<h2> You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2> You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);






/*The Conditional Challenge Quiz
Who starred as Batman/Bruce Wayne in these films. 
Bonus. Name of film. 
By Alan White
*/



//Players start with zero.
var score = 0;

//Question 1

var answer1 = prompt("NAME THE ACTOR THAT PLAYED BATMAN! In this film Batman must stop Mr. Freeze and Poison Ivy from freezing Gotham City.");

if(answer1.toUpperCase() === 'GEORGE CLOONEY' || answer1.toUpperCase() === 'GEORGE' || answer1.toUpperCase() === 'CLOONEY' ) {
  score += 2;
} else if(score === 0){
 score = score;
} else {
 score -= 2; 
}

//Bonus 1

var bonus1 = prompt("BONUS! NAME THE MOVIE! Batman must stop Mr. Freeze and Poison Ivy from freezing Gotham City.");

if(bonus1.toUpperCase() === 'BATMAN AND ROBIN' || bonus1.toUpperCase() === 'BATMAN & ROBIN' ) {
  score += 2;
} else {
 score = score;
} 

//Question 2

var answer2 = prompt(" NAME THE ACTOR THAT PLAYED BATMAN! In this film Batman must stop a corrupt businessman and the grotesque Penguin from taking control of Gotham City.");

if(answer2.toUpperCase() === 'MICHAEL KEATON' || answer2.toUpperCase() === 'MICHAEL' || answer2.toUpperCase() === 'KEATON' ) {
  score += 2;
} else if(score === 0){
 score = score;
} else {
 score -= 2; 
}

//Bonus 2

var bonus2 = prompt("BONUS! NAME THE MOVIE! Batman must stop a corrupt businessman and the grotesque Penguin from taking control of Gotham City.");

if(bonus2.toUpperCase() === 'BATMAN RETURNS' || bonus2.toUpperCase() === 'RETURNS') {
  score += 2;
} else {
 score = score;
} 

//Question 3

var answer3 = prompt(" NAME THE ACTOR THAT PLAYED BATMAN! In this film Batman must battle Two-Face and The Riddler to keep them from taking control of Gotham City.");

if(answer3.toUpperCase() === 'VAL KILMER' || answer3.toUpperCase() === 'VAL' || answer3.toUpperCase() === 'KILMER' ) {
  score += 2;
} else if(score === 0){
 score = score;
} else {
 score -= 2; 
}

//Bonus 3

var bonus3 = prompt("BONUS! NAME THE MOVIE! Batman must battle Two-Face and The Riddler to keep them from taking control of Gotham City.");

if(bonus3.toUpperCase() === 'BATMAN FOREVER' || bonus3.toUpperCase() === 'FOREVER') {
  score += 2;
} else {
 score = score;
} 

//Question 4

var answer4 = prompt(" NAME THE ACTOR THAT PLAYED BATMAN! Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.");

if(answer4.toUpperCase() === 'BEN AFFLECK' || answer4.toUpperCase() === 'BEN' || answer4.toUpperCase() === 'AFFLECK' ) {
  score += 2;
} else if(score === 0){
 score = score;
} else {
 score -= 2; 
}

//Bonus 4

var bonus4 = prompt("BONUS! NAME THE MOVIE! Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.");

if(bonus4.toUpperCase() === 'BATMAN V SUPERMAN' || bonus4.toUpperCase() === 'BATMAN VS SUPERMAN' || bonus4.toUpperCase() === 'BATMAN V SUPERMAN: DAWN OF JUSTICE' || bonus4.toUpperCase() === 'BATMAN V SUPERMAN DAWN OF JUSTICE' || bonus4.toUpperCase() === 'DAWN OF JUSTICE') {
  score += 2;
} else {
 score = score;
} 

//Question 5

var answer5 = prompt(" NAME THE ACTOR THAT PLAYED BATMAN! In this film Batman must stop the Scarecrow and the League of Shadows from wreaking havoc in Gotham.");

if(answer5.toUpperCase() === 'CHRISTIAN BALE' || answer5.toUpperCase() === 'CHRISTIAN' || answer5.toUpperCase() === 'BALE' ) {
  score += 2;
} else if(score === 0){
 score = score;
} else {
 score -= 2; 
}

//Bonus 5

var bonus5 = prompt("BONUS! NAME THE MOVIE! Batman must stop the Scarecrom and the League of Shadows from wreaking havoc in Gotham.");

if(bonus5.toUpperCase() === 'BATMAN BEGINS' || bonus5.toUpperCase() === 'BEGINS') {
  score += 2;
} else {
 score = score;
} 
 alert('All finished! Click OK to see the results.');

 //Results posted to page.



document.write("<h2>RESULTS</h2>");

document.write("<h1> Total Score: " + score + "</h1>");

 document.write("<h3>1. In this film Batman must stop Mr. Freeze and Poison Ivy from freezing Gotham City.</h3><p>Actor: George Clooney | Bonus: Batman & Robin</p>");

document.write("<h3>2. In this film Batman must stop a corrupt businessman and the grotesque Penguin from taking control of Gotham City.</h3><p>Actor: Michael Keaton | Bonus: Batman Returns</p>");

document.write("<h3>3. In this film Batman must battle Two-Face and The Riddler to keep them from taking control of Gotham City.</h3><p>Actor: Val Kilmer | Bonus: Batman Forever</p>");

document.write("<h3>4. Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.</h3><p>Actor: Ben Affleck | Bonus: Batman V Superman</p>");

document.write("<h3>5. In this film Batman must stop the Scarecrow and the League of Shadows from wreaking havoc in Gotham.</h3><p>Actor: Christian Bale | Bonus: Batman Begins</p>");
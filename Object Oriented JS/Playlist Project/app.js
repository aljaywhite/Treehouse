var playlist = new Playlist();

var you = new Song("You", "Typhoid Beach", "2:48");
var humdrumDreams = new Song("Humdrum Dreams", "Typhoid Beach", "5:00");
var sleepwalker = new Song("Sleepwalker", "Typhoid Beach", "3:37");
var mountainBrother = new Song("Mountain Brother", "Typhoid Beach", "3:07");

playlist.add(you);
playlist.add(humdrumDreams);
playlist.add(sleepwalker);
playlist.add(mountainBrother);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}

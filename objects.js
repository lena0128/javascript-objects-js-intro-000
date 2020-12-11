var artistName = "Taylor Swift";
var playlist = {[artistName]: "Dark Horse"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

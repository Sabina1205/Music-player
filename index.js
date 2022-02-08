const musicContainer = document.getElementById('music-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songTitle = document.getElementById('song');

const audio = document.getElementById('audio');


// include songs you chose for the list
const songs = ['cant-stop', 'radioactive', 'ride'];

// start from 0 or any number
let songIndex = 0;

// function from below with actual songs and song index above
loadSong(songs[songIndex]);


// function for song details
function loadSong(song){
    songTitle.innerText = song;
    audio.src = `music/${song}.mp3`;
}


// function for play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    
    audio.play();
}


// function for pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}
        


// function for previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
    songIndex = song.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
   }


// function for next song
function nextSong() {
    songIndex++;
    if (songIndex > songTitle.length -1) {
            songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
    }


// event listener for play pause
playBtn.addEventListener('click', () => {
const isPlaying = musicContainer.classList.contains('play');

if (isPlaying) {
    pauseSong();
    } else {
        playSong();
    }
    });

   
// event listener for buttons previous and next
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// next song autoplay
audio.addEventListener('ended', () => {
    songIndex++;
    if (songIndex >= song.length) {
        songIndex = 0;
       
    }
    loadSong(songs[songIndex]);

    playSong();
});

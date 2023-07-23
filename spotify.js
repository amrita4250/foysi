console.log("Welcome to Spotify");
songIndex=0;
let audioElement = new Audio('fhd/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItem =Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementsByClassName('masterSongName');

//songnames
let song = [
    {songName: "Low- by sza", filePath: "fhd/1.mp3",coverPath: "fhd/1.jpg"},
    {songName: "Legion-by The Weekend", filePath: "fhd/2.mp3",coverPath: "fhd/2.jpg"},
    {songName: "Arms around you-xxxtentaction", filePath: "fhd/3.mp3",coverPath: "fhd/3.jpg"},
    {songName: "Pasoori-coke studio ", filePath: "fhd/4.mp3",coverPath: "fhd/4.jpg"},
    {songName: "remix-unknown", filePath: "fhd/5.mp3",coverPath: "fhd/5.jpg"},
    {songName: "heart wants what it wants-selena gomez", filePath: "fhd/6.mp3",coverPath: "fhd/6.jpg"},
    {songName: "it's you- Ali Gate", filePath: "fhd/2.mp3",coverPath: "fhd/7.jpg"},
]

songItem.forEach((element,i)=>{
    document.getElementsByTagName("img")[0].src = element.coverPath; // changed element to document nd song[i] to element
    document.getElementsByClassName("songName")[0].innerText = element.songName; // changed element to document nd song[i] to element
})

//This if for your reference

songItem.forEach((element,i)=>{
     element.getElementsByTagName("img")[0].src = song[i].coverPath; // 
     element.getElementsByClassName("songName")[0].innerText = song[i].songName;
 })


//handle play and pause button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
//seekbar 
progress = ((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',() => {
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.classList.remove('fa-circle-pause');
  element.classList.add('fa-circle-play');
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    audioElement.src = `fhd/${songIndex+1}.mp3`;
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    masterSongName.innerText = song[songIndex].songName; // removed +1
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
})
    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=song.length-1){ // actuall add -1 here
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `fhd/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName; // removed +1
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-pause]');
    masterplay.classList.add('fa-circle-play');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=song.length-1 // actuall add -1 here too
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `fhd/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName; // removed +1
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
})
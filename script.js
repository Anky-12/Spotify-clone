console.log("Welcome to Spotify");
//initalize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let mastePlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Shayad Song by Arijit Singh", filePath: "songs/1.mp3", coverPath: "covers/1.jpg.jpg"},
    {songName: "Apna Bana Le Song by Arijit Singh", filePath: "songs/2.mp3", coverPath: "covers/2.jpg.jpg"},
    {songName: "Tujhe Kitna Chahne Lage", filePath: "songs/3.mp3", coverPath: "covers/3.jpg.jpeg"},
    {songName: "Saware Song by Arijit Singh", filePath: "songs/4.mp3", coverPath: "covers/4.jpg.jpg"},
    {songName: "Kesariya by Arijit Singh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg.jpg"},
    {songName: "Jhoome Jo Pathan", filePath: "songs/6.mp3", coverPath: "covers/6.jpg.webp"},
    {songName: "Woh Din", filePath: "songs/7.mp3", coverPath: "covers/7.jpg.jpg"},
    {songName: "Khairiyat Song by Arijit Singh", filePath: "songs/8.mp3", coverPath: "covers/7.jpg.jpg"},
]
songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();
//handle play/pause click
mastePlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mastePlay.classList.remove('fa-play-circle');
        mastePlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        mastePlay.classList.remove('fa-pause-circle');
        mastePlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //updtae seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPLays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPLays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        mastePlay.classList.remove('fa-play-circle');
        mastePlay.classList.add('fa-pause-circle');
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    mastePlay.classList.remove('fa-play-circle');
    mastePlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    mastePlay.classList.remove('fa-play-circle');
    mastePlay.classList.add('fa-pause-circle');
})

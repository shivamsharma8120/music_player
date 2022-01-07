const title=document.getElementById('title')
const playBtn=document.getElementById('play')
const nextBtn=document.getElementById('next')
const prevBtn=document.getElementById('prev')
const audio=document.getElementById('audio')

const songs=['music1','music2','music3']

function getSong(song){
    title.innerHTML=song
    audio.src="music/"+song+'.mp3'
}

let i=1
getSong(songs[i])

function playSong(){
    audio.play()
}

function pauseSong(){
    audio.pause()
}

let t=1
playBtn.addEventListener('click',()=>{
    if(t==1){
        playSong()
        t=0
    }
    else{
        pauseSong()
        t=1
    }
})                                           

function next(){
    i++
    if(i>songs.length-1){
        i=0
    }

    getSong(songs[i])
    playSong()
}

function prev(){
    i--
    if(i<0){
        i=songs.length-1
    }
    getSong(songs[i])
    playSong()
}

prevBtn.addEventListener('click',prev)
nextBtn.addEventListener('click',next)
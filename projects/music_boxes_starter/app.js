//Create variables at the top
var keys = document.querySelectorAll(".key")
var notes = {
    ckey: document.querySelector("#cAudio"),
    dkey: document.querySelector("#dAudio"),
    ekey: document.querySelector("#eAudio"),
    fkey: document.querySelector("#fAudio"),
    gkey: document.querySelector("#gAudio"),
    akey: document.querySelector("#aAudio"),
    bkey: document.querySelector("#bAudio")
}

//Define functions in the middle
function playNote(key){
    console.log(key)
    notes[key].currentTime = 0
    notes[key].play()
}


//Call funtions and/or add Event Listeners
keys.forEach(function(key){
    key.addEventListener("click", function(){
        playNote(key.id)
    })
})

document.addEventListener('keydown', function(event){
    // console.log(event)
    if(event.key == "a"){
        if(document.querySelector("#ckey").classList[1] === "key_active") return
        playNote("ckey")
        document.querySelector("#ckey").classList.toggle("key_active");
    }
    if(event.key == "s"){
        if(document.querySelector("#dkey").classList[1] === "key_active") return
        playNote("dkey")
        document.querySelector("#dkey").classList.toggle("key_active");
    }
    if(event.key == "d"){
        if(document.querySelector("#ekey").classList[1] === "key_active") return
        playNote("ekey")
        document.querySelector("#ekey").classList.toggle("key_active");
    }
    if(event.key == "f"){
        if(document.querySelector("#fkey").classList[1] === "key_active") return
        playNote("fkey")
        document.querySelector("#fkey").classList.toggle("key_active");
    }
    if(event.key == "g"){
        if(document.querySelector("#gkey").classList[1] === "key_active") return
        playNote("gkey")
        document.querySelector("#gkey").classList.toggle("key_active");
    }
    if(event.key == "h"){
        if(document.querySelector("#akey").classList[1] === "key_active") return
        playNote("akey")
        document.querySelector("#akey").classList.toggle("key_active");
    }
    if(event.key == "j"){
        if(document.querySelector("#bkey").classList[1] === "key_active") return
        playNote("bkey")
        document.querySelector("#bkey").classList.toggle("key_active");
    }
})

document.addEventListener('keyup', function(event){
    if(event.key == "a"){
        document.querySelector("#ckey").classList.toggle("key_active");
    }
    if(event.key == "s"){
        document.querySelector("#dkey").classList.toggle("key_active");
    }
    if(event.key == "d"){
        document.querySelector("#ekey").classList.toggle("key_active");
    }
    if(event.key == "f"){
        document.querySelector("#fkey").classList.toggle("key_active");
    }
    if(event.key == "g"){
        document.querySelector("#gkey").classList.toggle("key_active");
    }
    if(event.key == "h"){
        document.querySelector("#akey").classList.toggle("key_active");
    }
    if(event.key == "j"){
        document.querySelector("#bkey").classList.toggle("key_active");
    }


})

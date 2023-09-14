
var player = document.getElementById("mp3-player")
// This function binds the player (or notice) to the track list area
function getPos(){
    // Needs to refresh position each time
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    tracks = document.getElementById("trackList").getBoundingClientRect();
    // Need to account for how big the
    // Viewport is to see when the list bottom hits the edge of the screen
    if(tracks.bottom-(window.innerHeight/1) < 0){
        player.setAttribute("style", "position: relative;")
    } 
    else{
        player.setAttribute("style", "position: fixed;")
    }
}
var opaque = false;
function transparencyImgs(){
    var imgs = document.getElementsByClassName("gallery-imgO")
    if(!opaque){
        var imgs = document.getElementsByClassName("gallery-imgT")
    }
    let len = imgs.length // Dynamic updating messes the length, not using i due to that
    for (let i = 0; i < len; i++) {
        if(!opaque){
            console.log(len)
            imgs[0].setAttribute("class", "gallery-imgO")
            continue;
        }
        else{
            imgs[0].setAttribute("class", "gallery-imgT")
        }
    }
    opaque = !opaque;
}

function changeBack(n){
    
    var src = ""
    // In hindsight, the audio player would have been more organized if written like this too
    switch(n){
        case(0): src = "background-image: url('https://f4.bcbits.com/img/a0845873233_65')" 
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(3,0,72, 0.6); color: red")
        break;
        case(1): src = "background-image: url('https://f4.bcbits.com/img/a1853095200_10.jpg')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(0,0,0, 0.6); color: gray")
        break;
        case(2): src = "background-image: url('https://ksr-ugc.imgix.net/assets/011/533/904/f58978f175eba8065d1b5afe4545876d_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463684109&auto=format&frame=1&q=92&s=11db7d50e2a3790bd8ad7ca0537eed92')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(50, 30, 0, 0.6); color: white")
        break;
        case(3): src = "background-image: url('https://cdn.cloudflare.steamstatic.com/steam/apps/540880/capsule_616x353.jpg?t=1561410603')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(255, 182, 193, 0.6); color: black")
        break;
        case(4): src = "background-image: url('https://cdn.cloudflare.steamstatic.com/steam/apps/623940/capsule_616x353.jpg?t=1623696220')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(0, 0, 50, 0.6); color: white")
        break;
        case(5): src = "background-image: url('https://static.wikia.nocookie.net/shipping/images/e/ea/Deltarune-poster.png/revision/latest?cb=20200303124652')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(0, 0, 0, 0.6); color: white")
        break;
        case(6): src = "background-image: url('https://img.itch.zone/aW1nLzE4OTM3MTUucG5n/original/a4bQ6r.png')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(0, 0, 0, 0.6); color: blue")
        break;
        case(7): src = "background-image: url('https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/l/little-town-hero-switch/hero')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(44,150,200,0.6); color: white")
        break;
        case(8): src = "background-image: url('https://img.itch.zone/aW1nLzMxNjcxODMucG5n/original/GoZsgO.png')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(39,54,22,0.6); color: lightgreen")
        break;
        case(9): src = "background-image: url('https://static.wikia.nocookie.net/mspaintadventures/images/4/42/HiveswapAct2SteamHeader.png/revision/latest?cb=20191031182139')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(20, 0, 70, 0.6); color: white")
        break;
        case(10): src = "background-image: url('https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(70, 0, 120, 0.6); color: yellow")
        break;
        case(11): src = "background-image: url('https://i.ytimg.com/vi/EWyFwDxgj04/hqdefault.jpg')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(0, 0, 0, 0.6); color: white")
        break;
        case(12): src = "background-image: url('https://i.ytimg.com/vi/njgcjGojRKk/maxresdefault.jpg')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(5, 140, 250, 0.6); color: white")
        break;
        case(13): src = "background-image: url('https://i.ytimg.com/vi/qFow8LkHtlU/maxresdefault.jpg')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(145,85,31, 0.6); color: white")
        break;
        case(14): src = "background-image: url('https://www.godisageek.com/wp-content/uploads/Pokemon-Horizons-Artwork.jpg')"
        document.getElementById("work-table").setAttribute("style", "background-color:rgba(10,70,200, 0.6); color: white;")
    }
    document.getElementById("works").setAttribute("style", src)
}

var shown = true
function toggleTable(){
    if(shown){
        document.getElementById("table-cont").setAttribute("style", "visibility: hidden")
        document.getElementById("hide").innerHTML = "[show table]"
        shown = false
    }
    else{
        document.getElementById("table-cont").setAttribute("style", "visibility: visible")
        document.getElementById("hide").innerHTML = "[hide table]"
        shown = true
    }
}
// From https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function openNav() {
document.getElementById("mySidebar").style.width = "15vw";
document.getElementById("main").style.marginLeft = "15vw";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= ".5vw";
}

dropped = false
function drop(){
    if(!dropped){
        document.getElementById('dropdown').setAttribute('style', 'max-height: 0')
    }
    else{
        document.getElementById('dropdown').setAttribute('style', 'max-height: 200px')
    }
    dropped = !dropped
}
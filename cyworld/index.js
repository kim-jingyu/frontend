const menuHome = () => {
    document.getElementById("menuHome").style = "color: black; background-color: white"
    document.getElementById("menuJukeBox").style = "color: white; background-color: #298eb5"
    document.getElementById("menuGame").style = "color: white; background-color: #298eb5"

    document.getElementById("contentFrame").setAttribute("src","home.html")
}

const menuJukeBox = () => {
    document.getElementById("menuJukeBox").style = "color: black; background-color: white"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5"
    document.getElementById("menuGame").style = "color: white; background-color: #298eb5"

    document.getElementById("contentFrame").setAttribute("src","jukebox.html")
}

const menuGame = () => {
    document.getElementById("menuGame").style = "color: black; background-color: white"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5"
    document.getElementById("menuJukeBox").style = "color: white; background-color: #298eb5"

    document.getElementById("contentFrame").setAttribute("src","game.html")
}
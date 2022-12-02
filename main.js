function adduser(){
    player_name=document.getElementById("USUARIO1").value;
    player_name2=document.getElementById("USUARIO2").value;
    localStorage.setItem("player1",player_name);
    localStorage.setItem("player2",player_name2);
    window.location="game.html"
}
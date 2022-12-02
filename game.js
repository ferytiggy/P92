player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"
document.getElementById("player1_score").innerHTML=player1_score+":"
document.getElementById("player2_score").innerHTML=player2_score+":"
document.getElementById("question").innerHTML="turno de preguntar"+player1_name;
document.getElementById("answer").innerHTML="turno de responder"+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualanswer=parseInt(number1) * parseInt(number2);

    question_number="<h4>" + number1 + "x" + number2 + "</h4>";
    input_box="<br>respuesta:<input type='text' id='input_check'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Comprobar=></button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = player1_name;
answer_trun = player2_name;
function check(){
    get_answer = document.getElementById("input_check").value;
    if(get_answer == actualanswer){
        if (answer_trun == player1_name) {
            player1_score++;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score++;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == player1_name){
        question_turn = player2_name;
        document.getElementById("question").innerHTML = "turno para preguntar" + question_turn;
    } else {
        question_turn = player1_name;
        document.getElementById("question").innerHTML = "turno para preguntar" + question_turn;
    }
    if(answer_trun == player2_name){
        answer_trun = player1_name;
        document.getElementById("answer").innerHTML = "turno para responder" + answer_trun;
    } else{
        answer_trun = player2_name;
        document.getElementById("answer").innerHTML = "turno para respoonder" + answer_trun;
    }
    document.getElementById("output").innerHTML = ""
}
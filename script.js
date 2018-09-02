document.querySelector("button").onclick = function(){

    // Validar as respostas
    var p1 = document.querySelector(".p1").elements["p1"].value;
    var p2 = document.querySelector(".p2").elements["p2"].value;
    var p3 = document.querySelector(".p3").elements["p3"].value;
    var result = 0;

    if(p1 == "" | p2 == "" | p3 == ""){
        document.querySelector(".result").innerText = "Por favor, responda todas as perguntas."
    }    
    else{
        if( p1 == "b" ){
            result += 1;
        }
        if( p2 == "b" ){
            result += 1;
        }
        if( p3 == "a" ){
            result += 1;
        }
        alert("Você acertou "+ result +"/3 perguntas do quiz.");
        window.location.reload();
    }

}
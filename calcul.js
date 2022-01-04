
a = 0;
b = 0;

function calcul(){
    a = 0;
    b = 0;
    max = 10;
    a = Math.floor(Math.random() * max);
    b = Math.floor(Math.random() * max);
}

function resultat(a,b){

    var reponse = document.querySelector('#nb').value;

    if(reponse == a + b)
        score ++;
    else
        score --;
}
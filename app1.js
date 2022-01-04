function connexion(){

    var nom = document.querySelector('#nom').value;
    var mdp = document.querySelector('#mdp').value;
    var cadreInfo = document.querySelector('#cadre-info');
    var info = document.querySelector('#info');
    

    if (nom !="a" | mdp!="b") {
        cadreInfo.hidden = false;
        info.innerHTML = 'non connecté';
        lien.hidden = true;
    }
    else{
        cadreInfo.hidden = false;
        info.innerHTML = 'connecté';
        lien.hidden = false;
    }
}
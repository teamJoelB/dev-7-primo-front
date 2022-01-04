// var nom = prompt('entrer votre nom');
// alert('Hello ' + nom);

function sendMessage() {
    // console.log('test envois ok');

    var nom = document.querySelector('#nom').value;
    var email = document.querySelector('#email').value;
    var msg = document.querySelector('#msg').value;

    var cadreInfo = document.querySelector('#cadre-info');
    var info = document.querySelector('#info');

    if (nom != '' && email != '' && msg != '') {
        info.innerHTML = 'Bonjour ' + nom + ' Merci de nous avoir contacter, nos service vont vous contacter sur : ' + email;
        cadreInfo.hidden = false;
    }

}


function calculAge(){
    var annee_naissance = document.querySelector('#annee_naissance').value;
    var cadreInfo = document.querySelector('#cadre-info');
    var cadreInfo2 = document.querySelector('#cadre-info2');
    var info = document.querySelector('#info');
    if ( 2022-annee_naissance>18){
        cadreInfo2.hidden = true;
        info.innerHTML = "Redirection vers la page demandée dans 3s (NSFW)";
        cadreInfo.hidden = false;
        const myTimeout = setTimeout(zoneInterdite, 3000);
    }else{
        info.innerHTML = "TU N'AS PAS L'AGE REQUIS, TU N'AS PAS HONTE ?!";
        cadreInfo2.hidden = false;
    }
}

function zoneInterdite(){
    window.location.replace("http://127.0.0.1:5500/dev-7-primo-front/zone-interdite.html");
}


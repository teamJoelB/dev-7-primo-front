function connexion(){

    var nom = document.querySelector('#nom').value;
    var mdp = document.querySelector('#mdp').value;
    var cadreInfo = document.querySelector('#cadre-info');
    var info = document.querySelector('#info');

    if (nom == 'a'| mdp == 'b') {
        info.innerHTML = 'Bonjour ' + nom + ' Merci de nous avoir contacter, nos service vont vous contacter sur : ' + email;
        cadreInfo.hidden = false;
    }
}
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
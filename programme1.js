

function calculTTC(){
    var montant = document.querySelector('#montant_article').value;
    var nombre = document.querySelector('#nombre_article').value;
    var tva = document.querySelector('#tva').value;

    var result = montant*nombre+(montant*nombre*tva/100);

    var cadreInfo = document.querySelector('#cadre-info');
    var info = document.querySelector('#info');

    if (montant != '' && nombre != '' && tva != '') {
        info.innerHTML = 'Montant TTC : ' + result.toFixed(2) + '€';
        cadreInfo.hidden = false;
    }
    
}
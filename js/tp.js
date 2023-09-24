function verif() {
    let select = document.getElementById('select');
    let selectElem = select.options[select.selectedIndex].value;
    const divP = document.getElementById('overflow1');
    const divS = document.getElementById('overflow2');

    switch (selectElem) {
      case 'Ordinateur':
              divP.innerHTML = 'PRIX UNITAIRE:   250 000 fcfa';
              divP.style.color ='black';
              divP.style.fontSize = '25px';
              divP.style.fontWeight = 'bold';
              divS.innerHTML = 'STOCK : 375';
              divS.style.color = 'blue';
              divS.style.fontSize = '22px';
        break;
        
        case 'Chargeurs':
              divP.innerHTML = 'PRIX UNITAIRE:   15 000 fcfa';
              divP.style.color ='black';
              divP.style.fontSize = '25px';
              divP.style.fontWeight = 'bold';
              divS.innerHTML = 'STOCK : 25';
              divS.style.color = 'blue';
              divS.style.fontSize = '22px';
        break;

        case 'Onduleurs':
              divP.innerHTML = 'PRIX UNITAIRE:   50 000 fcfa';
              divP.style.color ='black';
              divP.style.fontSize = '25px';
              divP.style.fontWeight = 'bold';
              divS.innerHTML = 'STOCK : 100';
              divS.style.color = 'blue';
              divS.style.fontSize = '22px';
        break;

        case 'DD externe':
              divP.innerHTML = 'PRIX UNITAIRE:   30 000 fcfa';
              divP.style.color ='black';
              divP.style.fontSize = '25px';
              divP.style.fontWeight = 'bold';
              divS.innerHTML = 'STOCK : 75';
              divS.style.color = 'blue';
              divS.style.fontSize = '22px';
        break;

        case 'Claviers':
              divP.innerHTML = 'PRIX UNITAIRE:   10 000 fcfa';
              divP.style.color ='black';
              divP.style.fontSize = '25px';
              divP.style.fontWeight = 'bold';
              divS.innerHTML = 'STOCK : 175';
              divS.style.color = 'blue';
              divS.style.fontSize = '22px';
        break;

      default:
        break;
    }













      // if (selectElem === 'Ordinateur') {
      //   const divP = document.getElementById('overflow1');
      //   const divS = document.getElementById('overflow2');
      //   divP.innerHTML = 'PRIX UNITAIRE:   25 0000 fcfa';
      //   divP.style.color ='red';
      //   divP.style.fontSize = '25px';
      //   divP.style.fontWeight = 'bold';
      //   divS.innerHTML = 'STOCK : 375';
      // } else if (selectElem === 'Chargeurs') {
      //   const divP = document.getElementById('overflow1');
      //   divP.innerHTML = 'PRIX UNITAIRE:   15 000 fcfa';
      //   divP.style.color ='red';
      //   divP.style.fontSize = '25px';
      //   divP.style.fontWeight = 'bold';
      // } else if (selectElem === 'Onduleurs') {
      //   const divP = document.getElementById('overflow1');
      //   divP.innerHTML = 'PRIX UNITAIRE:   50 000 fcfa';
      //   divP.style.color ='red';
      //   divP.style.fontSize = '25px';
      //   divP.style.fontWeight = 'bold';
      // } else if (selectElem === 'DD externe') {
      //   const divP = document.getElementById('overflow1');
      //   divP.innerHTML = 'PRIX UNITAIRE:   30 000 fcfa';
      //   divP.style.color ='red';
      //   divP.style.fontSize = '25px';
      //   divP.style.fontWeight = 'bold';
      // } else if (selectElem === 'Claviers') {
      //   const divP = document.getElementById('overflow1');
      //   divP.innerHTML = 'PRIX UNITAIRE:   10 000 fcfa';
      //   divP.style.color ='red';
      //   divP.style.fontSize = '25px';
      //   divP.style.fontWeight = 'bold';
      // }
      
}
// cette fonction ferme la popup indiquant que l'utilisateur doit entrer un stock suffissant;
function closePop() {
  const pop = document.getElementById('pop');
  const drop = document.getElementById('droping');
  const drop2 = document.getElementById('droping2');
  const drop3 = document.getElementById('droping3');
        pop.style.top = '-300px';  
        drop.style.visibility = 'visible';
        drop2.style.visibility = 'visible';
        drop3.style.visibility = 'visible';
}

// cette fonction ferme la popup indiquant que l'utilisateur doit entrer une valeur positive;
function popNegative() {
  const button_popNegative = document.getElementById('popNegative');
  const drop = document.getElementById('droping');
  const drop2 = document.getElementById('droping2');
  const drop3 = document.getElementById('droping3');
        button_popNegative.style.top = '-300px';
        drop.style.visibility = 'visible';
        drop2.style.visibility = 'visible';
        drop3.style.visibility = 'visible';
}
// cette fonction ferme la popup indiquant que l'utilisateur doit entrer une valeur positive;

// cette fonction calcule le prix totale de chaque article;
function calculPrix() {
   const qte = document.getElementById('qte');
   const qteValue = qte.value;
   let prixTotal = document.getElementById('prixTotal');
   let selects = document.getElementById('select');
   let selectElems = selects.options[selects.selectedIndex].value;

  if (qteValue < 0) {
    const popNegative = document.getElementById('popNegative');
    const drop = document.getElementById('droping');
    const drop2 = document.getElementById('droping2');
    const drop3 = document.getElementById('droping3');
          popNegative.style.top = '150px';
          drop.style.visibility = 'hidden';
          drop2.style.visibility = 'hidden';
          drop3.style.visibility = 'hidden';
  }

 else if (selectElems === 'Ordinateur' && qteValue > 375) {
// chaque fois que l'utilisateur entre un stock superieur au stock initial on affiche une popup STOCK INSUFFISANT
    const pop = document.getElementById('pop');
    const drop = document.getElementById('droping');
    const drop2 = document.getElementById('droping2');
    const drop3 = document.getElementById('droping3');
          pop.style.top = '150px';
          drop.style.visibility = 'hidden';
          drop2.style.visibility = 'hidden';
          drop3.style.visibility = 'hidden';
  }
  else if (selectElems === 'Ordinateur') {
        const pA = 250000 * qteValue;
        prixTotal.innerHTML = 'PRIX A PYER :  '+ pA + ' fcfa';
        prixTotal.style.fontSize = '25px';
        prixTotal.style.fontWeight = 'bold';
   }

  else if (selectElems === 'Chargeurs' && qteValue > 25) {
// chaque fois que l'utilisateur entre un stock superieur au stock initial on affiche une popup STOCK INSUFFISANT
    const pop = document.getElementById('pop');
    const drop = document.getElementById('droping');
    const drop2 = document.getElementById('droping2');
    const drop3 = document.getElementById('droping3');
        pop.style.top = '150px';
        drop.style.visibility = 'hidden';
        drop2.style.visibility = 'hidden';
        drop3.style.visibility = 'hidden';
}
  else if (selectElems === 'Chargeurs') {
      const pA = 15000 * qteValue;
        prixTotal.innerHTML = 'PRIX A PYER :  '+ pA + ' fcfa';
        prixTotal.style.fontSize = '25px';
        prixTotal.style.fontWeight = 'bold';
}

  else if (selectElems === 'Onduleurs' && qteValue > 100) {
// chaque fois que l'utilisateur entre un stock superieur au stock initial on affiche une popup STOCK INSUFFISANT
    const pop = document.getElementById('pop');
    const drop = document.getElementById('droping');
    const drop2 = document.getElementById('droping2');
    const drop3 = document.getElementById('droping3');
          pop.style.top = '150px';
          drop.style.visibility = 'hidden';
          drop2.style.visibility = 'hidden';
          drop3.style.visibility = 'hidden';
}
  else if (selectElems === 'Onduleurs') {
      const pA = 50000 * qteValue;
        prixTotal.innerHTML = 'PRIX A PYER :  '+ pA + ' fcfa';
        prixTotal.style.color = 'black';
        prixTotal.style.fontSize = '25px';
        prixTotal.style.fontWeight = 'bold';
} 

else if (selectElems === 'DD externe' && qteValue > 75) {
// chaque fois que l'utilisateur entre un stock superieur au stock initial on affiche une popup STOCK INSUFFISANT
  const pop = document.getElementById('pop');
  const drop = document.getElementById('droping');
  const drop2 = document.getElementById('droping2');
  const drop3 = document.getElementById('droping3');
        pop.style.top = '150px';
        drop.style.visibility = 'hidden';
        drop2.style.visibility = 'hidden';
        drop3.style.visibility = 'hidden';
        
        
}
else if (selectElems === 'DD externe') {
    const pA = 30000 * qteValue;
        prixTotal.innerHTML = 'PRIX A PYER :  '+ pA + ' fcfa';
        prixTotal.style.fontSize = '25px';
        prixTotal.style.fontWeight = 'bold';
} 

else if (selectElems === 'Claviers' && qteValue > 175) {
// chaque fois que l'utilisateur entre un stock superieur au stock initial on affiche une popup STOCK INSUFFISANT
  const pop = document.getElementById('pop');
  const drop = document.getElementById('droping');
  const drop2 = document.getElementById('droping2');
  const drop3 = document.getElementById('droping3');
        pop.style.top = '150px';
        drop.style.visibility = 'hidden';
        drop2.style.visibility = 'hidden';
        drop3.style.visibility = 'hidden';

}
else if (selectElems === 'Claviers') {
    const pA = 10000 * qteValue;
        prixTotal.innerHTML = 'PRIX A PYER :  '+ pA + ' fcfa';
        prixTotal.style.fontSize = '25px';
        prixTotal.style.fontWeight = 'bold';
} 
  
}
// cette fonction calcule le prix totale de chaque article;
   

// Ici on reinitialise le formulaire si l'utilisateur click sur le bouton annuler;

const myForm = document.getElementById('myForm');
      myForm.addEventListener('reset', function(){
        
      })
// Ici on reinitialise le formulaire si l'utilisateur click sur le bouton annuler;

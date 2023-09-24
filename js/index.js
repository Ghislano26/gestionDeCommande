// function change_valeur() {
//   let select = document.getElementById('select');
//   let selectElem = select.options[select.selectedIndex].value;
//   console.log('Vous avez choisi '+selectElem+ ' loisir');
// }
 
// function check_valeur() {
//   let inputCheck = document.getElementsByTagName('input');
//   let inputLenght = inputCheck.length;


//   for(let i = 0; i < inputLenght; i++){
//     if (inputCheck[i].type == 'checkbox' && inputCheck[i].checked) {
//       console.log('vous avez cocher la case a cocher ' + inputCheck[i].value);
//     }
//   }
// }


function Verification() {

//Recuperation de la valeur du nombre de loisir selectionne

  let select = document.getElementById('select');
  let selectElem = select.options[select.selectedIndex].value;

//Recuperation de la valeur du nombre de loisir selectionne
  
//Recuperation de tout les inputs et verification de type
  let inputCheck = document.getElementsByTagName('input');
  let inputLenght = inputCheck.length;

// cette boucle compte le nombre d'input de type checkbox cochés
  let som = 0;

  for(let i = 0; i < inputLenght; i++){
    if (inputCheck[i].type == 'checkbox' && inputCheck[i].checked) {
      som += 1;
    }
  }

// cette boucle compte le nombre d'input de type checkbox cochés

// Ici on verifie si le valeur du nombre de loisir choisi correspond aux nombre de checkbox cochés

  if (selectElem == som) {
    alert('Merci pour votre cooperation');
  }else{
    alert('Vous devez cocher ' +selectElem+ ' cases');
  }
// Ici on verifie si le valeur du nombre de loisir choisi correspond aux nombre de checkbox cochés
}






   


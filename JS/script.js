const es1 = 'palindroma';
const es2 = 'paridispari';


const choice = prompt(' Che esercizio vuoi visualizzare? digita: palindroma oppure: paridispari');

if (choice===es1) {

  const word = prompt('inserisci una parola o frase');

  let flag = palindrome(word);

  if (flag===true) {

    alert('la parola o frase è palindroma')
    
  } else {

    alert('la parola o frase non è palindroma')
    
  }


} else if(choice===es2) {


  const choicheGame = prompt('scegli: pari o dispari!');

  const number = parseInt(prompt('inserisci un numero 1 a 5!'));

  const pc = randomN();


  winner(number,pc,choicheGame);


  
} else{

  alert('nessun esercizio è stato selezionato!')

  
}

function palindrome(string) {
  let re = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(re, '');
  var len = string.length;
  for (let i = 0; i < len/2; i++) {
    if (string[i] !== string[len - 1 - i]) {
        return false;
    }
  }
  return true;
  
} 

function randomN() {

  return Math.round(Math.random()*4)+1;
  
}

function winner(num1,num2,str) {

  if (str=='pari' && (num1+num2)%2==0) {

    return alert(`hai scelto ${num1} il pc ${num2} la somma è ${parseInt(num1)+parseInt(num2)} e hai vinto! è uscito pari!`);

    
    
  } else if (str=='dispari' && (num1+num2)%2!=0) {
    
    
    return alert(`hai scelto ${num1} il pc ${num2} la somma è ${parseInt(num1)+parseInt(num2)} e hai vinto! è uscito dispari!`);

    
  } else {

    return alert(`hai scelto ${num1} il pc ${num2} la somma è ${parseInt(num1)+parseInt(num2)} e hai perso scegliendo ${str}!`);

  }


  
}
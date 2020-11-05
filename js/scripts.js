//  Bu pitsani pishirgancha ko'zlarim og'rib , qo'llarim kuyib ketti iltimos mehnatni qadrlanglar !!!

var infoPizza = [];
var elInfoForm = document.querySelector('.info-form');
var elBreadSelect = elInfoForm.querySelector('.breadSelect');
var elCheckboxes = elInfoForm.querySelectorAll('.inputCheckbox');
var adding = document.querySelector('.pizzaType');
var addPizzaTopDecoration =  document.querySelector(".pizzaTopDecoration")
var infoPizzaBread = [] ;
var infoAnothers = [];
var checkboxesChecked = [];
elInfoForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
})
elInfoForm.addEventListener('change' , function(evt){
  evt.preventDefault();
  infoPizza = [];
  checkboxesChecked = [];
  adding.innerHTML = "" ;
  addPizzaTopDecoration.innerHTML = "";
  
  var breadSelectValue = elBreadSelect.value.trim() ;
  
  infoPizza.unshift(breadSelectValue);
  
  var newType =  document.createElement('p');
  newType.classList.add('text-danger' , 'mb-0')
  newType.textContent = "  " + infoPizza;
  adding.appendChild(newType);
  
  
  for (var i=0; i < elCheckboxes.length; i++) {
    if (elCheckboxes[i].checked) {
      checkboxesChecked.push(elCheckboxes[i]);
      var newPizzaDecoration =  document.createElement('p');
      newPizzaDecoration.classList.add('mb-0' , 'text-danger');
      newPizzaDecoration.textContent = elCheckboxes[i].value;
      addPizzaTopDecoration.append(newPizzaDecoration);
      infoPizza.push(checkboxesChecked);
    }
  }
})
var resultBread = document.querySelector('.resultBread');
var resultBreadArray = [];
var secondBreadSelect = document.querySelector('.secondBreadSelect');
var breadsTypes = ['Ingichka' , 'Qalin' , `O'rtacha` , `Bo'lka non`] ; 
var inputsArray = ['Mol_gushti' , 'Tovuq_gushti' , 'Kurka_gushti' , 'Halol_kolbasa' , 'Gribok' , 'Greens'  ,'Pomidor' , 'Bodring' , 'Zaytun' , 'Addings' ];
var inputBox = document.querySelector('.inputBox');
var resultAddingTop = document.querySelector('.resultAddingTop');
var resultAddingArray = [];
//bread

for(i=1; i<= breadsTypes.length ; i++){
  var newBreadOption =  document.createElement('option');
  newBreadOption.textContent = breadsTypes[ i - 1 ];
  newBreadOption.value = breadsTypes[ i - 1 ];
  secondBreadSelect.append(newBreadOption) ; 
}
secondBreadSelect.addEventListener('change' , function(){
  resultBread.innerHTML = "";
  resultsArray = [];
  var newBreadResult =  document.createElement('p');
  newBreadResult.classList.add('mb-0')
  resultsArray.push(secondBreadSelect.value);
  newBreadResult.textContent = resultsArray;
  resultBread.append(newBreadResult);
})

//bread



for(i = 0 ; i < inputsArray.length ; i++){
  var newBoxForCheckbox =  document.createElement('div');
  newBoxForCheckbox.classList.add('form-check');
  inputBox.append(newBoxForCheckbox);
  var newInputForCheckbox =  document.createElement('input');
  newInputForCheckbox.setAttribute('type' , "checkbox")  ; 
  newInputForCheckbox.id = inputsArray[i];
  newInputForCheckbox.value = inputsArray[i] ;
  newInputForCheckbox.classList.add('form-check-input');
  newBoxForCheckbox.appendChild(newInputForCheckbox);
  var newLabelForCheckbox =  document.createElement('label');
  newLabelForCheckbox.setAttribute('for' , inputsArray[i]);
  newLabelForCheckbox.textContent = inputsArray[i] ;
  newBoxForCheckbox.appendChild(newLabelForCheckbox);
  
  
  newInputForCheckbox.addEventListener('change' , function(){
    resultAddingTop.innerHTML = "";
    if (this.checked){
      resultAddingArray.push(this.value);
      var newResultAdding = document.createElement('p');
      newResultAdding.textContent = resultAddingArray.join(' , ');
      resultAddingTop.appendChild(newResultAdding);
    }else{
      resultAddingArray.pop(this.value);
      var newResultAdding = document.createElement('p');
      newResultAdding.textContent = resultAddingArray.join(' , ');
      resultAddingTop.appendChild(newResultAdding);
    }
  })
  
}



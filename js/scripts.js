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

//ustoz aytgan usullari bo'yicha
//elementlarni tanlab oldim
var resultBread = document.querySelector('.resultBread');
var resultBreadArray = [];
var secondBreadSelect = document.querySelector('.secondBreadSelect');
//nonning tiplari ingichka ,qalin ,hokazo ...
var breadsTypes = ['Ingichka' , 'Qalin' , `O'rtacha` , `Bo'lka non`] ; 

// input typr checkboxlarning arrayi

var inputsArray = [`Mol go'shti` , `Tovuq go'shti` , `Kurka go'shti` , `Halol kolbasa` , `Qo'ziqorin` , `Ko'katlar`  ,`Pomidor` , `Bodring` , `Zaytun` , `Qo'shimchalar` ];
var inputBox = document.querySelector('.inputBox');
var resultAddingTop = document.querySelector('.resultAddingTop');

// inputlarning bo'sh yani natijalar solinadigan arryi

var resultAddingArray = [];
//bread

//non arrayiga mos ravishda elementlar yaratib olib ularni htmlga create qilamiz
for(i=1; i<= breadsTypes.length ; i++){
  //create new option
  var newBreadOption =  document.createElement('option');
  //option textcontent
  newBreadOption.textContent = breadsTypes[ i - 1 ];
  //option value
  newBreadOption.value = breadsTypes[ i - 1 ];
  // append option to select
  secondBreadSelect.append(newBreadOption) ; 
}
// select addEventListener 
secondBreadSelect.addEventListener('change' , function(){
  // result breadtype innerhtml to ""
  resultBread.innerHTML = "";
  // resultarray to empty
  resultsArray = [];
  // create new result
  var newBreadResult =  document.createElement('p');
  // classlist add mb-0
  newBreadResult.classList.add('mb-0');
  // push value to result bread's array
  resultsArray.push(secondBreadSelect.value);
  // resulttextcontent to resultsArray
  newBreadResult.textContent = resultsArray;
  // append to result bread 
  resultBread.append(newBreadResult);
})
//bread

//for bilan inputlarni yaratib oldik
for(i = 0 ; i < inputsArray.length ; i++){
  // create div classname formcheck 
  var newBoxForCheckbox =  document.createElement('div');
  newBoxForCheckbox.classList.add('form-check');
  // append to inputBox
  inputBox.append(newBoxForCheckbox);
  // create label newLabelForCheckbox
  var newLabelForCheckbox =  document.createElement('label');
  // set textcontent classlist and append to div
  newLabelForCheckbox.textContent = inputsArray[i] ;
  // newLabelForCheckbox.setAttribute('for' , inputsArray[i]);
  newLabelForCheckbox.classList.add('mx-3' , 'd-flex' , 'align-items-center' );
  newBoxForCheckbox.appendChild(newLabelForCheckbox);
  // create input type checkbox and set classlist value and append to label
  var newInputForCheckbox =  document.createElement('input');
  
  newInputForCheckbox.setAttribute('type' , "checkbox")  ;
  newInputForCheckbox.classList.add('mx-2' , 'order-back');
  newInputForCheckbox.value = inputsArray[i] ;
  
  newLabelForCheckbox.appendChild(newInputForCheckbox);
  // inputga quloq solamiz
  newInputForCheckbox.addEventListener('change' , function(){
    // result htmlni tozalaymiz
    resultAddingTop.innerHTML = "";
    // if bn ishlaymiz
    if (resultAddingArray.includes(this.value)){
      // bosilgan checkboxni indexini aniqlaymiz
      var checkboxIndex = resultAddingArray.indexOf(this.value);
      // ro'yhatdan olib tashlaymiz
      resultAddingArray.splice(checkboxIndex , 1);
      // createElement p qilamiz
      var newResultAdding = document.createElement('p');
      // textContent ini tog'irlaymiz
      newResultAdding.textContent = resultAddingArray.join(' , ');
      // append qilamiz
      resultAddingTop.appendChild(newResultAdding);
    }else{
      // aks holda ro'yhatga qo'shib tepadagi holatni takrorlaymiz
      resultAddingArray.push(this.value);
      var newResultAdding = document.createElement('p');
      newResultAdding.textContent = resultAddingArray.join(' , ');
      resultAddingTop.appendChild(newResultAdding);
    }
  })
}



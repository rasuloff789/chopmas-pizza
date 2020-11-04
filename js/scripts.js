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







"use strict";var _selectors=require("./selectors"),_validators=require("./validators");_selectors.submitBtn.addEventListener("click",(function(a){a.preventDefault();try{(0,_validators.firstNameValidation)(_selectors.firstName),(0,_validators.lastNameValidation)(_selectors.lastName),(0,_validators.emailValidation)(_selectors.email),(0,_validators.passwordValidation)(_selectors.password)}catch(a){(0,_validators.showMessage)(a.input,a.message)}}));
//# sourceMappingURL=app.js.map
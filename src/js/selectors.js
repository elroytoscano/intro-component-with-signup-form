//  element selection
const submitBtn = document.querySelector('#submitBtn')
const form = document.querySelector('#signup-form')

//  element value
let firstName = form.elements['name']
let lastName = form.elements['last-name']
let email = form.elements['email']
let password = form.elements['password']

export { submitBtn, firstName, lastName, email, password }

import { email, firstName, lastName, password, submitBtn } from './selectors'
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  passwordValidation,
  showMessage,
} from './validators'

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  try {
    firstNameValidation(firstName)
    lastNameValidation(lastName)
    emailValidation(email)
    passwordValidation(password)
  } catch (error) {
    showMessage(error.input, error.message)
  }
})

import {
  EMAIL_INCORRECT,
  EMAIL_REQUIRED,
  LAST_NAME_REQUIRED,
  NAME_REQUIRED,
  PASSWORD_REQUIRED,
} from './constants'
import CustomError from './CustomError'

export const showMessage = (input, message) => {
  const msg = input.parentNode.querySelector('.validation-text')
  const child = msg.querySelector('.text-content')
  child.innerText = message
  msg.classList.add('show')
  const icon = input.parentNode.querySelector('.validation-icon')
  icon.classList.add('show')
}

export const checkValue = (input, message) => {
  if (input.value.trim() === '' || input.value === '') {
    throw new CustomError(message, input)
  }
}

export const firstNameValidation = (input) => {
  checkValue(input, NAME_REQUIRED)
}

export const lastNameValidation = (input) => {
  checkValue(input, LAST_NAME_REQUIRED)
}

export const emailValidation = (input) => {
  checkValue(input, EMAIL_REQUIRED)

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailRegex.test(email)) {
    showMessage(input, EMAIL_INCORRECT)
  }
}

export const passwordValidation = (input) => {
  checkValue(input, PASSWORD_REQUIRED)
}

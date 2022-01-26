class CustomError extends Error {
  constructor(message, input) {
    super(message)
    this.message = message
    this.input = input
  }
}

export default CustomError

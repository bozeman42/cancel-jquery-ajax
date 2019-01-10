const input = document.querySelector('input')
const output = document.querySelector('#response')

let inputCall = null

const serviceObj = {
  inputCall: null,
  callService: () => {
    if (this.inputCall) {
      this.inputCall.abort()
    }
    this.inputCall = $.ajax({
      type: 'POST',
      url: 'http://localhost:5000/inputCall',
      data: {
        data: input.value
      },
      success: response => {
        output.textContent = response.data
        this.inputCall = null
      }
    })
  }
}

input.addEventListener('input', serviceObj.callService)
const input = document.querySelector('input')
const output = document.querySelector('#response')

let inputCall = null

const callService = () => {
  if (inputCall) {
    inputCall.abort()
  }
  inputCall = $.ajax({
    type: 'POST',
    url: 'http://localhost:5000/inputCall',
    data: {
      data: input.value
    },
    success: function(response) {
      console.log('success')
      output.textContent = response.data
      inputCall = null
    }
  })
}

input.addEventListener('input', callService)
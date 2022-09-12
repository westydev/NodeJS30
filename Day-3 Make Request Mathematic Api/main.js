const axios = require('axios')


 axios.post('http://localhost:3000/add', {
 num: 1,
 num2: 3
})
  .then(function (response) {
     console.log(response.data)
  })

      axios.post('http://localhost:3000/sour', {
 num: 5,
 num2: 2
})
  .then(function (response) {
     console.log(response.data)
  })

      axios.post('http://localhost:3000/multiply', {
 num: 5,
 num2: 3
})
  .then(function (response) {
     console.log(response.data)
  })





   axios.post('http://localhost:3000/divide', {
 num: 4,
 num2: 2
})
  .then(function (response) {
     console.log(response.data)
  })



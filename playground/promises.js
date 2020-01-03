const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data')
    resolve('This will be ignored')
  }, 1500)
})

console.log('a')

promise.then(data => {
  console.log('1', data)
})
promise.then(data => {
  console.log('2', data)
})
promise.then(data => {
  console.log('3', data)
})

console.log('B')

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('HAHAHAHA REJECTED')
  }, 1500)
})

promise2
  .then(data => {
    console.log('1', data)
  })
  .catch(ex => {
    console.log(ex)
  })

promise2.then(
  data => {
    console.log('2', data)
  },
  ex => {
    console.log(ex)
  }
)

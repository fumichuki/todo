// let msg = ''

// // #1
// console.log('#1')
// msg = msg + 'Hello '

// // #2
// setTimeout(() => { // 時間のかかる処理
//   console.log('#2')
//   msg = msg + "I'm "

// //   0.5秒
// }, 500)

// // #3
// console.log('#3')
// msg = msg + 'Jeccy'

// // #4
// console.log('#4')
// console.log(msg)


// new Promise() のコールバック内で resolve() を実行すれば then() メソッドのコールバックが呼ばれ、 reject() を実行すれば catch() メソッドが呼ばれるということです。
let promise = new Promise((resolve, reject) => { // #1
  console.log('#1')
  resolve('Hello ')
})

promise.then((msg) => { // #2
  return new Promise((resolve, reject) => {
      console.log('#2')
      resolve(msg + "I'm ")
  })
}).then((msg) => { // #3
  console.log('#3')
  // 
  return msg + 'Jeccy.'
}).then((msg) => { // #4
  console.log('#4')
  console.log(msg)
}).catch(() => { // エラーハンドリング
  console.error('Something wrong!')
})
// const lista = ['lucia', 'iago', 'cris', 'monica', 'siri']
// var qt = 0
// lista.forEach(e => {
//     console.log(e + 'a')
//     qt++
// })

// console.log(qt)



const lista = [...Array(500).keys()]
console.time("for")

for (let i = 0; i < lista.length; i++){
    // console.log(lista[i])
}
console.timeEnd("for")

console.time("forEach")
lista.forEach(e => {
    // console.log(e)
})

console.timeEnd("forEach")


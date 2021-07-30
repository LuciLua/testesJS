window.onload = () => {
var keys = document.getElementById('keys')
var random = document.getElementById('random')
var result = document.getElementById('result')

document.querySelector('body').addEventListener('keydown', function(e){

    let opcoes = ['q','w','e','r']

    for (let i = 0; i < opcoes.length; i++){
        console.log(i+1, opcoes[i])
        console.log((Math.random() * 10).toFixed())
    }

    let shuffled = opcoes
    .map( (value) => ({ value, sort: Math.random() }) )
    .sort( (a, b) => a.sort - b.sort)
    .map( ({ value }) => value)

    random.textContent = shuffled[0] //computer

    keys.textContent=(e.key) //user 

    if (e.key == shuffled[0]){
        result.innerHTML='❤'
    }
    else {
        result.innerHTML='☠'
    }

    })
}


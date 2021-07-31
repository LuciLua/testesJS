window.onload = () => {
var keys = document.getElementById('keys')
var random = document.getElementById('random')
var ram = ram

setInterval( function(){
    let opcoes = ['q','w','e','r']
    
    let shuffled = opcoes
    .map( (value) => ({ value, sort: Math.random() }) )
    .sort( (a, b) => a.sort - b.sort)
    .map( ({ value }) => value)

    random.textContent = shuffled[0]
    ram =  shuffled[0]
    } , 900)

document.querySelector('body').addEventListener('keydown', function(e){
    keys.textContent=(e.key) //user 

    var result = document.getElementById('result')

    if (e.key == ram){
        result.innerHTML='❤'
    }
    else {
        result.innerHTML='☠'
    }


})
}

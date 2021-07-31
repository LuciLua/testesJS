window.onload = () => {

document.querySelector('body').addEventListener('keydown', function(e){ //ouve press
keys.textContent=(e.key) //user 
keyPress = e.key //user press...
})

var keys = document.getElementById('keys')
var random = document.getElementById('random')

var userPts = document.getElementById('userPts')
var compPts = document.getElementById('compPts')

var result = document.getElementById('result')

var ram = ram
var keyPress = keyPress

var userWin = 0
var compWin = 0

var user = 0 
var comp = 0

var time = 500

setInterval( function(){ // sorteia letra
    let opcoes = ['q', 'w', 'e', 'r']
    
    let shuffled = opcoes
    .map( (value) => ({ value, sort: Math.random() }) )
    .sort( (a, b) => a.sort - b.sort)
    .map( ({ value }) => value)

    random.textContent = shuffled[0]
    ram =  shuffled[0]
    }, time)

setInterval( function(){ // ve se a digitada é a pedida
    if (keyPress == ram){
        result.innerHTML='❤'
        userWin = 1
        compWin = 0
    }
    else {
        result.innerHTML='☠'
        userWin = 0
        compWin = 1
    }

}, time)


setInterval( function(){ // velocidade do placar
    if(userWin == 1){
        user++
        userPts.textContent = user
    }
    if(compWin == 1){
        comp++
        compPts.textContent = comp
    }
}, 100)

}

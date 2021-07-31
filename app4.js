window.onload = () => {
var keys = document.getElementById('keys')
var random = document.getElementById('random')
var ram = ram
var keyPress = keyPress

setInterval( function(){
    let opcoes = ['q', 'w', 'e', 'r']
    
    let shuffled = opcoes
    .map( (value) => ({ value, sort: Math.random() }) )
    .sort( (a, b) => a.sort - b.sort)
    .map( ({ value }) => value)

    random.textContent = shuffled[0]
    ram =  shuffled[0]
    }, 900)


document.querySelector('body').addEventListener('keydown', function(e){
    keys.textContent=(e.key) //user 
    keyPress = e.key //user press...
})

var userWin = 0
var compWin = 0

var result = document.getElementById('result')
setInterval( function(){ //verifica de quanto em quanto tempo

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

    }, 500)


    var user = 0 
    var comp = 0 
    var userPts = document.getElementById('userPts')
    var compPts = document.getElementById('compPts')

    setInterval( function(){
        if(userWin == 1){
        user++
        console.log(user)
    
        userPts.textContent = user
        compPts.textContent = comp
        }
    }, 500)

    setInterval( function(){
        if(compWin == 1){
        comp++

        userPts.textContent = user
        compPts.textContent = comp
        }
    }, 500)
}

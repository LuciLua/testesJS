window.onload = () => {
var keys = document.getElementById('keys')
var random = document.getElementById('random')
var result = document.getElementById('result')

document.querySelector('body').addEventListener('keydown', function(e){

    var randomizar = Math.random(e.key)

    let unshuffled = ['q','w','e','r']

    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    random.textContent = shuffled[0]
    keys.textContent=(e.key)

    if (e.key == shuffled[0]){
        result.innerHTML='❤'
    }
    else {
        result.innerHTML='☠'
    }
})

}
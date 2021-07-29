window.onload = () => {
var keys = document.getElementById('keys')


document.querySelector('body').addEventListener('keydown', function(e){
    keys.textContent=(e.key)
})

}
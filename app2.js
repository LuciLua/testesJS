window.onload = function(){
    // body
    document.body.style.display='flex'
    document.body.style.alignItems='center'
    document.body.style.justifyContent='center'

    document.body.style.margin='0'
    document.body.style.padding='0'
    
    document.body.style.width='100%'
    document.body.style.height='100vh'


    // screen action
    const tela = document.createElement('div')
    tela.className='screen'    
        
    tela.style.width='80vh'
    tela.style.height='80vh'
    tela.style.background='#2d2d2d'
    
    tela.style.display='flex'
    tela.style.alignItems='center'
    tela.style.justifyContent='center'
    
    tela.style.position='relative'
    
    document.body.appendChild(tela)
    
    
    // pixel
    const pixel = document.createElement('div')
    pixel.className='pixel'
    
    
    pixel.style.width='10vh'
    pixel.style.height='10vh'

    pixel.style.backgroundImage="url(run.gif)"
    pixel.style.backgroundSize="100%"


    pixel.style.top= 0 + 'px'
    pixel.style.left= 0 + 'px'    
    
    pixel.style.position='absolute'
    
    document.body.appendChild(pixel)
    tela.append(pixel)
    
    // movimentos
    
    var px = 0
    var py = 0

    document.querySelector('body').addEventListener('keydown', function(event){
        console.info( event.key );

        var up = false
        var down = false
        var left = false
        var right = false
        
        pixel.style.transform='rotateY(0deg)'
        switch(event.key){
            case 'ArrowUp': //cima
                up = true
                break
            case 'ArrowDown': //baixo
                down = true
                break
            case 'ArrowRight': //esquerda
                left = true
                break
            case 'ArrowLeft': //direita
                right = true
                pixel.style.transform='rotateY(180deg)'
                break
            }
            

        if(up == true){
            px--
            pixel.style.top=+ (px*10) + 'px'
        }

        if(down == true){
            px++
            pixel.style.top=+ (px*10) + 'px'
        }
        if(left == true){
            py++
            pixel.style.left=+ (py*10) + 'px'
        }
        if(right == true){
            py--
            pixel.style.left=+ (py*10) + 'px'
        }
    })


}
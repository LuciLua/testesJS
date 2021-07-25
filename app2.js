function tela(){
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
    
    
    pixel.style.width='3vh'
    pixel.style.height='3vh'
    pixel.style.background='#00ff00'
    
    pixel.style.position='absolute'
    pixel.style.top='0'
    
    document.body.appendChild(pixel)
    tela.append(pixel)
    
    // movimentos

    document.querySelector('body').addEventListener('keydown', function(event){
        console.info( event.key );
        var value = 0 
        switch(event.key){
            case 'ArrowUp': //cima
                pixel.style.background = '#000'
                break
            case 'ArrowDown': //baixo
                pixel.style.background = '#fff'
                break
            case 'ArrowRight': //esquerda
                pixel.style.background = '#ff0000'
                break
            case 'ArrowLeft': //direita
                pixel.style.background = '#ff99ff'
                break
        }
    })

}
document.addEventListener('DOMContentLoaded', (event) => {

    let items = document.querySelectorAll('.box .par');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });

    function handleDragStart(e) {
        this.style.opacity = '0.1'; //o que fica antes de soltar
      
        dragSrcEl = this;
      
        // e.dataTransfer.effectAllowed = 'move';
        // e.dataTransfer.setData('text/html', this.innerHTML);
      }
  
    function handleDragEnd(e) {
      this.style.opacity = '0.1'; // o que fica depois que solta
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }

  
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over'); //borda onde ele for passsando em cima
      this.style.opacity='1'
    }
  
    function handleDragLeave(e) { //saindo do over
       this.classList.remove('over');// termina borda quando solta onde ele for passsando em cima
       this.remove()
    }
  
  });


  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    return false;
  }
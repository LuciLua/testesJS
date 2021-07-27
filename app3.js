document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.4';
      
        dragSrcEl = this;
      
        // e.dataTransfer.effectAllowed = 'move';
        // e.dataTransfer.setData('text/html', this.innerHTML);
      }
  
    function handleDragEnd(e) {
      this.style.opacity = '0.1';
  
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
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    let items = document.querySelectorAll('.box .par');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  });


  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    return false;
  }
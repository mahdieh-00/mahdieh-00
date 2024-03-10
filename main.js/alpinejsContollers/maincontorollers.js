document.addEventListener('alpine:init', () => {
    Alpine.data('mainData', () => ( 
        {
         massage:'I love programming',
         names: ['jihoon','hyunsuk','asahi'], 
         testFunc(){

       alert(this.massage)
            }
    }
    
   ))
})
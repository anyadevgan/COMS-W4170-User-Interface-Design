console.log($(".check"))

$(document).ready(function(){
    $(".bi-check-circle-fill").click(function(){

        
        if(this.classList.contains('bi-check-circle-fill')){
         
            this.classList.remove('bi-check-circle-fill')
            this.classList.add('bi-circle')
            
        }
            
    })

    $(".bi-circle").click(function(){

        if(this.classList.contains('bi-circle')){
            this.classList.remove('bi-circle')
            this.classList.add('bi-check-circle-fill')
            
        }
            
    })

    $(".bi-heart").click(function(){

        if(this.classList.contains('bi-heart')){
            this.classList.remove('bi-heart-fill')
            this.classList.add('bi-heart-fill')
            
        }
            
    })
})
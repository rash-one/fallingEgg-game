
let basketObject=document.querySelector('.basket');
let basketPosition=0;




window.addEventListener("load",function(){
    function hundleKey(event){
        if(event.key==='ArrowLeft'){
            basketPosition-=5
            updateBasketPosition()
        }
        else if(event.key==='ArrowRight'){
            basketPosition+=5
            updateBasketPosition()
        }
    }
    function updateBasketPosition(){
        basketPosition=Math.max(0,Math.min(87,basketPosition)) //to ensure the the basket is within the vp
        basketObject.style.left=basketPosition+"%";
    }

    document.addEventListener('keydown',hundleKey)
    //////////////////////////////////////////////////////////////
    fall()
    //////////////////
    
})

 








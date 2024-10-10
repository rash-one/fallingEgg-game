
score=0

function fall(){
    let EggObject=this.document.querySelector('img');
    let top=0;
    let left=Math.random()*(this.window.innerWidth - EggObject.offsetWidth) //to make egg fall randomly

    let id=setInterval(()=>{
        top+=10;
        if(top<window.innerHeight-EggObject.height){
            
            EggObject.style.top=top+"px"
            EggObject.style.left=left+"px"
        }
        else{
            
            if( basketObject.offsetLeft + basketObject.width >   //checking if the egg inside the basket or not
                EggObject.offsetLeft + EggObject.width &&
                basketObject.offsetLeft <EggObject.offsetLeft
                ){

                    clearInterval(id)
                   EggObject.classList.add("hide")   //egg inside!
                   
        
                }
                else{
                    EggObject.src="./images/Uovo_sorridente.png"  //egg outside the basket
                    clearInterval(id)
                }
              
            setTimeout(function(){               //resetting
                EggObject.classList.remove("hide")
                EggObject.style.top="0px"
                 EggObject.src="./images/egg4.png"
                 fall() //execute the function again and again 
            },1000)   
                  
        } 
    },50)
}

 let _left = document.getElementById('left')
    let right = document.getElementById('right')
    let _bus=document.querySelector('.bus')
    let _img=document.querySelectorAll('.bus>img')
    let list = document.getElementById('list')
    let line = document.querySelector('.line')


    let lastImg=document.createElement('img')
    lastImg.src =_img[0].src
    _bus.appendChild(lastImg)

    _img=document.querySelectorAll('.bus>img')  
    _bus.style.width = (_img.length*1300)+'px'
    


    let autoSlideTimer; 


        function startAutoSlide() {
        ///همه زمانارو پاککردم
        clearTimeout(autoSlideTimer);

        line.style.transition = 'none';///صفرش کنیم
        line.style.width = '0%';

        setTimeout(() => {
            line.style.transition = `width  5s linear`; 
            line.style.width = '100%';
        }, 50); 

        ///اسلایدارو ببره جلو
        autoSlideTimer = setTimeout(() => {
            autoClick(); 
            startAutoSlide(); 
        }, 5000);
    }



    window.addEventListener('mousedown' , (e)=>{
        let num=e.button
        if(num==2){
            autoClick()
        }if(num==0){
            leftClick()
        }
    })
    window.addEventListener('contextmenu' , (e)=>{
        e.preventDefault()
    })


    let turn = 0


    
    function autoClick(){
        if(turn<_img.length-1){
            turn++
            _bus.style.left= -(turn*1300)+'px'

           if(turn==_img.length-1) {
                setTimeout(()=>{
                       _bus.style.transition='0s'
                        turn=0
                        _bus.style.left='0px'
                        setTimeout(()=>{
                            _bus.style.transition='.4s'
                        },100)
                },10)
           }
        }
     startAutoSlide();
    }

    function leftClick(){

           if(turn>0){
            turn--
            _bus.style.left=-(turn*1300)+'px'

            if(turn==0){
                _left.style.left='-200px'
            }
        }
         startAutoSlide();
    }


    ////tumbnail///
    for(let i =0 ; i<_img.length-1; i++){
        let x = document.createElement('img')
        x.src=_img[i].src
        list.appendChild(x)

        let imgTumb=document.querySelectorAll('#list>img')
        imgTumb.forEach((val , i)=>{
            val.addEventListener('click' ,()=>{
                turn=i-1
                autoClick()
            
            })
          

        })

    }

 startAutoSlide();
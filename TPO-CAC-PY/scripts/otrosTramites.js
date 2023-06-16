
const btn_otrosTramites=document.querySelector('.btn-otrosTramites');
const seccion_otrosTramites=document.querySelector('#seccion-otrosTramites');

btn_otrosTramites.addEventListener('click', ()=>{
    if(seccion_otrosTramites.style.display= 'none'){
        seccion_otrosTramites.style.display= 'block';
    }else{
        seccion_otrosTramites.style.display= 'none';
    }
     
});
    
    const btn1= document.querySelector('#boton1');
    const listaClick1= document.getElementById('list_click-1');
    const icon1= document.querySelector('#icon1');
    const icon11= document.querySelector('#icon1-1');
    
    btn1.addEventListener('click',()=>{
        if(listaClick1.style.display==="none"){
            listaClick1.style.display="Block";
            icon1.style.display = 'none';
            icon11.style.display= 'block';
        }else{
            listaClick1.style.display="none";
            icon1.style.display="block";
            icon11.style.display= 'none';

        }
    })

    const btn2= document.querySelector('#boton2');
    const listaClick2= document.getElementById('list_click-2');
    const icon2= document.querySelector('#icon2');
    const icon22= document.querySelector('#icon2-1');

    
    btn2.addEventListener('click',()=>{
        if(listaClick2.style.display==="none"){
            listaClick2.style.display="Block";
            icon2.style.display = 'none';
            icon22.style.display = 'block';

            
        }else{
            listaClick2.style.display="none";
            icon2.style.display="block";
            icon22.style.display="none";

        }
    })

    const btn3= document.querySelector('#boton3');
    const listaClick3= document.getElementById('list_click-3');
    const icon3= document.querySelector('#icon3');
    const icon33= document.querySelector('#icon3-1');

    
    btn3.addEventListener('click',()=>{
        if(listaClick3.style.display==="none"){
            listaClick3.style.display="Block";
            icon3.style.display = 'none';
            icon33.style.display = 'block';

        }else{
            listaClick3.style.display="none";
            icon3.style.display="block";
            icon33.style.display="none";

        }
    })

    const btn4= document.querySelector('#boton4');
    const listaClick4= document.getElementById('list_click-4');
    const icon4= document.querySelector('#icon4');
    const icon44= document.querySelector('#icon4-1');

    
    btn4.addEventListener('click',()=>{
        if(listaClick4.style.display==="none"){
            listaClick4.style.display="Block";
            icon4.style.display = 'none';
            icon44.style.display = 'block';

        }else{
            listaClick4.style.display="none";
            icon4.style.display="block";
            icon44.style.display = 'none';
        }
    })

    const btn5= document.querySelector('#boton5');
    const listaClick5= document.getElementById('list_click-5');
    const icon5= document.querySelector('#icon5');
    const icon55= document.querySelector('#icon5-1');
   

    
    btn5.addEventListener('click',()=>{
        if(listaClick5.style.display==="none"){
            listaClick5.style.display="Block";
            icon5.style.display = 'none';
            icon55.style.display = 'block';
           

        }else{
            listaClick5.style.display="none";
            icon5.style.display="block";
            icon55.style.display = 'none';

        }
    })
    // function click1(){
        
    //     console.log("capture el boton")
    //     if(listaClick1.style.display==="none"){
    //         listaClick1.style.display="Block"; 
    //         icon.style.display="none";     
    //     }else{
    //         listaClick1.style.display="none";
    //         icon.style.display="block";
    //     }
    // }
   
    function click2(){
        const listaClick2= document.getElementById('list_click-2');
        if(listaClick2.style.display==="none"){
            listaClick2.style.display="Block";
            icon.style.display="none";    
        }else{
            listaClick2.style.display="none";
            icon.style.display="block";
        }
    }
   
   function click3(){
    const listaClick3= document.getElementById('list_click-3');
    if(listaClick3.style.display==="none"){
        listaClick3.style.display="Block";
        icon.style.color="#F6F6F6";
    }else{
        listaClick3.style.display="none";
        icon.style.color="#035225";
    }
   }

   function click4(){
    const listaClick4= document.getElementById('list_click-4');
    if(listaClick4.style.display==="none"){
    listaClick4.style.display="Block";
    }else{
        listaClick4.style.display="none"
    }
   }

   function click5(){
    const listaClick5= document.getElementById('list_click-5');
    const footer=document.getElementById('footer');
    if(listaClick5.style.display==="none"){
        listaClick5.style.display="Block";
        listaClick5.style.position="absolute";
    }else{
        listaClick5.style.display="none"
    }
   }
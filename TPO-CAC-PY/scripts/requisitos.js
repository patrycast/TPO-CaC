let btn_requisitos =document.querySelector(".btn-requisitos");
let seccionRequisitos=document.querySelector("#seccion_requisitos");
// let contenidoPrincipal= document.querySelector(".contenido-principal");
let lista=document.querySelector('.seccion_requisitos-lista');
let parrafos=document.querySelectorAll('.parrafo');
let imagen="../../imagenesimg7.png";



btn_requisitos.addEventListener('click', ()=>{
  if(seccionRequisitos.style.display='none'){
    seccionRequisitos.style.display='block';
  }else{
    seccionRequisitos.style.display='none'
  }       
         
})
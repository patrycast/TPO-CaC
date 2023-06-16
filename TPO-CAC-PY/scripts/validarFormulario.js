const seccionFormIngreso=document.querySelector('#formulario_ingreso');
const btn_form= document.querySelector('.btn-form');

btn_form.addEventListener('click', ()=>{
if(seccionFormIngreso.style.display = ' none '){
    seccionFormIngreso.style.display = 'block';
}else{}
})

const form=document.querySelector('.formulario');

window.onload=function(){
    // console.log(3);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let datos_ok=false;
    const nombre= document.querySelector('#nombre');
    const mensaje1= document.querySelector('#mensaje1');
    if(nombre.value.trim() === '' || nombre.value.length < 3 || nombre.value.length > 70 || !isNaN(nombre.value)){
        mensaje1.innerHTML='Ingrese un nombre válido (minmo 3 caracteres)';
        mensaje1.style.backgroundColor="rgb(185, 0,0)";
        mensaje1.style.color="white";
        nombre.focus();
        nombre.value='';
        datos_ok= false;
        // setTimeout(()=>{
        //     mensaje1.remove()
        // }, 5000);
        return;
    }else{
        datos_ok=true;
        mensaje1.innerHTML = '';
    }
    
    const nacionalidad= document.querySelector('#nacionalidad');
    const mensaje2=document.getElementById('mensaje2');
    if(nacionalidad.value.trim() ==='' || nacionalidad.value.length < 3 || nacionalidad.value.length > 50 || !isNaN(nacionalidad.value)){
        mensaje2.innerHTML='Ingrese una nacionalidad válida';
        mensaje2.style.backgroundColor="rgb(185, 0,0)";
        mensaje2.style.color='white';
        nacionalidad.focus();
        nacionalidad.value='';
        datos_ok=false;
        // setTimeout(()=>{
            // mensaje2.remove()
        // }, 3000);
    }else{
        datos_ok=true;
        mensaje2.innerHTML = '';
        mensaje2.style.backgroundColor = 'green';
        mensaje2.style.color = 'white';
    }

    const estadoCivil=document.querySelector('#estadoCivil');
    const mensaje3= document.querySelector('#mensaje3');
    if (estadoCivil.value === '') {
        mensaje3.innerHTML = 'Seleccione una opción';
        mensaje3.style.backgroundColor="rgb(185, 0,0)";
        mensaje3.style.color='white';
        mensaje3.style.display='block';
        estadoCivil.focus();
        estadoCivil.value='';
        datos_ok=false;
        setTimeout(()=>{
            // mensaje3.remove()
        }, 3000);
      } else {
        datos_ok=true;
        mensaje3.innerHTML = '';
        mensaje3.style.backgroundColor = 'green';
        mensaje3.style.color = 'white';

      }


    let dnis= document.getElementById('dni');
    const mensaje4= document.getElementById('mensaje4');
    console.log(mensaje4)
    if( dnis.value.length < 7 || dnis.value.length > 9 || parseFloat(dnis.value) < 0){
        console.log(dnis);
        mensaje4.innerHTML='El DNI/LC/LE no es valido';
        mensaje4.style.backgroundColor="rgb(185, 0,0)";
        mensaje4.style.color='white';
        console.log(mensaje4)
        dnis.focus();
        dnis.value='';
        datos_ok=false;
        // setTimeout(()=>{
            // mensaje4.remove()
        // }, 3000);
    }else{
        datos_ok=true;
        mensaje4.innerHTML = '';
        mensaje4.style.backgroundColor = 'green';
        mensaje4.style.color = 'white';
    }


    let cuil=document.querySelector('#cuil');
    const mensaje5=document.querySelector('#mensaje5');
    if( cuil.value.length != 11 || parseFloat(cuil.value) < 0){
        mensaje5.innerHTML='Ingrese un Cuil válido';
        mensaje5.style.backgroundColor="rgb(185, 0,0)";
        mensaje5.style.color='white';
        console.log(mensaje5)
        dnis.focus();
        dnis.value='';
        datos_ok=false;
        // setTimeout(()=>{
        //     mensaje5.remove()
        // }, 3000);
    }else{
        datos_ok=true;
        mensaje5.innerHTML = '';
    };
   
    const nacimiento=document.querySelector('#nacimiento');
    const mensaje6=document.querySelector('#mensaje6');

    if(nacimiento.value===''){
        mensaje6.innerHTML='Ingrese Fecha de Nacimiento valida';
        mensaje6.style.backgroundColor="rgb(185, 0,0)";
        mensaje6.style.color="white";
        nacimiento.focus();
        nacimiento.value='';
            datos_ok=false;
        // setTimeout(()=>{
        //     mensaje6.remove()
        // }, 3000);
    }else{
        datos_ok=true;
        mensaje6.innerHTML = '';
    }

    
    let domicilio=document.querySelector('#domicilio');
    let mensaje7=document.querySelector('#mensaje7');
    domicilio=domicilio.value.trim()
    if(domicilio === '' || domicilio.length < 4 || domicilio.length > 70 ){
        mensaje7.innerHTML='Ingrese un domicilio válido';
        mensaje7.style.backgroundColor="rgb(185, 0,0)";
        mensaje7.style.color="white";
        domicilio.focus();
        domicilio.value='';
        // setTimeout(()=>{
        //     mensaje7.remove()
        // }, 3000);
        datos_ok=false;
    }else{
        datos_ok=true;
        mensaje7.innerHTML = '';
    }

    let localidad=document.querySelector('#localidad');
    let mensaje8=document.querySelector('#mensaje8');
    localidad=localidad.value.trim();
    if(localidad === '' || localidad.length < 4 || localidad.length > 50 ){
        console.log()
        mensaje8.innerHTML='Ingrese una localidad válido';
        mensaje8.style.backgroundColor="rgb(185, 0,0)";
        mensaje8.style.color="white";
        localidad.focus();
        localidad.value='';
        setTimeout(()=>{
            // mensaje8.remove()
        }, 3000);
        datos_ok=false;
    }else{
        datos_ok=true;
        mensaje8.innerHTML = '';
    }

    let provincia=document.querySelector('#provincia');
    let mensaje9=document.querySelector('#mensaje9');
    provincia= provincia.value.trim();
    if(provincia === '' || provincia.length < 4 || provincia.length > 50){
        mensaje9.innerHTML='Ingrese una provincia válida';
        mensaje9.style.backgroundColor="rgb(185, 0,0)";
        mensaje9.style.color="white";
        provincia.focus();
        provincia.value='';
        // setTimeout(()=>{
            // mensaje9.remove()
        // }, 3000);
        datos_ok=false;
    }else{
        // datos_ok=true;
        mensaje9.innerHTML = '';
    }

    let codigoPostal=document.querySelector('#codigoPostal');
    let mensaje10=document.querySelector('#mensaje10');
    if (codigoPostal.value.trim()==='' || codigoPostal.value<=0 ||  String(codigoPostal.value).length > 4 ||  String(codigoPostal.value).length < 4) {
        console.log(codigoPostal.value)
        mensaje10.innerHTML='Ingrese un codigo postal válido de 4 caracteres';
        mensaje10.style.backgroundColor="rgb(185, 0,0)";
        mensaje10.style.color="white";
        codigoPostal.focus();
        codigoPostal.value='';
        setTimeout(()=>{
            // mensaje10.remove()
        }, 5000);
        datos_ok=false;
    }else{
        datos_ok=true;
        mensaje10.innerHTML = '';
    }

    let telefono=document.querySelector('#tel');
    let mensaje11=document.querySelector('#mensaje11');
    if (telefono.value.trim()==='' || telefono.value<=0 ||  String(telefono.value).length > 15) {
        console.log(telefono.value)
        mensaje11.innerHTML='Ingrese un telefono válido';
        mensaje11.style.backgroundColor="rgb(185, 0,0)";
        mensaje11.style.color="white";
        telefono.focus();
        telefono.value='';
        setTimeout(()=>{
            // mensaje11.remove()
        }, 5000);
        datos_ok=false;
    }else{
        datos_ok=true;
        mensaje11.innerHTML = '';
    }

    let tareas=document.querySelector('#tarea-q-realiza');
    let mensaje12=document.querySelector('#mensaje12');
    if (tareas.value.trim()==='' || tareas.value.length < 4 || tareas.value.length > 100) {
        console.log(tareas.value)
        mensaje12.innerHTML='El texto no puede estar vacio, ni superar los 100 caracteres';
        mensaje12.style.backgroundColor="rgb(185, 0,0)";
        mensaje12.style.color="white";
        tareas.focus();
        tareas.value='';
        setTimeout(()=>{
            // mensaje12.remove()
        }, 5000);
        datos_ok=false;
    }else{
        datos_ok=true;
        mensaje12.innerHTML = '';
    }

    if(datos_ok){
        msjFinal=document.querySelector('#mensajeFinal');
        msjFinal.innerHTML = 'Formulario enviado exitosamente';
        msjFinal.style.backgroundColor = '#003366';
        msjFinal.style.color = 'white';
        msjFinal.style.display="block";
        msjFinal.style.fontSize="1.4em";
        msjFinal.style.fontWeight="bold";
        msjFinal.style.textAlign="center";
        // msjFinal.style.borderRadius="5px";
        setTimeout(()=>{
            msjFinal.remove()
        }, 5000);
        form.reset();
    }
   
});



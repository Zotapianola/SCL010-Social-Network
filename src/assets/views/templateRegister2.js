import { register } from '../js/auth.js'
import { templateWall } from './templateWall.js';


export const templateRegister2 = () => {
    const containerRegister2 = document.createElement('div');
    containerRegister2.setAttribute("class","mainClass");
    //escrir html
    const contentRegister2 = `<h1>Registrar cuenta</h1>
                            <p>Ingrese un correo</p>                            
                            <input class="input" type= "text">
                            <p>Ingrese una contraseña</p>
                             <input class="input" type= "text">
                             <p>Ingrese nuevamente su contraseña</p>
                            <input class="input" type= "text">
                            <button class="button" id="back">Volver</button>
                            <button class="button" id="next">Seguir</button>`


    containerRegister2.innerHTML = contentRegister2;


    const btnNext = containerRegister2.querySelector('#next')

    btnNext.addEventListener('click', () =>{
        let passwordValue = document.getElementById('password').value;
        // let uidValue = document.getElementById('id').value;
        
    if (validateRegister(emailValue, passwordValue)) {
        if (passwordValue.length <6 && passwordValue.length >0){
            document.getElementById("error-message").innerHTML = "Contrasena de minimo 6 caracteres"; 
        }
        else {
            register(nameValue,emailValue, passwordValue,uidValue);
            document.getElementById('error-message').innerHTML="Verifica tu correo";
        }
    }
    templateWall();
        window.location.hash = '#/Wall';
    })

    const btnBack = containerRegister2.querySelector('#back');
    btnBack.addEventListener('click', () =>{
     
        window.location.hash = '#/register';
    })
    return containerRegister2;
}
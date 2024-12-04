// validacion en tiempo real de nombre
const nombre = document.getElementById("nombre");
    nombre.addEventListener("input", function(){
        //con cada caracter ingresado la funcion chequea si la cadena ingresada cumple con 
        // el regex asignado a la variable emailPattern 
        const nombrePattern = /^[A-Za-zÀ-ÿ\s]+$/;
        // quita espacios y crea la variable nombreValue sobre la que se haran las comparaciones 
        const nombreValue = nombre.value.trim();

        if (nombreValue==""){ /*si nombreValue esta vacio, pone texto */
            document.getElementById("nombreError").innerText = "El nombre no puede estar vacio";
        } else if (!nombrePattern.test(nombreValue)){ /*si no cumple con el regex pone texto*/
            document.getElementById("nombreError").innerText = "El nombre tiene caracteres no permitidos";
        } else { /*si no esta vacio y se cumple con el regex el texto se quita*/
            document.getElementById("nombreError").innerText = "";
        }
    });

const email = document.getElementById("email");
    email.addEventListener("input", function(){
        const emailPattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
        const emailValue = email.value.trim();
        
        if (emailValue==""){ 
            document.getElementById("emailError").innerText = "El email no puede estar vacio";
        } else if (!emailPattern.test(emailValue)){ 
            document.getElementById("emailError").innerText = "Ingresa un email válido (ej: Juan@gmail.com)";
        } else { 
            document.getElementById("emailError").innerText = "";
        }
    });

//Validacion de telefono
    const telefono = document.getElementById("telefono");
    telefono.addEventListener("input", function() {
        if (!isNaN(telefono.value) && telefono.value.trim() !== "") {
            document.getElementById("telefonoError").innerText = "";
        } else {
            document.getElementById("telefonoError").innerText = "Introduzca solo números";
        }
    });
    

// validacion de maximo de caracteres en Mensaje
const asunto = document.getElementById("asunto");
const asuntoMax = 50; //maximo de caracteres
    asunto.addEventListener("input", function(){
        
        const asuntoLength = asunto.value;
        //se compara en tiempo real el valor de length de mensaje contra el maximo de caracteres
        if (asuntoLength == ""){
            document.getElementById("asuntoError").innerText = "El asunto no puede estar vacio";
        } else if (asuntoLength.length >= asuntoMax) {
            document.getElementById("asuntoError").innerText = "Alcanzaste el máximo de caractéres";
        } else{
            document.getElementById("asuntoError").innerText = asuntoLength.length + "/" + asuntoMax;
        }
    })

const mensaje = document.getElementById("mensaje");
const mensajeMax = 250; 

    mensaje.addEventListener("input", function(){
        const mensajeLength = mensaje.value;
        if (mensajeLength==""){
            document.getElementById("mensajeMax").innerText = "El mensaje no puede estar vacio";
        }else if (mensajeLength.length >= mensajeMax){
            document.getElementById("mensajeMax").innerText = "Alcanzaste el máximo de caractéres";
        } else {
            document.getElementById("mensajeMax").innerText = mensajeLength.length + "/" + mensajeMax;
        }
    })

// Chunk para desplegar Faqs cuando la pantalla tiene un ancho <= a 600px
const totalFaqs = 6; //Numero de faqs 
// Este bucle crea una funcion para cada faqs del texto principal y si la pantalla es <= a 600px de ancho se habilitan las funciones que cambian la visibilidad del texto
    for (let i=1; i<=totalFaqs; i++){
        document.getElementById(`quest${i}`).addEventListener("click", () => {
            if(window.innerWidth<=600){
                const text1 = document.getElementById(`text${i}`);
                if (text1.classList.contains("visible")) {
                    text1.classList.remove("visible");
                } else {
                    text1.classList.add("visible");
                }
            } 
        })
    }


// document.getElementById("formulario").addEventListener("submit", function(event) {
//     event.preventDefault()


//     //se crea un objeto 
//      const data = {
//          nombre:  document.getElementById("nombre").value,
//          email: document.getElementById("email").value,
//          telefono: document.getElementById("telefono").value,
//          asunto: document.getElementById("asunto").value,
//          mensaje: document.getElementById("mensaje").value,
//      }

//     //de objeto a JSON
//      const dataJson= JSON.stringify(data);
//      console.log(dataJson);

// });

import agregarUsuarioBD from "./agregarUsuarioBD.js";


document.getElementById('registroForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  // ------------------------
  // Obtener valores de los campos
  // ------------------------
  const userName = document.getElementById('nombre').value;
  const userPhone = document.getElementById('telefono').value;
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const alertaDiv = document.getElementById('alerta');
  
  // ------------------------
  // Validaciones
  // ------------------------
  let errores = [];

  // Validación de campos obligatorios
  if (!userName || !userPhone || !userEmail || !userPassword || !confirmPassword) {
    errores.push("Todos los campos son obligatorios.");
  }

  // Validación de formato de teléfono (números de 10 dígitos)
  const telefonoRegex = /^[0-9]{10}$/;
  if (!telefonoRegex.test(userPhone)) {
    errores.push("El número de teléfono debe tener 10 dígitos.");
  }
  
  // Validación de formato de email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(userEmail)) {
    errores.push("El formato del correo electrónico no es válido.");
  }
  
  // Validación de contraseña
  if (userPassword !== confirmPassword) {
    errores.push("Las contraseñas no coinciden.");
  }
  
  // Si hay errores, se muestran
  if (errores.length > 0) {
    alertaDiv.innerHTML = `
    <div class="alert alert-danger" role="alert">
    ${errores.join('<br>')}
    </div>
    `;
    return; // Detener si hay errores
  }
  
  const newUserData = {
    email: userEmail,
    first_name: userName,
    last_name: "martinez",     // Make sure you have these values
    last_name2: "flores",   // Make sure you have these values
    password: confirmPassword,
    telephone: userPhone
  };
  // ------------------------
  // Enviar los datos a la API
  // ------------------------
  try {
    const registroExitoso = await agregarUsuarioBD({
      name: userName,
      telephone: userPhone,
      email: userEmail,
      password: userPassword
    });

    if (registroExitoso) {

      alertaDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
          Registro exitoso. Usuario creado correctamente.
        </div>
      `;
      // Reiniciar el formulario
      document.getElementById('registroForm').reset();
    } else {
      alertaDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Hubo un problema al registrar al usuario. Inténtalo nuevamente.
        </div>
      `;
    }

  } catch (error) {
    console.error("Error al conectar con la API:", error);
    alertaDiv.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Error de conexión. Inténtalo más tarde.
      </div>
    `;
  }
});


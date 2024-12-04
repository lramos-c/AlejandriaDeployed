// verificarLogin.js
export default async function verificarLogin(email, password) {

  try {
    // Prepare the request payload
    const loginData = {
      email: email,
      password: password,
    };

    // Send a POST request to the backend endpoint
    const response = await fetch('http://54.173.225.101:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    // Check if the response is successful
    if (response.ok) {
      // Parse the response (e.g., user's email or other details)
      const data = await response.json();
      return { success: true, user: data }; // Return success and user data
    } else {
      // Handle failed login (e.g., invalid credentials)
      return { success: false, message: 'Invalid credentials' };
    }
  } catch (error) {
    // Handle server or network errors
    return { success: false, message: 'Server error or network issue' };
  }
}

  // Recupera los usuarios almacenados en localStorage (si los hay)
  const userList = JSON.parse(localStorage.getItem("Usuarios Registrados")) || [];

  // Busca el usuario con el correo proporcionado
  const user = userList.find((u) => u.Correo === email);

  if (user && user.Contraseña === password) {
    // Si el usuario existe y la contraseña coincide, retorna true
    return true;
  } else {
    // Si no existe o las contraseñas no coinciden, retorna false
    return false;
  }
}

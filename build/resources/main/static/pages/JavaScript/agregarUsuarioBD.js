export default async function agregarUsuarioBD(newUserData) {
  const URL = "http://54.173.225.101:8080/api/bda"; 

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserData)
    });

    // Check response status
    if (response.status === 409) {
     throw new Error('User already exists with this email');
     }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Usuario registrado:", data);
    return data;

  } catch(error) {
    console.error("Error:", error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

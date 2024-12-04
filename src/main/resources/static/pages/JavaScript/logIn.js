// Fetch users from the API
async function fetchUsers() {
    try {
      const response = await fetch("http://54.173.225.101:8080/api/bda/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users from the server");
      }
      return await response.json(); // Assuming the API returns an array of user objects
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Return an empty array in case of an errorz
    }
  }

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the page from refreshing
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Fetch users from the API
    const users = await fetchUsers();
  
    // Check if the email and password match any user from the API
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
  
      // Update the button to display the logged-in user
      const userText = document.getElementById("userText");
      userText.textContent = user.name || user.email;
  
      // Optionally redirect to another page
      window.location.href = "/";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

// Display logged-in user on page load
window.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    const userText = document.getElementById("userText");
    userText.textContent = loggedInUser.name || loggedInUser.email;
  }
});
  
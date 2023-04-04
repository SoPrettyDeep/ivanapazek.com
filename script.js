const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

loginBtn.addEventListener("click", (event) => {
	event.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;

	// TODO: Send a POST request to the server to check if the credentials are valid
	// If they are valid, redirect the user to the members-only page
	// If they are invalid, display an error message

	// Example of how to display an error message
	errorMsg.innerText = "Invalid username or password";
});

loginBtn.addEventListener("click", function() {
  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;

  fetch("login.php", {    //Note that we need to replace https://yourdomain.com with the actual domain name or IP address of your 000webhost server.
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      // Redirect to the members page if login is successful
      window.location.replace("members.php"); //Note that we need to replace https://yourdomain.com with the actual domain name or IP address of your 000webhost server.
    } else {
      throw new Error("Login failed.");
    }
  })
  .catch(error => {
    console.error(error);
  });
});
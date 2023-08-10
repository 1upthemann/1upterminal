document.getElementById("inputField").addEventListener("keyup", function(event) {
    const sequence = "1up"; // The sequence of characters to trigger the redirection
    const inputText = event.target.value;

    if (inputText.endsWith(sequence)) {
        window.location.href = "https://www.1upterminal.com/usernameandpassword.html"; // Replace with your desired link
    }
});

function checkCode() {
    var codeInput = document.getElementById("codeInput").value;
    var resultDiv = document.getElementById("result");

    if (codeInput === "P162676") {
        // Show the result div if the code is correct
        resultDiv.classList.remove("hidden");

        // Redirect after a short delay (e.g., 2 seconds)
        setTimeout(function() {
            window.location.href = "https://drive.google.com/drive/folders/1XmAFtzPyNrO3gErAwMYntG2wJhlw_gSH?usp=drive_link"; // Replace with your redirect URL
        }, 2000); // 2000 milliseconds = 2 seconds
    } else {
        // Hide the result div and show an alert if the code is incorrect
        resultDiv.classList.add("hidden");
        alert("Incorrect code. Please try again.");
    }
}

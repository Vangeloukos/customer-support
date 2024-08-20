function checkCode() {
    var codeInput = document.getElementById("codeInput").value;
    var resultDiv = document.getElementById("result");
    var hiddenLink = document.getElementById("hiddenLink");

    if (codeInput === "P162676") {
        resultDiv.classList.remove("hidden");
    } else {
        resultDiv.classList.add("hidden");
        alert("Incorrect code. Please try again.");
    }
}

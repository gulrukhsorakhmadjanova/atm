document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");

    // Mapping of numeric account numbers to jsonplaceholder usernames and 4-digit PINs
    const accountMapping = {
        "123456": { username: "Bret", pin: "3874" },
        "654321": { username: "Antonette", pin: "7771" },
        "789012": { username: "Samantha", pin: "4157" }
    };

    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const accountNumber = document.getElementById("account-number").value;
        const pin = document.getElementById("password").value;

        if (accountNumber && pin) {
            // Placeholder API URL, using jsonplaceholder
            const apiUrl = "https://jsonplaceholder.typicode.com/users";

            // Make an API call to validate the account number and PIN
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Validate the account number using the mapping
                    const accountInfo = accountMapping[accountNumber];
                    if (!accountInfo || accountInfo.pin !== pin) {
                        alert("Invalid account number or PIN. Please try again.");
                        return;
                    }

                    // Validate against the simulated accounts
                    const account = data.find(user => user.username === accountInfo.username);
                    if (account) {
                        // Redirect to the next page if login is successful
                        window.location.href = "/menu.html";
                    } else {
                        alert("Invalid account number or PIN. Please try again.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("An error occurred. Please try again.");
                });
        } else {
            alert("Please enter both account number and PIN.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const amountInput = document.getElementById("amount");
    const buttons = {
        "option-20": 20,
        "option-40": 40,
        "option-60": 60,
        "option-100": 100
    };

    Object.keys(buttons).forEach(buttonId => {
        document.getElementById(buttonId).addEventListener("click", function() {
            amountInput.value = buttons[buttonId];
        });
    });

    document.getElementById("option-custom").addEventListener("click", function() {
        amountInput.focus();
    });
});
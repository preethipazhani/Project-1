function showSection(sectionId) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('create-account-section').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simple validation (replace with actual authentication logic)
    if (email === "user@bank.com" && password === "password") {
        alert("Logged in successfully!");
        return false; // prevent form submission for demo
    } else {
        alert("Invalid email or password. Please try again.");
        return false; // prevent form submission for demo
    }
}

function createAccount() {
    const name = document.getElementById('create-name').value;
    const email = document.getElementById('create-email').value;
    const password = document.getElementById('create-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false; // prevent form submission
    }

    // Simple account creation logic (replace with actual backend logic)
    alert("Account created successfully! Please log in.");
    showSection('login-section');
    return false; // prevent form submission for demo
}

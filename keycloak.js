// keycloak.js

// Create a Keycloak instance
const keycloak = new Keycloak({
    url: "http://127.0.0.1:8080/auth/", // Ensure the URL ends with /auth/
    realm: "ipsas",
    clientId: "ipsas-frontend"
});

// Function to log in
function login() {
    keycloak.login();
}

// Function to log out
function logout() {
    keycloak.logout();
}


// Initialize Keycloak
function initKeycloak() {
    return keycloak.init({ onLoad: 'login-required' })
        .then(authenticated => {
            if (authenticated) {
                console.log("User  authenticated");
                console.log("Token:", keycloak.token);
                document.getElementById("logout-btn").style.display = "block"; // Show logout button
                document.getElementById("login-btn").style.display = "none"; // Hide login button
            } else {
                console.log("User  not authenticated");
            }
        })
        .catch(error => {
            console.error("Keycloak initialization failed", error);
        });
}

// Initialize Keycloak when the script is loaded
initKeycloak();
let loginForm = document.getElementById('login-form');
let registerForm = document.getElementById('register-form');

let firstHeading = document.getElementById('first-heading');
let secondHeading = document.getElementById('second-heading');

function ToggleForm(value) {
    if (value != 'login') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';

        registerForm.style.backgroundColor = '#ffffff';

        firstHeading.style.backgroundColor = '#ffffff';
        secondHeading.style.backgroundColor = '#78c465';
    } else {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';

        loginForm.style.backgroundColor = '#ffffff';

        firstHeading.style.backgroundColor = '#78c465';
        secondHeading.style.backgroundColor = '#ffffff';
    }
}

const fullname = ['Manish Kushwaha','Deepak Kushwaha','Shalini Kushwaha'];
const username = ['manish1234', 'deepak4321','shalini1234'];
const password = ['@manish#1234', '@deepak#4321','@shalini#1234'];

function userLogin() {
    document.getElementById('login-form').addEventListener("submit", function(event) {
        event.preventDefault();
        
        const loginUsername = document.getElementById('login-username').value;
        const loginPassword = document.getElementById('login-password').value;

        let xValue;
        let yValue;
        for (let x of username) {
            for (let y of password) {
                if (x == loginUsername && y == loginPassword) {
                    xValue = loginUsername;
                    yValue = loginPassword;
                    console.log((xValue in username));
                    console.log((yValue in password));
                } else {
                    // console.log(x);
                    // console.log(y);
                }
            }
        }
        // console.log(xValue);
        // console.log(yValue);
        if (xValue == loginUsername && yValue == loginPassword) {
            document.getElementById('login-register-container').style.display = 'none';
            document.getElementById('main-container-id').style.display = 'flex';
            alert("Login Successful!")
        } else {
            alert("Failed To Login, Wrong username Or password.");
        }
    })
}

function userRegister() {
    document.getElementById('register-form').addEventListener("submit", function(event) {
        event.preventDefault();
    
        const registerName = document.getElementById('register-name').value;
        const registerUsername = document.getElementById('register-username').value;
        const registerPassword = document.getElementById('register-password').value;
        const registerAgainPassword = document.getElementById('register-again-password').value;
        
        if (registerPassword != registerAgainPassword) {
            alert("Please Enter Same Password On Both Field.")
        } else {
            let foundUsername;
            for (let x of username) {
                if (x == registerUsername) {
                    foundUsername = x;
                }
            }

            if (foundUsername == registerUsername) {
                alert("This username Already axist.")
            } else {
                fullname.concat(registerName);
                username.concat(registerUsername);
                password.concat(registerPassword);

                alert("Username And Password Saved, Please Login.")
                ToggleForm('login');
            }
        }
    })
}
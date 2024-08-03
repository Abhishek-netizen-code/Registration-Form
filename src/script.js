const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// Add event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        alert('Registration successful');
        swal("Welcome! " + usernameVal, "Registration successful", "success");
        location.href = `demo.html?username=${usernameVal}`;
    }
};

const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    let sRate = 0;

    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            sRate++;
        } else {
            return false;
        }
    }
    sendData(usernameVal, sRate, count);
};

const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
};

// Define the validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Username must be at least 3 characters');
    } else {
        setSuccessMsg(username);
    }

    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid email');
    } else {
        setSuccessMsg(email);
    }

    if (phoneVal === "") {
        setErrorMsg(phone, 'Phone number cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone number');
    } else {
        setSuccessMsg(phone);
    }

    if (passwordVal === "") {
        setErrorMsg(password, 'Password cannot be blank');
    } else if (passwordVal.length <= 6) {
        setErrorMsg(password, 'Password must be at least 8 characters');
    } else {
        setSuccessMsg(password);
    }

    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'Confirm password cannot be blank');
    } else if (passwordVal !== cpasswordVal) {
        setErrorMsg(cpassword, 'Passwords do not match');
    } else {
        setSuccessMsg(cpassword);
    }
    successMsg(usernameVal);
};

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Ajoutez un identifiant');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Ajoutez un Email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Donnez une adresse mail valide');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Ajoutez un mot de passe');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Le mot de passe doit contenir au moins 8 caractères')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Confirmez le mot de passe');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Les mots de passe ne correspondent pas");
    } else {
        setSuccess(password2);
    }

};

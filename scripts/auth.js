const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password)
    //signup with email and password
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred)
    })
})
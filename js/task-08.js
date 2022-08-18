const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
    event.preventDefault();

    

    if (form.email.value === '' || form.password.value === '') {
        alert('В вас є незаповнене поле!')
    }
    
    else {
        const formEl = event.currentTarget.elements
        const login = {
            mail : formEl.email.value,

            password :  formEl.password.value,
        }
    

        console.log(`email : ${login.mail}`);
        console.log(`password : ${login.password}`)


        console.log(' ');
        console.log(' ');
        form.reset()
    } 
};
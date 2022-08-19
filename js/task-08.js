const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    

    if (form.email.value === '' || form.password.value === '') {
        alert('В вас є незаповнене поле!')
    }
    
    else {
        const formData = new FormData(event.currentTarget);

        console.log(formData)

        formData.forEach((value, name) => {
        console.log(`${name}: ${value}`);
        });

        console.log(' ');
        console.log(' ');
        form.reset()
    } 
};
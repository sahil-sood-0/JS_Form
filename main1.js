// alert('Yameta Kudasai')

// Single element 

// console.log(document.getElementById('my-form'));
// console.log(documet.querySelector('h1'));

// Multiple elements 


// console.log(document.querySelectorAll('.item'));

// console.log(document.getElementsByClassName('.item')); // We cannot use array methods

// console.log(document.getElementsByTagName('.item')); // We cannot use array methods

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// MANIPULATING DOM

// const ul =document.querySelector('.items');

// // ul.remove();

// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hemlo';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = 'green';
//     // document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeOut(() => msg.remove(), 3000);
    }
    else{
        // console.log('success');
        const li = document.createElement('li');


        li.appentChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));

        // Add HTML
    li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        userList.appentChild(li);

        // Clear the fields 

        nameInput.value = '';
        emailInput.value = '';

    }

    // console.log(nameInput.value);


}




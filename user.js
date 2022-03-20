const user = localStorage.getItem('user');

const modal = document.getElementById('myModal');
const welcomeMsg = document.querySelector('h1');
const clearBtn = document.querySelector('.welcome-msg button');
const [closeModalSpan] = document.getElementsByClassName('close');
const login = document.querySelector('.login');

clearBtn.addEventListener('click', () => {
    localStorage.setItem('user', '');
    welcomeMsg.innerText = '';
});

login.addEventListener('submit', (event) => {
    event.preventDefault();
    const { userName } = event.target;
    localStorage.setItem('user', userName.value);
    welcomeMsg.innerText = ` WELCOME ${userName.value}`;
    modal.style.display = 'none';
    // POST запрос на бек
})

if (!user) {
    modal.style.display = 'block';
} else {
    welcomeMsg.innerText = ` WELCOME ${user}`;
}

closeModalSpan.onclick = function () {
    modal.style.display = 'none';
};

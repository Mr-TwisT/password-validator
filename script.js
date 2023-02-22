const passInput = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
  if (
    passInput.value.length >= minValue &&
    passInput.value.match(letters) &&
    passInput.value.match(numbers) &&
    passInput.value.match(special)
  ) {
    passInput.style.borderColor = 'lime';
    p.textContent = 'Masz bardzo silne hasło 💪';
    p.style.color = 'lime';
  } else if (
    passInput.value.length >= minValue &&
    passInput.value.match(letters) &&
    passInput.value.match(numbers)
  ) {
    passInput.style.borderColor = 'gold';
    p.textContent = 'Masz dobre hasło 🙂';
    p.style.color = 'gold';
  } else {
    passInput.style.borderColor = 'red';
    p.textContent = 'Masz słabe hasło 🙁';
    p.style.color = 'red';
  }
};

const checkInput = () => {
  if (passInput.value !== '') showMsg();
  else {
    passInput.style.borderColor = '';
    p.textContent = 'Nie podałeś hasła...';
    p.style.color = '';
  }
};

passInput.addEventListener('keyup', checkInput);

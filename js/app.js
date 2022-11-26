const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');
const submitButton = document.querySelector('.form__button');

const validateRegiser = (registerValue) => {
	const reg = /[a-f][0-9]/;

	if (!reg.test(registerValue) && registerValue !== '') {
		alert(`Podana wartość ${registerValue} nie jest w kodzie szesnatkowym! Możliwość wykonania operacji została zablokowana!`);
		submitButton.disabled = true;
	} else {
		submitButton.disabled = false;
	}
};

inputs.forEach((input) => {
	input.addEventListener('change', (e) => {
		const inputValue = e.target.value;
		validateRegiser(inputValue.toLowerCase());
	});
});

const executeOperation = (e) => {
	e.preventDefault();

	const firstSelectedRegister = e.target.firstRegister.value;
	const secondSelectedRegister = e.target.secondRegister.value;
	const operation = e.target.operation.value;

	if (operation === 'mov') {
		e.target[`${firstSelectedRegister.toLowerCase()}`].value = e.target[`${secondSelectedRegister.toLowerCase()}`].value;
	} else {
		// XCHG operation
		const firstRegister = e.target[`${firstSelectedRegister.toLowerCase()}`].value;
		const secondRegister = e.target[`${secondSelectedRegister.toLowerCase()}`].value;

		e.target[`${firstSelectedRegister.toLowerCase()}`].value = secondRegister;
		e.target[`${secondSelectedRegister.toLowerCase()}`].value = firstRegister;
	}
};

form.addEventListener('submit', executeOperation);

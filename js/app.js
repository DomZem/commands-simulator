const form = document.querySelector('.form');

const executeOperation = (e) => {
	e.preventDefault();

	const firstSelectedRegister = e.target.firstRegister.value;
	const secondSelectedRegister = e.target.secondRegister.value;
	const operation = e.target.operation.value;

	if (operation === 'mov') {
		e.target[`${firstSelectedRegister.toLowerCase()}`].value = e.target[`${secondSelectedRegister.toLowerCase()}`].value;
	} else {
		// XCHG Operation
	}
};

form.addEventListener('submit', executeOperation);

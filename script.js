const display = document.getElementById('display');
let isError = false;

const appendToDisplay = (input) => {
	if (display.value.length <= 12 && !isError) {
		display.value += input;
	}
};

const clearDisplay = () => {
	display.value = '';
	isError = false;
};

const calculate = () => {
	if (isError) {
		display.value = 'Error';
	} else {
		try {
			display.value = eval(display.value);
		} catch (error) {
			display.value = 'Error';
			isError = true;
		}
	}

	console.log(display.value.length);
};

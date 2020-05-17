const loader = document.querySelector('.preloader');
const main = document.getElementById('main-content');
const htmlElement = document.querySelector('html');

function init() {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';
		htmlElement.style.overflowY = 'scroll';
		main.style.display = 'block';

		setTimeout(() => (main.style.opacity = 1), 50);
	}, 4000);
}

init();

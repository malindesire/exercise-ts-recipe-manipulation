const part2 = () => {
	const header = document.querySelector<HTMLElement>('header');
	const pasteList = document.querySelector<HTMLUListElement>(
		'.ingredients-list-paste'
	);

	const one = () =>
		(document.querySelector<HTMLParagraphElement>(
			'.logo-text'
		)!.style.color = '#384241');
	one();

	const two = () => (header!.style.justifyContent = 'initial');
	two();

	const three = () => (header!.style.borderColor = 'lightgrey');
	three();

	const four = () =>
		(document.querySelector<HTMLHeadingElement>('#recipe-name')!.innerHTML =
			'Frozen Cheescake');
	four();

	const five = () =>
		document
			.querySelector('.time-container')!
			.firstElementChild?.classList.add('material-symbols-outlined');

	five();

	const six = () =>
		(document.querySelector(
			'.time-container'
		)!.lastElementChild!.innerHTML = '60+ min');
	six();

	const seven = () =>
		(document.querySelector('img')!.src =
			'/src/assets/frozen-cheesecake-slice.jpg');
	seven();

	const eight = () =>
		(document.querySelector<HTMLElement>(
			'.ingredients-container'
		)!.style.backgroundColor = '#f9f9f9');
	eight();

	const nine = () => {
		const list = document.querySelector<HTMLUListElement>(
			'.ingredients-list-bottom'
		);

		const itemOne = document.createElement('li');
		itemOne.innerHTML = '15st digistivetex';

		const itemTwo = document.createElement('li');
		itemTwo.innerHTML = 'Lite smör';

		list?.replaceChildren(itemOne, itemTwo);
	};
	nine();

	const ten = () => (pasteList!.children[2].innerHTML = '3tsk vaniljsocker');
	ten();

	const eleven = () => {
		const lastItem = '<li>400g naturell philadelphiaost</li>';
		pasteList?.insertAdjacentHTML('beforeend', lastItem);
	};
	eleven();

	const twelwe = () =>
		document.querySelector('.instructions')!.classList.remove('shadow');
	twelwe();

	const thirteen = () => {
		const list = document.querySelector('.instructions-list');
		list!.children[1].innerHTML =
			'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
		list!.children[8].innerHTML = 'Ställ in i frysen över natten.';
	};
	thirteen();
};

export default part2;

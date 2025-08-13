const part1 = () => {
	const recipeName =
		document.querySelector<HTMLHeadingElement>('#recipe-name');
	const image = document
		.querySelector('.image-container')
		?.querySelector<HTMLImageElement>('img');
	const pasteList = document.querySelector<HTMLUListElement>(
		'.ingredients-list-paste'
	);

	const one: () => string = () =>
		recipeName?.innerHTML ? recipeName?.innerHTML : '';

	const two: () => string = () =>
		recipeName?.tagName ? recipeName?.tagName : '';

	const three: () => string = () => {
		const description =
			document.querySelector<HTMLParagraphElement>('.description');

		return description ? window.getComputedStyle(description).fontSize : '';
	};

	const four: () => string = () => (image?.alt ? image?.alt : '');

	const five: () => {} = () => {
		return {
			url: image?.src,
			height: image?.naturalHeight,
			width: image?.naturalWidth,
		};
	};

	const six: () => number = () => {
		return pasteList ? pasteList.childElementCount : NaN;
	};

	const seven: () => Element | undefined = () => pasteList?.children[3];

	const eight = () => {
		const instructionList =
			document.querySelector<HTMLOListElement>('.instructions-list');
		if (!instructionList) return [];

		const items = Array.from(instructionList.children);
		const instructions = items.map((item, i) => {
			if (item instanceof HTMLLIElement)
				return {
					order: i + 1,
					text: item.innerText,
				};
		});

		return instructions;
	};

	const answers = {
		1: one(),
		2: two(),
		3: three(),
		4: four(),
		5: five(),
		6: six(),
		7: seven(),
		8: eight(),
	};

	console.log(answers);
};

export default part1;

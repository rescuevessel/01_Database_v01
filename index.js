const message = document.querySelector('input');
const shit = document.getElementById('shit');
const things = ['479032262', '478985904', '478998982'];

let listed = things
	.map(things => {
		return `<li><iframe
		frameBorder='0'
		title={images.title}
		src='https://player.vimeo.com/video/${things}'
		width='640px'
		height='360px'
	  ></iframe></li>`;
	})
	.join('');

function numbersOnly(value) {
	if (typeof value === 'number') {
		return value;
	}
}

message.addEventListener('change', updateValue);
shit.innerHTML = listed;

function updateValue(e) {
	let newValue = e.target.value;
	newnewValue = newValue.replace(/\D/g, '');

	things.push(newnewValue);
	listed = things
		.map(things => {
			return `<li><iframe
		frameBorder='0'
		title={images.title}
		src='https://player.vimeo.com/video/${things}'
		width='640px'
		height='360px'
	  ></iframe></li>`;
		})
		.join('');
	console.log(things);
	shit.innerHTML = listed.toString();
	message.value = null;
	//log.textContent = e.target.value;
	//shit.innerHTML = things.toString();
}

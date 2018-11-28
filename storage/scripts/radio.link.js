'use strict';

function openRadioFurry() {
	let windowObjectReference;

	windowObjectReference = null;

	if (windowObjectReference === null || windowObjectReference.closed) {
		window.open(
			'https://furryradio.pro',
			'_blank',
			'width=420,height=520,' +
			'resizable'
		);
	} else {
		windowObjectReference.focus();
	}
}

function createRadioLink() {
	let id;
	let link;
	let text;

	id = document.getElementById('radioFurryLink');
	link = document.createElement('a');
	text = document.createTextNode('Радио FURRY');

	link.setAttribute('href', '#');
	link.setAttribute('class', 'radioFurry radioFurryLink');
	link.setAttribute('onclick', 'openRadioFurry(); return false;');

	link.appendChild(text);
	id.appendChild(link);
}

createRadioLink();

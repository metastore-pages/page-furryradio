'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initJPlayer() {
	let streamTitle, streamURL, jPRadioStream;

	streamTitle = 'Radio W.T.F. - Live Stream';
	streamURL = 'http://stream.radio.wtf:8880';

	jPRadioStream = {
		title: streamTitle,
		oga: streamURL
	};

	let ready = false;

	$('#jp-init-radio').jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer('setMedia', jPRadioStream);
		},
		pause: function () {
			$(this).jPlayer('clearMedia');
		},
		error: function (event) {
			if (ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
				$(this).jPlayer('setMedia', jPRadioStream).jPlayer('play');
			}
		},
		cssSelectorAncestor: '#jp-container-radio',
		swfPath: '',
		supplied: 'oga',
		preload: 'none',
		wmode: 'window',
		useStateClassSkin: true,
		autoBlur: false,
		keyEnabled: true
	});
}

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	extJS_initJPlayer();
});

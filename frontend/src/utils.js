function millisToMinutesAndSeconds(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return seconds === 60
		? minutes + 1 + ':00'
		: minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function textFormat(text) {
	return text.split('_').join(' ');
}

function strLengthFormat(text) {
	if (text.length > 25) {
		return `${text.substr(0, 25)} ...`;
	} else {
		return text;
	}
}

export { millisToMinutesAndSeconds, textFormat, strLengthFormat };

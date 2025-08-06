
function getFormattedDateTime(dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

function getFormattedDateTime2(dateString) {
	const date = new Date(dateString);
	const dateOptions = { year: "numeric", month: "long", day: "numeric" };
	const timeOptions = { hour: "numeric", minute: "2-digit", hour12: true };
	return (
		date.toLocaleDateString("en-US", dateOptions) + ", " + date.toLocaleTimeString("en-US", timeOptions)
	);
}

function getFormattedDateTime3(dateString) {
	const date = new Date(dateString);
	const options = { year: "numeric", month: "short", day: "numeric" };
	return date.toLocaleDateString("en-US", options);
}

function getFormattedDateTime4(dateString) {
	const date = new Date(dateString);
	const dateOptions = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	const formattedDate = date.toLocaleDateString("en-US", dateOptions);
	const timeOptions = { hour: "numeric", minute: "2-digit", hour12: true };
	const formattedTime = date.toLocaleTimeString("en-US", timeOptions);
	return `${formattedDate}, ${formattedTime}`;
}

export {
    getFormattedDateTime,
    getFormattedDateTime2,
    getFormattedDateTime3,
    getFormattedDateTime4
}
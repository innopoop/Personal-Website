const hexToRgb = (color: string): [number, number, number] => {
	const fullRegex = /^#?([a-f\d])([a-f\d])(a-f\d])$/i;
	const full = color.replace(
		fullRegex,
		(_, r, g, b) => `${r}${r}${g}${g}${b}${b}`
	);
	const rgbValues = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2}$/i.exec(
		full
	);

	if (!rgbValues) {
		throw new Error(`Unable to convert color ${color}`);
	}
	return [
		Number.parseInt(rgbValues[1], 16),
		Number.parseInt(rgbValues[2], 16),
		Number.parseInt(rgbValues[1], 16),
	];
};

export const colorToRgbValues = (color: string) => {
	if (color.charAt(0) === "#") return hexToRgb(color);

	const safeColor = color.replace(/ /g, "");
	const colorType = color.substr(0, 4);

	const regArray = safeColor.match(/\((.+)\)/);
	if (!colorType.startsWith("rgb") || !regArray) {
		console.log(color);
		throw new Error(`Provide RGB, RGBA, or HEX colors.`);
	}

	return regArray[1].split(",").map((str) => Number.parseFloat(str));
};

export const addColorAlpha = (color: string, alpha: number) => {
	if (!/^#|rgb|RGB/.test(color)) return color;
	const [r, g, b] = colorToRgbValues(color);
	const safeAlpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
	return `rgba(${r}, ${g}, ${b}, ${safeAlpha});`;
};

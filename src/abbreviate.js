export const abbreviate = (string) => {
    const nonAlphanumericCharsIncSeparator = /(?=[^a-z0-9+]+)/;
    const nonAlphanumericChars = /[^a-z0-9+]/;
    const wordLengthLimit = 4;
    
    return string.split(nonAlphanumericCharsIncSeparator).map((str, idx) => {
        const findDelimeter = (str, idx) => {
            return idx !== 0 ? str.charAt(0) + str.charAt(1) : str.charAt(0);
        };
    	const trimWord = (s) => s.replace(nonAlphanumericChars, '');

        if (trimWord(str).length >= wordLengthLimit) {
            return findDelimeter(str, idx) + trimWord(str).slice(1, -1).length + str[str.length - 1];
        } else {
            return str;
        }
    }).join('')
};

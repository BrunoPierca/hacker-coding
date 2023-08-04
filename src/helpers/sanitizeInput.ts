export const sanitizeInput = (input: string): string => {
    const parser = new DOMParser();

    const parsedInput = parser.parseFromString(input, 'text/html');

    return parsedInput.body.innerText;
}
const textToBase64 = (text: string): string => {
    const base64Text = Buffer.from(text).toString('base64');

    return base64Text;
};

export default textToBase64;

const fileToBase64 = async (file: File): Promise<string> => {
    return await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64Text = reader.result;
            if (typeof base64Text === 'string') {
                resolve(base64Text);
            } else {
                resolve('error');
            }
        };
        reader.onerror = () => {
            resolve('error');
        };
    });
};

export default fileToBase64;


export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
    );
}

export function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
export const handleDownload = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
let date = new Date().getFullYear()
export const yearsArray = Array.from({ length: date - 1801 + 1 }, (_, i) => 1801 + i).reverse()
export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
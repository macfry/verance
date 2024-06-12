const debounce = <Type>(
    fn: (...args: Type[]) => void,
    delay: number,
): ((...args: Type[]) => void) => {
    let timeout: NodeJS.Timeout;
  
    return (...args: Type[]): void => {
        if (timeout) {
            clearTimeout(timeout);
        }
  
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
  
export default debounce;

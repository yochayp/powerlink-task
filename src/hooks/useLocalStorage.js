import { useState } from "react";

const returnInitialState = (storageKey) => {
      const item = window.localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : {};
  }
  
const useLocalStorage = (storageKey)  => {
    const [storedValue, setStoredValue] = useState(
      returnInitialState(storageKey)
    );
    
    const setValue = (valueToStore) => {
        window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
    };
    
    return [storedValue, setValue]
  }

  export { useLocalStorage };
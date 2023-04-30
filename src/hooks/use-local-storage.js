import {useEventCallback, useEventListener} from "hooks";
import {useCallback, useEffect, useState} from "react";
import {parseJSON} from "utils";

const useLocalStorage = (key, initialValue) => {
  const readValue = useCallback(() => {
    if(typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? parseJSON(item) : initialValue;
    } catch(err) {
      console.warn(`Error reading sessionStorage key "${key}":`, err);
      return initialValue;
    }
  }, [initialValue, key])
  const [storedValue, setStoredValue] = useState(readValue);
  const setValue = useEventCallback(value => {
    if (typeof window == 'undefined') {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`,
      )
    }
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  })
  useEffect(() => {
    setStoredValue(readValue());
  }, [])
  const handleStorageChange = useCallback((event) => {
    if(event?.key && event.key !== 'key') {
      return;
    }
    setStoredValue(readValue());
  }, [key, readValue])
  useEventListener('storage', handleStorageChange);
  useEventListener('local-storage', handleStorageChange);
  return [storedValue, setValue];
}

export {useLocalStorage};
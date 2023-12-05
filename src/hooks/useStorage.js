import {useEffect, useState} from 'react';

export default function useStorage(key, initValue = null) {
    const initialValue = localStorage.getItem(key) || initValue;
    const [state, setState] = useState(initialValue);
    useEffect(() => {
        if (state === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, state);
        }
    }, [key, state]);

    return [state, setState];
}

// const [val, setVal] = useStorage('somekey', 'initValue');

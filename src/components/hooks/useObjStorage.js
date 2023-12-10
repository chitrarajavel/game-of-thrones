import {useEffect, useState} from 'react';

// Reference: SB jobly project
export default function useObjStorage(key, initValue = null) {
    const initialValue = JSON.parse(localStorage.getItem(key)) || initValue;
    const [state, setState] = useState(initialValue);
    useEffect(() => {
        if (state === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [key, state]);

    return [state, setState];
}

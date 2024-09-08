import React from 'react';
import { useContext } from 'react';
import{data,product} from '../UseContextHook'

const ChildC = () => {
    const name = useContext(data)
    const watch = useContext(product)
    
    return (
        <div>
            ChildC
            <h2>my name is {name} and im wear {watch}</h2>
        </div>
    );
};

export default ChildC;
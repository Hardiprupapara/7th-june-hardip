import React, { createContext } from 'react';
import ChildA from '../hooks/childcomponent/ChildA';

const data = createContext()
const product = createContext()

const UseContextHook = () => {

    //create,provider,usecontext


    const name = "hardip"
    const watch = "Rolex Watch"

    return (
        <div>
            <data.Provider value={name}>
                <product.Provider value={watch}>
                    <ChildA />
                </product.Provider>
            </data.Provider>
        </div>
    );
};

export default UseContextHook;
export { data, product }
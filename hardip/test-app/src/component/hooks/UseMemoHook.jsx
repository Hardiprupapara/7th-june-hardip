import React, { useCallback, useMemo, useState } from 'react';
// import ChildA from '../childcomponent/ChildA';
import ChildA from '../hooks/childcomponent/ChildA';

const UseMemoHook = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const muticountMemo = useMemo(
        // in this function when state value is change render happens so we use useMemo so we can handel a rerender.
        function multicount() {
            return count * 2
        }, [item])

    const ChildValue = useCallback(() => {
        // this function called eavry time when any state is change
        //  for handel a function re render we use callback
    }, [count])

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>


            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>updateCount</button>
            <h2>{muticountMemo}</h2>
            <button onClick={() => setItem(item * 2)}>updateItem</button>
            <h2>{item} item</h2>
            <ChildA ChildValue={ChildValue} />
        </div>
    );
};

export default UseMemoHook;
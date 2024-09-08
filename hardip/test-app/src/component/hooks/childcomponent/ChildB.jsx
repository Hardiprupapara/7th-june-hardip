import React from 'react';
import ChildC from '../childcomponent/ChildC';

const ChildB = () => {
    return (
        <div>
            childB
            <ChildC/>
        </div>
    );
};

export default ChildB;
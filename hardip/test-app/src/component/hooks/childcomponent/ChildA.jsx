import React, { memo } from 'react';
import ChildB from '../childcomponent/ChildB';

const ChildA = ({ChildValue}) => {
    console.log("child a")

    return (
        <div>
            childA
            <ChildB/>
        </div>
    );
};

export default memo(ChildA);
// @flow
import React from 'react';

type TProps = {
    name: string,
};

export const Example = ({name}: TProps) => {
    return (
        <div>
            <h3>Example component</h3>
            <div>
                Props <b>name</b> from container: {name}
            </div>
        </div>
    );
};

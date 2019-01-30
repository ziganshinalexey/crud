// @flow
import React from 'react';

type TProps = {
    src: {
        content: string,
        id: string,
        node: any,
        viewBox: string,
    },
};

export const SvgIcon = (props: TProps) => (
    <svg height="1em" width="1em">
        <use xlinkHref={`#${props.src.id}`} />
    </svg>
);

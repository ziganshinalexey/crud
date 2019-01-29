// @flow
import React from 'react';

type TProps = {
    src: {
        id: string,
        content: string,
        viewBox: string,
        node: any,
    },
};

export const SvgIcon = (props: TProps) => (
    <svg height="1em" width="1em">
        <use xlinkHref={`#${props.src.id}`} />
    </svg>
);

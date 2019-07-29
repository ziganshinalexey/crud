// @flow
import React from 'react';
import {Button} from 'modules/common/components/Button';

type TProps = {
    id: string,
    onDelete: (id: string) => Promise<any>,
};

export const ActionDelete = ({id, onDelete}: TProps) => {
    function handleDelete() {
        onDelete(id);
    }

    return (
        <Button actionType={'delete'} onClick={handleDelete}>
            Delete
        </Button>
    );
};

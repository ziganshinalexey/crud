// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'modules/common/components/Button';
import buttonStyles from 'modules/common/components/Button/styles.local.less';

type TProps = {
    id: string,
    onDelete: (id: string) => Promise<any>,
};

const Actions = (props: TProps) => {
    const {id, onDelete} = props;
    function handleDelete() {
        onDelete(id);
    }

    return (
        <>
            <Link className={buttonStyles.edit_button} to={`edit/${props.id}`}>
                Edit
            </Link>
            <Button actionType={'delete'} onClick={handleDelete}>
                Delete
            </Button>
        </>
    );
};

export default Actions;

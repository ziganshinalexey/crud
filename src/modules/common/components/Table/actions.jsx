// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.local.less';

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
            <Link className={styles.edit_button} to={`edit/${props.id}`}>
                Edit
            </Link>
            <button className={styles.delete_button} onClick={handleDelete}>
                Delete
            </button>
        </>
    );
};

export default Actions;

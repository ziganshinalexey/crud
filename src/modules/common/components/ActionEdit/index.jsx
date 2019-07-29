// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import buttonStyles from 'modules/common/components/Button/styles.local.less';

type TProps = {
    id: string,
};

export const ActionEdit = ({id}: TProps) => {
    return (
        <>
            <Link className={buttonStyles.edit_button} to={`edit/${id}`}>
                Edit
            </Link>
        </>
    );
};

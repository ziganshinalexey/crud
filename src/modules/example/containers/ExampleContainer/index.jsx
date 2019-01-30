// @flow
import {getExample} from 'modules/example/actions/example';
import {Example} from 'modules/example/components/Example';
import type {TExample} from 'modules/example/reducers/example';
import {selectExampleData} from 'modules/example/selectors/example';
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

type TProps = {
    example: TExample,
    getExample: typeof getExample,
};

export class ExampleWrapper extends Component<TProps> {
    componentDidMount() {
        this.props.getExample();
    }

    render() {
        const {example} = this.props;
        return (
            <div>
                <h1>Example container</h1>
                <Example name={example.name} />
            </div>
        );
    }
}

export const ExampleContainer = compose(
    connect(
        (state) => {
            return {
                example: selectExampleData(state),
            };
        },
        {
            getExample,
        }
    )
)(ExampleWrapper);

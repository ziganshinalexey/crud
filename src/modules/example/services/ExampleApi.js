// @flow

// TODO: response type
export interface IExampleApi {
    getExample(): Promise<{data: any, errors: any}>;
}

export class ExampleApi implements IExampleApi {
    async getExample() {
        return {
            data: {id: 'id123', name: 'Hello world'},
            errors: null,
        };
    }
}

import {
    IExecuteFunctions,
    IExecuteSingleFunctions,
    IHookFunctions,
    ILoadOptionsFunctions
} from 'n8n-core';
import {
    IDataObject, NodeApiError
} from 'n8n-workflow';
import {
    OptionsWithUrl
} from 'request';

export enum ExhService {
    PAYMENT = 'payments',
}
const rootUrl = 'https://api.dev.fibricheck.com';



export async function paymentExhApiRequest(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IHookFunctions, method: string, service: ExhService,resource: string, body: any = {}, qs: IDataObject = {}, /* uri?: string, */ option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
    let options: OptionsWithUrl = {
        method,
        body,
        qs,
        // https://api.dev.fibricheck.com/payments/v2/orders
        url: `${rootUrl}/${service}/v2/${resource}`,
        json: true,
    };
    try {
        if (Object.keys(option).length !== 0) {
            options = Object.assign({}, options, option);
        }
        if (Object.keys(body).length === 0) {
            delete options.body;
        }
        if (Object.keys(qs).length === 0) {
            delete options.qs;
        }
        //@ts-ignore
        return await this.helpers.requestOAuth1.call(this, 'exhOAuth1Api', options);
    } catch (error) {
        throw new NodeApiError(this.getNode(), error);
    }
}

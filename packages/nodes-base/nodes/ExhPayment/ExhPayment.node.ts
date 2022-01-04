import {
    ExhService,
    paymentExhApiRequest,
} from './GenericFunctions';


import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
    OptionsWithUri,
} from 'request';

export class ExhPayment implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'ExhPayment',
        name: 'exhPayment',
        icon: 'file:exhPayment.svg',
        group: ['transform'],
        version: 1,
        description: 'Process payments through the Extra Horizon backend',
        defaults: {
            name: 'exhPayment',
            color: '#68ccd1',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                // name: 'exhOAuth1Api',
                name: 'extraHorizonOAuth2Api',
                required: true,
            },
        ],
        properties: [
            //     // Node properties which the user gets displayed and
            //     // can change on the node.
            {
                displayName: 'AuthenticationType',
                name: 'authType',
                type: 'options',
                options: [
                    {
                        name: 'Stripe',
                        value: 'stripe',
                    },
                    {
                        name: 'GooglePlay',
                        value: 'google',
                    },
                    {
                        name: 'AppStore',
                        value: 'apple',
                    },
                ],
                default: 'stripe',
                required: true,
                description: 'Payment method',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                displayOptions: {
                    show: {
                        authType: [
                            'stripe',
                            'google',
                            'apple',
                        ],
                    },
                },
                options: [
                    {
                        name: 'OneTimePayment',
                        value: 'oneTimePayment',
                        description: 'purchase a plan once',
                    },
                    {
                        name: 'Subscription',
                        value: 'subscription',
                        description: 'Purchase a given subscription',
                    },
                    {
                        name: 'Upgrade',
                        value: 'upgrade',
                        description: 'Upgrade to a different subscription model',
                    },
                    // TODO
                    // List all operations available
                ],
                default: 'subscription',
                description: 'The operation by default.',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const credentials = await this.getCredentials('ExtraHorizonOAuth2Api') as IDataObject;

        // TODO IMPLEMENT EXH JS SDK
        // const sdk = createOAuth2Client({
        //     host: 'https://api.dev.fibricheck.com',
        //     clientId: '',
        // });

        // await sdk.auth.authenticate({
        //     username: credentials.email,
        //     password: credentials.password,
        // });

        // console.log('sdk.users.health()', await sdk.users.health());
        // console.log('sdk.users.me()', await sdk.users.me());

        let responseData;
        const returnData: IDataObject[] = [];
        responseData = await paymentExhApiRequest.call(this, 'GET', ExhService.PAYMENT, 'orders', {}, {});
        // if (!credentials.accessToken || !credentials.tokenSecret) {
        // TODO This section is to be refactored into a separate function accessible through a generic service layer 
        /*
        ${credentials.consumerKey}
${credentials.consumerSecret}
${credentials.email}
${credentials.password} */
        //     const options: OptionsWithUri = {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Authorization': `OAuth oauth_consumer_key="${credentials.consumerKey}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1641223019",oauth_nonce="A4ofIqvqaX5",oauth_version="1.0",oauth_signature="LgKf7qPU8vlM7rHp2BOX6yoD08Q%3D"`,
        //     },
        //     method: 'PUT',
        //     body: {
        //         contacts: [
        //             data,
        //         ],
        //     },
        //     uri: `https://api.sendgrid.com/v3/marketing/contacts`,
        //     json: true,
        // };

        // responseData = await this.helpers.request(options);
        // }
        if (Array.isArray(responseData)) {
            returnData.push.apply(returnData, responseData as IDataObject[]);
        } else if (responseData !== undefined) {
            returnData.push(responseData as IDataObject);
        }
        return [this.helpers.returnJsonArray(returnData)];
        // return [[]];
    }
}
        // cons
    // }
// }

    // async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    //     let responseData;
    //     const resource = this.getNodeParameter('resource', 0) as string;
    //     const operation = this.getNodeParameter('operation', 0) as string;
    //     //Get credentials the user provided for this node
    //     const credentials = await this.getCredentials('exhPaymentApi') as IDataObject;

    //     if (resource === 'contact') {
    //         if (operation === 'create') {
    //             // get email input
    //             const email = this.getNodeParameter('email', 0) as string;
    //             // get additional fields input
    //             const additionalFields = this.getNodeParameter('additionalFields', 0) as IDataObject;
    //             const data: IDataObject = {
    //                 email,
    //             };

    //             Object.assign(data, additionalFields);

    //             //Make http request according to <https://sendgrid.com/docs/api-reference/>
    //             const options: OptionsWithUri = {
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Authorization': `Bearer ${credentials.apiKey}`,
    //                 },
    //                 method: 'PUT',
    //                 body: {
    //                     contacts: [
    //                         data,
    //                     ],
    //                 },
    //                 uri: `https://api.sendgrid.com/v3/marketing/contacts`,
    //                 json: true,
    //             };

    //             responseData = await this.helpers.request(options);
    //         }
    //     }

    //     // Map data to n8n data
    //     return [this.helpers.returnJsonArray(responseData)];
    // }
// }

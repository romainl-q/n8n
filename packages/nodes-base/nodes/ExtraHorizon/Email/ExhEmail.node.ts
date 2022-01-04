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

export class ExhEmail implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'ExhEmail',
        name: 'exhEmail',
        icon: 'file:exhEmail.svg',
        group: ['transform'],
        version: 1,
        description: 'Send SMS messages through the Extra Horizon backend',
        defaults: {
            name: 'exhEmail',
            color: '#68ccd1',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'extraHorizonOAuth2Api',
                required: true,
            },
        ],
        properties: [
            //     // Node properties which the user gets displayed and
            //     // can change on the node.
        ],
    }


    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
};

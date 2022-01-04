import {
    IExecuteFunctions
} from 'n8n-core';
import {
    INodeExecutionData,
    INodeType,
    INodeTypeDescription
} from 'n8n-workflow';



export class ExhData implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'ExhData',
        name: 'exhData',
        icon: 'file:exhData.svg',
        group: ['transform'],
        version: 1,
        description: 'Send SMS messages through the Extra Horizon backend',
        defaults: {
            name: 'exhData',
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

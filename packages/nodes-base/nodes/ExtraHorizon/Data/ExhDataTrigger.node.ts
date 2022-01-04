import {
    IWebhookFunctions
} from 'n8n-core';
import {
    INodeType,
    INodeTypeDescription,
    IWebhookResponseData
} from 'n8n-workflow';
 
 
 export class ExhDataTrigger implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Incoming Data Event',
        name: 'exhDataTrigger',
        icon: 'file:exhData.svg',
        group: ['trigger'],
        version: 1,
        subtitle: '={{$parameter["event"]}}',
        description: 'Trigger actions when a Data record gets uploaded',
        defaults: {
            name: 'Data Service Trigger',
            color: '#6ad7b9',
        },
        inputs: [],
        outputs: ['main'],
        credentials: [],
        webhooks: [
            {
                name: 'default',
                httpMethod: 'POST',
                responseMode: 'onReceived',
                path: 'webhook',
            },
        ],
        properties: [],
    };
    async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
        return {
            workflowData: [],
        };
    }
 }
  
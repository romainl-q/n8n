import {
    IWebhookFunctions
} from 'n8n-core';
import {
    INodeType,
    INodeTypeDescription,
    IWebhookResponseData
} from 'n8n-workflow';
 
 
 export class ExhFilesTrigger implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Extra Horizon Files Service Trigger',
        name: 'exhFilesTrigger',
        icon: 'file:exhFiles.svg',
        group: ['trigger'],
        version: 1,
        subtitle: '={{$parameter["event"]}}',
        description: 'Handle incoming Files',
        defaults: {
            name: 'File Service Trigger',
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
  
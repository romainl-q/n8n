import {
    IWebhookFunctions
} from 'n8n-core';
import {
    INodeType,
    INodeTypeDescription,
    IWebhookResponseData
} from 'n8n-workflow';
 
 
 export class ExhTaskTrigger implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Task Execution Scheduling Event',
        name: 'exhTaskTrigger',
        icon: 'file:exhTask.svg',
        group: ['trigger'],
        version: 1,
        subtitle: '={{$parameter["event"]}}',
        description: 'Handle scheduled Tasks',
        defaults: {
            name: 'Task Execution Scheduling Event',
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
  
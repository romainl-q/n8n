import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class ExtraHorizonApi implements ICredentialType {
    name = 'ExtraHorizonApi';
    displayName = 'Extra Horizon API';
    documentationUrl = 'extraHorizon';
    properties = [
        {
            displayName: 'Consumer Key',
            name: 'consumerKey',
            type: 'string' as NodePropertyTypes,
            default: '',
            required: true,
        },
        {
            displayName: 'Consumer Secret',
            name: 'consumerSecret',
            type: 'string' as NodePropertyTypes,
            default: '',
            required: true,
        },
        {
            displayName: 'Email',
            name: 'email',
            type: 'string' as NodePropertyTypes,
            default: '',
            required: true,
        },
        {
            displayName: 'password',
            name: 'password',
            type: 'string' as NodePropertyTypes,
            default: '',
            required: true,
        },
        {
            displayName: 'Access Token',
            name: 'accessToken',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
        {
            displayName: 'Token Secret',
            name: 'tokenSecret',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
    ];
}
 
import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExtraHorizonOAuth1Api implements ICredentialType {
	name = 'exhOAuth1Api';
	extends = [
		'oAuth1Api',
	];
	displayName = 'Extra Horizon OAuth API';
	documentationUrl = 'extraHorizon';
	properties: INodeProperties[] = [
		{
			displayName: 'Request Token URL',
			name: 'requestTokenUrl',
			type: 'hidden',
			default: 'https://api.dev.fibricheck.com/auth/v2/oauth1/tokens',
		},
		// {
		// 	displayName: 'Authorization URL',
		// 	name: 'authUrl',
		// 	type: 'hidden',
		// 	default: 'https://api.twitter.com/oauth/authorize',
		// },
		// {
		// 	displayName: 'Access Token URL',
		// 	name: 'accessTokenUrl',
		// 	type: 'hidden',
		// 	default: 'https://api.twitter.com/oauth/access_token',
		// },
		{
			displayName: 'Signature Method',
			name: 'signatureMethod',
			type: 'hidden',
			default: 'HMAC-SHA1',
		},
	];
}

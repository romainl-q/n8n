import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExtraHorizonOAuth2Api implements ICredentialType {
	name = 'extraHorizonOAuth2Api';
	extends = [
		'oAuth2Api',
	];
	displayName = 'Extra Horizon OAuth2 API';
	properties: INodeProperties[] = [
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://api.dev.fibricheck.com/auth/v2/oauth2/tokens',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://api.dev.fibricheck.com/auth/v2/oauth2/tokens',
			required: true,
		},
		// {
		// 	displayName: 'Scope',
		// 	name: 'scope',
		// 	type: 'hidden',
		// 	default: 'spark:memberships_read meeting:recordings_read spark:kms meeting:schedules_read spark:rooms_read spark:messages_write spark:memberships_write meeting:recordings_write meeting:preferences_read spark:messages_read meeting:schedules_write',
		// },
		// {
		// 	displayName: 'Auth URI Query Parameters',
		// 	name: 'authQueryParameters',
		// 	type: 'hidden',
		// 	default: '',
		// },
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}

/* import {
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
 */
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseOAuthClients extends APIResource {
  static override readonly _key: readonly ['iam', 'oauthClients'] = Object.freeze([
    'iam',
    'oauthClients',
  ] as const);
}
export class OAuthClients extends BaseOAuthClients {}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOAuthScopes extends APIResource {
  static override readonly _key: readonly ['iam', 'oauthScopes'] = Object.freeze([
    'iam',
    'oauthScopes',
  ] as const);
}
export class OAuthScopes extends BaseOAuthScopes {}

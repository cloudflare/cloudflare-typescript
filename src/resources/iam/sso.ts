// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSSO extends APIResource {
  static override readonly _key: readonly ['iam', 'sso'] = Object.freeze(['iam', 'sso'] as const);
}
export class SSO extends BaseSSO {}

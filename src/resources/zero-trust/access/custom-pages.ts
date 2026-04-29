// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCustomPages extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'customPages'] = Object.freeze([
    'zeroTrust',
    'access',
    'customPages',
  ] as const);
}
export class CustomPages extends BaseCustomPages {}

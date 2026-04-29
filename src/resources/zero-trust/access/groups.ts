// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseGroups extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'groups'] = Object.freeze([
    'zeroTrust',
    'access',
    'groups',
  ] as const);
}
export class Groups extends BaseGroups {}

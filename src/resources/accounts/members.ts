// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMembers extends APIResource {
  static override readonly _key: readonly ['accounts', 'members'] = Object.freeze([
    'accounts',
    'members',
  ] as const);
}
export class Members extends BaseMembers {}

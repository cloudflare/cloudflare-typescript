// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDelegations extends APIResource {
  static override readonly _key: readonly ['addressing', 'prefixes', 'delegations'] = Object.freeze([
    'addressing',
    'prefixes',
    'delegations',
  ] as const);
}
export class Delegations extends BaseDelegations {}
